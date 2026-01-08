# Backend Integration Guide for Reviewer Editor

This document provides Python code snippets for integrating the Quill.js editor with your Python backend.

## Prerequisites

Install these Python packages:

```bash
pip install fastapi uvicorn python-docx weasyprint psycopg2-binary
# OR alternatively for PDF conversion:
# pip install xhtml2pdf
```

## 1. Database Schema (PostgreSQL)

```sql
CREATE TABLE reviewers (
    id SERIAL PRIMARY KEY,
    class_code VARCHAR(20) NOT NULL,
    reviewer_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    subject VARCHAR(100),
    content_html TEXT,
    content_docx BYTEA,
    last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(class_code, reviewer_id)
);

CREATE INDEX idx_reviewers_class ON reviewers(class_code);
CREATE INDEX idx_reviewers_class_reviewer ON reviewers(class_code, reviewer_id);
```

## 2. FastAPI Endpoints

### Save Reviewer Content

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
from datetime import datetime

app = FastAPI()

# Database connection
def get_db_connection():
    return psycopg2.connect(
        host="your_host",
        database="your_db",
        user="your_user",
        password="your_password"
    )

class ReviewerContent(BaseModel):
    classCode: str
    reviewerId: int
    content: str  # HTML content from Quill
    format: str = "html"

@app.post("/api/reviewers/save")
async def save_reviewer(data: ReviewerContent):
    """Save HTML content to database"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        cursor.execute("""
            INSERT INTO reviewers (class_code, reviewer_id, content_html, last_modified)
            VALUES (%s, %s, %s, %s)
            ON CONFLICT (class_code, reviewer_id)
            DO UPDATE SET
                content_html = EXCLUDED.content_html,
                last_modified = EXCLUDED.last_modified
        """, (data.classCode, data.reviewerId, data.content, datetime.now()))
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return {"success": True, "message": "Content saved successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### Convert HTML to PDF (Using WeasyPrint)

```python
from fastapi import Response
from weasyprint import HTML
import io

class PDFRequest(BaseModel):
    content: str  # HTML content
    filename: str = "document"

@app.post("/api/reviewers/convert-to-pdf")
async def convert_to_pdf(data: PDFRequest):
    """Convert HTML to PDF using WeasyPrint"""
    try:
        # Add basic CSS for better PDF formatting
        html_with_css = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                @page {{
                    size: A4;
                    margin: 2.5cm;
                }}
                body {{
                    font-family: 'Times New Roman', serif;
                    font-size: 12pt;
                    line-height: 1.6;
                    color: #333;
                }}
                h1, h2, h3, h4, h5, h6 {{
                    color: #2c3e50;
                    margin-top: 1em;
                    margin-bottom: 0.5em;
                }}
                p {{
                    margin-bottom: 1em;
                }}
                img {{
                    max-width: 100%;
                    height: auto;
                }}
                table {{
                    border-collapse: collapse;
                    width: 100%;
                    margin: 1em 0;
                }}
                th, td {{
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }}
                blockquote {{
                    border-left: 4px solid #9d8adb;
                    padding-left: 1em;
                    margin-left: 0;
                    color: #666;
                }}
            </style>
        </head>
        <body>
            {data.content}
        </body>
        </html>
        """
        
        # Convert HTML to PDF
        pdf_buffer = io.BytesIO()
        HTML(string=html_with_css).write_pdf(pdf_buffer)
        pdf_buffer.seek(0)
        
        return Response(
            content=pdf_buffer.getvalue(),
            media_type="application/pdf",
            headers={
                "Content-Disposition": f"attachment; filename={data.filename}.pdf"
            }
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"PDF generation failed: {str(e)}")
```

### Alternative: Convert HTML to PDF (Using xhtml2pdf)

```python
from xhtml2pdf import pisa

@app.post("/api/reviewers/convert-to-pdf-alt")
async def convert_to_pdf_xhtml(data: PDFRequest):
    """Alternative PDF conversion using xhtml2pdf"""
    try:
        html_with_css = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                @page {{
                    size: A4;
                    margin: 2.5cm;
                }}
                body {{
                    font-family: Arial, sans-serif;
                    font-size: 12pt;
                    line-height: 1.6;
                }}
            </style>
        </head>
        <body>
            {data.content}
        </body>
        </html>
        """
        
        pdf_buffer = io.BytesIO()
        pisa_status = pisa.CreatePDF(html_with_css, dest=pdf_buffer)
        
        if pisa_status.err:
            raise HTTPException(status_code=500, detail="PDF generation failed")
        
        pdf_buffer.seek(0)
        
        return Response(
            content=pdf_buffer.getvalue(),
            media_type="application/pdf",
            headers={
                "Content-Disposition": f"attachment; filename={data.filename}.pdf"
            }
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### Load Reviewer Content

```python
@app.get("/api/reviewers/{class_code}/{reviewer_id}")
async def get_reviewer(class_code: str, reviewer_id: int):
    """Retrieve HTML content from database"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT content_html, title, subject, last_modified
            FROM reviewers
            WHERE class_code = %s AND reviewer_id = %s
        """, (class_code, reviewer_id))
        
        result = cursor.fetchone()
        cursor.close()
        conn.close()
        
        if not result:
            raise HTTPException(status_code=404, detail="Reviewer not found")
        
        return {
            "content": result[0],
            "title": result[1],
            "subject": result[2],
            "lastModified": result[3].isoformat()
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

## 3. DOCX to HTML Conversion (Server-side alternative)

If you prefer server-side DOCX processing instead of client-side:

```python
from docx import Document
from docx.oxml.text.paragraph import CT_P
from docx.oxml.table import CT_Tbl
from docx.table import _Cell, Table
from docx.text.paragraph import Paragraph
import io

def docx_to_html(docx_bytes):
    """Convert DOCX to HTML on server"""
    doc = Document(io.BytesIO(docx_bytes))
    html_parts = []
    
    for element in doc.element.body:
        if isinstance(element, CT_P):
            paragraph = Paragraph(element, doc)
            text = paragraph.text
            
            # Check for heading
            if paragraph.style.name.startswith('Heading'):
                level = paragraph.style.name[-1]
                html_parts.append(f"<h{level}>{text}</h{level}>")
            else:
                html_parts.append(f"<p>{text}</p>")
                
        elif isinstance(element, CT_Tbl):
            table = Table(element, doc)
            html_parts.append("<table>")
            for row in table.rows:
                html_parts.append("<tr>")
                for cell in row.cells:
                    html_parts.append(f"<td>{cell.text}</td>")
                html_parts.append("</tr>")
            html_parts.append("</table>")
    
    return "\n".join(html_parts)

# Endpoint
from fastapi import UploadFile, File

@app.post("/api/reviewers/upload-docx")
async def upload_docx(file: UploadFile = File(...)):
    """Upload DOCX and convert to HTML"""
    try:
        contents = await file.read()
        html_content = docx_to_html(contents)
        
        return {
            "success": True,
            "html": html_content
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DOCX conversion failed: {str(e)}")
```

## 4. CORS Configuration

Don't forget to add CORS middleware to allow your Next.js frontend to communicate:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 5. Running the Server

```python
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## 6. Frontend Integration Update

Once your backend is ready, update the frontend `page.jsx` file:

### Update the API URLs:

```javascript
// In handleSave function
const response = await fetch('http://localhost:8000/api/reviewers/save', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    classCode,
    reviewerId,
    content: editorContent,
    format: 'html'
  })
});

// In handleDownloadPDF function
const response = await fetch('http://localhost:8000/api/reviewers/convert-to-pdf', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: editorContent,
    filename: reviewer?.title || 'document'
  })
});

const blob = await response.blob();
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = `${reviewer?.title || 'document'}.pdf`;
document.body.appendChild(a);
a.click();
window.URL.revokeObjectURL(url);
document.body.removeChild(a);
```

### Load from backend on component mount:

```javascript
useEffect(() => {
  const loadDocument = async () => {
    try {
      setLoading(true);
      
      // Try to load from backend first
      const response = await fetch(`http://localhost:8000/api/reviewers/${classCode}/${reviewerId}`);
      
      if (response.ok) {
        const data = await response.json();
        setEditorContent(data.content);
      } else {
        // Fallback to loading DOCX if not in database
        const docxResponse = await fetch(docxUrl);
        const arrayBuffer = await docxResponse.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setEditorContent(result.value);
      }
      
      setLoading(false);
    } catch (err) {
      console.error("Error loading document:", err);
      setLoading(false);
    }
  };

  loadDocument();
}, [classCode, reviewerId]);
```

## 7. Jetson Orin Integration Notes

If you're processing on Jetson Orin:

```python
import subprocess

@app.post("/api/reviewers/process-on-jetson")
async def process_on_jetson(data: ReviewerContent):
    """Send processing task to Jetson Orin"""
    try:
        # Example: Send to Jetson via SSH or API
        # This depends on your Jetson setup
        
        jetson_api_url = "http://jetson-ip:port/process"
        response = requests.post(jetson_api_url, json={
            "content": data.content,
            "task": "pdf_generation"
        })
        
        return response.json()
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

## Summary

1. **WeasyPrint** is recommended for high-quality PDFs with CSS support
2. **xhtml2pdf** is simpler but less feature-rich
3. Store HTML in PostgreSQL for easy editing and version control
4. Use the provided endpoints in your frontend by uncommenting the TODO sections
5. Make sure to configure CORS properly
6. Test locally before deploying to production

## Cornell Notes Format Structure

When generating DOCX files with Cornell note format, structure them as HTML tables:

```python
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

def create_cornell_notes_docx(content_dict):
    """
    Generate Cornell format DOCX from analyzed content
    
    Args:
        content_dict: {
            'topic': str,
            'date': str,
            'cue_column': list of strings,
            'notes_column': list of strings,
            'summary': str
        }
    """
    doc = Document()
    
    # Title
    title = doc.add_heading('Cornell note-taking method', 0)
    title.alignment = WD_ALIGN_PARAGRAPH.LEFT
    
    # Create table: 3 rows
    # Row 1: Date | Title
    # Row 2: Cue column | Notes column (main content)
    # Row 3: Summary (spans full width)
    table = doc.add_table(rows=3, cols=2)
    table.style = 'Table Grid'
    
    # Header row (Date and Title)
    header_row = table.rows[0]
    header_row.cells[0].text = f"Date: {content_dict['date']}"
    header_row.cells[1].text = f"Title: {content_dict['topic']}"
    
    # Style header cells
    for cell in header_row.cells:
        cell_paragraph = cell.paragraphs[0]
        cell_paragraph.runs[0].font.bold = True
        cell_paragraph.runs[0].font.color.rgb = RGBColor(255, 255, 255)
        shading = cell._element.get_or_add_tcPr()
        shading.append(parse_xml(r'<w:shd {} w:fill="7c3aed"/>'.format(nsdecls('w'))))
    
    # Content row
    content_row = table.rows[1]
    
    # Cue column (30% width)
    cue_cell = content_row.cells[0]
    cue_cell.text = "Cue column\n"
    for cue in content_dict['cue_column']:
        p = cue_cell.add_paragraph(cue, style='List Bullet')
        p.paragraph_format.left_indent = Inches(0.25)
    
    # Notes column (70% width)
    notes_cell = content_row.cells[1]
    notes_cell.text = "Notes column\n"
    for i, note in enumerate(content_dict['notes_column'], 1):
        p = notes_cell.add_paragraph(f"{i}. {note}")
        p.paragraph_format.left_indent = Inches(0.25)
    
    # Set column widths
    table.columns[0].width = Inches(2.5)  # 30%
    table.columns[1].width = Inches(5.5)  # 70%
    
    # Summary row (merge cells for full width)
    summary_row = table.rows[2]
    summary_cell = summary_row.cells[0].merge(summary_row.cells[1])
    summary_cell.text = f"Summary\n{content_dict['summary']}"
    
    # Add light yellow background to summary
    shading = summary_cell._element.get_or_add_tcPr()
    shading.append(parse_xml(r'<w:shd {} w:fill="fefce8"/>'.format(nsdecls('w'))))
    
    return doc

# Example usage in your endpoint
from docx.oxml.ns import nsdecls
from docx.oxml import parse_xml

@app.post("/api/reviewers/generate-cornell")
async def generate_cornell_notes(transcript_data: dict):
    """Generate Cornell format reviewer from transcript"""
    try:
        # 1. Process transcript and generate content
        # (Your existing transcript processing logic here)
        
        # 2. Analyze and format into Cornell structure
        analyzed_content = {
            'topic': transcript_data.get('topic', 'Lecture Notes'),
            'date': datetime.now().strftime('%Y-%m-%d'),
            'cue_column': [
                'Most important information',
                'Key terms',
                'Headings',
                'Topics'
            ],
            'notes_column': [
                'Record: During the lecture, use the notetaking column...',
                'Questions: After class, formulate questions...',
                'Recite: Cover the note-taking column...',
                'Reflect: Reflect on the material...',
                'Review: Spend at least ten minutes every week...'
            ],
            'summary': 'Use this space at the bottom of each page to summarise the notes on that page.'
        }
        
        # 3. Generate DOCX with Cornell format
        doc = create_cornell_notes_docx(analyzed_content)
        
        # 4. Save to bytes
        docx_buffer = BytesIO()
        doc.save(docx_buffer)
        docx_buffer.seek(0)
        
        return Response(
            content=docx_buffer.getvalue(),
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            headers={
                "Content-Disposition": f"attachment; filename=cornell_notes_{analyzed_content['topic']}.docx"
            }
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### Cornell Format HTML Structure (after conversion)

When the DOCX is converted by mammoth.js, it becomes:

```html
<h1>Cornell note-taking method</h1>
<table>
  <tr>
    <td>Date: 2026-01-08</td>
    <td>Title: Topic Name</td>
  </tr>
  <tr>
    <td>
      <strong>Cue column</strong>
      <ul>
        <li>Most important information</li>
        <li>Key terms</li>
        <li>Headings</li>
        <li>Topics</li>
      </ul>
    </td>
    <td>
      <strong>Notes column</strong>
      <ol>
        <li>Record: During the lecture...</li>
        <li>Questions: After class...</li>
        <li>Recite: Cover the note-taking...</li>
        <li>Reflect: Reflect on the material...</li>
        <li>Review: Spend at least ten minutes...</li>
      </ol>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <strong>Summary</strong><br/>
      Use this space at the bottom of each page to summarise the notes on that page.
    </td>
  </tr>
</table>
```

The CSS in the frontend automatically styles this table to match the Cornell format appearance.

## Notes

- WeasyPrint requires system dependencies (install with `apt-get install libpango-1.0-0 libpangoft2-1.0-0` on Linux)
- For production, add authentication middleware
- Consider adding rate limiting for PDF conversion
- Store large files (DOCX/PDF) in object storage (S3, Azure Blob) instead of database for better performance
