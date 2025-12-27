# PDF Viewer Setup Instructions

## Adding a Sample PDF for Testing

To test the PDF viewer functionality, you need to add a sample PDF file:

1. Place any PDF file in the `client/public/` folder
2. Rename it to `sample.pdf` or update the `pdfUrl` variable in the PDF viewer component

### Example:
```
client/
  public/
    sample.pdf  <-- Add your PDF here
    img/
    icons/
```

## Installing Dependencies

Before running the application, install the new PDF viewer dependencies:

```bash
cd client
npm install
```

This will install:
- `react-pdf` - React PDF viewer component
- `pdfjs-dist` - PDF.js library for rendering PDFs

## Features Implemented

### 1. PDF Viewing
- Full PDF document rendering
- Page-by-page navigation
- Responsive design

### 2. Zoom Controls
- Zoom in (+20% per click, max 300%)
- Zoom out (-20% per click, min 50%)
- Current zoom level display
- Fixed position zoom controls on the right side

### 3. Download Functionality
- Download button in the toolbar
- Downloads PDF with original filename

### 4. Edit Features
- **Highlight Tool**: Select text to highlight (click to activate)
- **Add Notes**: Add sticky notes to specific pages
- **Add Text**: Add custom text annotations
- **Clear All**: Remove all annotations
- **Save**: Save annotations to browser localStorage

### 5. Page Navigation
- Previous/Next buttons
- Page number input (jump to specific page)
- Current page / total pages display
- Keyboard navigation support

### 6. Fullscreen Mode
- Toggle fullscreen viewing
- Fullscreen button in toolbar

### 7. Annotations Sidebar
- View all annotations
- Click annotation to jump to that page
- Delete individual annotations
- Shows annotation type and page number

## Usage

1. Navigate to Reviewers page
2. Click on an enrolled class (e.g., CPP117)
3. Click "View" button on any reviewer card
4. PDF viewer will open with all controls

## Keyboard Shortcuts (Future Enhancement)
- Arrow keys: Navigate pages
- + / -: Zoom in/out
- F: Toggle fullscreen
- Esc: Exit fullscreen

## Notes
- Annotations are saved per document in localStorage
- Each document's annotations are stored separately using classCode-reviewerId key
- Annotations persist across sessions until cleared
