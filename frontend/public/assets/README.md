# Assets Folder

## Required Files

Place your files here with these exact names:

### 1. Profile Image
- **Filename**: `profile.png`
- **Recommended size**: 400x400px (square)
- **Format**: PNG with transparent background (or circular crop)
- **Max size**: < 100KB (optimize with TinyPNG.com)

### 2. Resume
- **Filename**: `resume.pdf`
- **Format**: PDF
- **Max size**: < 5MB

### 3. Project Screenshots (Optional)

Create a `projects/` subfolder and add:
- `projects/ticket-booking.png` - Screenshot of your ticket booking project
- `projects/portfolio.png` - Screenshot of your portfolio website
- `projects/campus-hub.png` - Screenshot of Campus Project Hub

**Recommended screenshot size**: 800x600px, < 200KB each

---

## How to Add Your Files

### Option 1: Via GitHub Web Interface
1. Go to: https://github.com/shubhamjadhav0715/mern-portfolio/tree/main/frontend/public/assets
2. Click "Add file" → "Upload files"
3. Drag and drop your files
4. Commit changes

### Option 2: Via Git Command Line
```bash
cd frontend/public/assets/

# Add your profile image
cp /path/to/your/photo.png profile.png

# Add your resume
cp /path/to/your/resume.pdf resume.pdf

# Create projects folder and add screenshots
mkdir -p projects
cp /path/to/screenshots/* projects/
```

### Option 3: Manually
1. Clone the repository
2. Navigate to `frontend/public/assets/`
3. Copy your files here
4. Commit and push

---

## Current Files

- `.gitkeep` - Placeholder to keep folder in git
- `README.md` - This file

## Files You Need to Add

- [ ] `profile.png` - Your profile photo
- [ ] `resume.pdf` - Your resume
- [ ] `projects/ticket-booking.png` - Ticket booking screenshot
- [ ] `projects/portfolio.png` - Portfolio screenshot  
- [ ] `projects/campus-hub.png` - Campus hub screenshot

---

## Image Optimization Tips

Before uploading, optimize your images:

1. **Profile Photo**:
   - Use https://www.remove.bg/ to remove background
   - Resize to 400x400px
   - Compress with https://tinypng.com/

2. **Project Screenshots**:
   - Take full-page screenshots
   - Crop to show main content
   - Resize to 800x600px
   - Compress with TinyPNG

3. **Resume**:
   - Export as PDF from Word/Google Docs
   - Ensure it's readable and professional
   - Keep under 5MB

---

## Temporary Placeholders

If you don't have images ready, the portfolio will still work:
- Profile image will show a placeholder
- Project images will show a gray background
- Resume download will show an error

You can add them later without breaking anything!
