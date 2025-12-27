# DOCX Transcript Viewer Setup

## Overview
The DOCX Transcript Viewer allows students to view raw transcripts in .docx format with annotation capabilities, zoom controls, and download options.

## Features
- **Document Rendering**: Converts DOCX files to HTML for seamless viewing
- **Zoom Controls**: Scale from 50% to 200% (10% increments)
- **Download**: Download the original DOCX file
- **Fullscreen Mode**: Immersive reading experience
- **Annotations**: Add notes, highlights, and text annotations
- **Dark Mode**: Comfortable viewing in any lighting
- **Responsive Design**: Works on desktop, tablet, and mobile

## Setup Instructions

### 1. Dependencies
The viewer uses `mammoth.js` for DOCX to HTML conversion:
```bash
npm install mammoth
```

### 2. Sample Document
For testing, add a sample DOCX file to the `public` folder:
```
client/public/sample.docx
```

You can create a simple DOCX with any content for demo purposes.

### 3. Navigation Flow
1. Student Dashboard → Reviewers
2. Click "Raw Transcripts" folder card
3. Select a class (e.g., CPP117)
4. Click "View" button on any transcript
5. DOCX viewer opens with full functionality

## Annotations System

### How It Works
- Annotations are stored in localStorage per transcript
- Key format: `transcript-annotations-{classCode}-{transcriptId}`
- Annotations persist across sessions
- Each annotation has:
  - `id`: Unique timestamp
  - `type`: note, highlight, or text
  - `text`: Annotation content
  - `timestamp`: When created

### Adding Annotations
1. **Notes**: Click "Note" button, enter text in prompt
2. **Highlights**: Click "Highlight" button, then select text (to be enhanced)
3. **Text**: Click "Text" button to add floating text boxes (to be enhanced)

## Technical Details

### Component Structure
```
client/app/student/reviewers/transcripts/
├── [classCode]/
│   ├── page.jsx              # Transcripts list
│   ├── styles.css
│   └── [transcriptId]/
│       ├── page.jsx          # DOCX viewer
│       └── styles.css
```

### Key Libraries
- `mammoth`: DOCX to HTML conversion
- `react-icons`: UI icons
- `next/navigation`: Routing

### State Management
- `htmlContent`: Converted HTML from DOCX
- `scale`: Current zoom level (0.5-2.0)
- `annotations`: Array of user annotations
- `loading`: Document loading state
- `error`: Error handling state
- `isFullscreen`: Fullscreen mode state
- `annotationMode`: Current annotation tool

## Mock Data Integration

Transcripts are defined in `mockData.js`:
```javascript
export const mockTranscriptsByClass = {
  "CPP117": [
    {
      id: 1,
      title: "Lecture 1: Introduction",
      duration: "45 min",
      date: "2024-01-15",
      fileType: "DOCX",
      fileSize: "125 KB",
      status: "Completed"
    },
    // ... more transcripts
  ]
};
```

## Production Considerations

### File Storage
In production, replace the hardcoded URL:
```javascript
// Current (demo)
const docxUrl = "/sample.docx";

// Production
const docxUrl = transcript.fileUrl; // from database/API
```

### Backend Integration
1. Store DOCX files in cloud storage (Azure Blob, AWS S3)
2. Generate signed URLs for secure access
3. Track download/view metrics
4. Implement permission checks

### Annotation Storage
Move from localStorage to database:
1. Create `transcript_annotations` table
2. Link to user_id and transcript_id
3. Sync annotations across devices
4. Enable sharing/collaboration features

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Future Enhancements
1. **Text Selection Highlighting**: Actual highlight of selected text
2. **Collaborative Annotations**: Share notes with classmates
3. **Search in Document**: Find text within transcript
4. **Export Annotations**: Download notes as PDF/DOCX
5. **Voice Notes**: Audio annotations
6. **OCR Support**: For scanned documents
7. **Version History**: Track document updates
8. **Comments**: Thread discussions on specific sections

## Troubleshooting

### Document Not Loading
- Verify `sample.docx` exists in `public` folder
- Check browser console for errors
- Ensure mammoth is installed: `npm list mammoth`

### Styling Issues
- Check dark mode toggle in top bar
- Clear browser cache
- Verify CSS imports in page.jsx

### Annotations Not Saving
- Check browser localStorage is enabled
- Open DevTools → Application → Local Storage
- Look for key: `transcript-annotations-{classCode}-{transcriptId}`

## Performance Tips
1. Large DOCX files may take longer to convert
2. Consider implementing lazy loading for images
3. Cache converted HTML for faster subsequent loads
4. Compress DOCX files before upload

## Related Components
- [PDF Reviewer Viewer](../[classCode]/[reviewerId]/page.jsx)
- [Transcripts List](../transcripts/[classCode]/page.jsx)
- [Reviewers Dashboard](../page.jsx)
