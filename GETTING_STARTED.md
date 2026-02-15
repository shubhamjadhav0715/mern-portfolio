# 🎯 Getting Started - Complete Guide

Welcome! This guide will help you get your portfolio up and running in minutes.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation Methods](#installation-methods)
3. [Configuration](#configuration)
4. [Adding Your Content](#adding-your-content)
5. [Running the Application](#running-the-application)
6. [Customization](#customization)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- ✅ **Git** - [Download](https://git-scm.com/)
- ✅ **Code Editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)
- ✅ **Gmail Account** (for contact form)
- ⚠️ **MongoDB** (optional for local development) - [Download](https://www.mongodb.com/try/download/community)

**Check your installations:**
```bash
node -v    # Should show v14.0.0 or higher
npm -v     # Should show 6.0.0 or higher
git --version
```

---

## Installation Methods

### Method 1: Automated Installation (Easiest) ⭐

**For Linux/Mac:**
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
chmod +x install.sh
./install.sh
```

**For Windows:**
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
install.bat
```

The script will:
- ✅ Install all dependencies
- ✅ Create .env files
- ✅ Check for required assets
- ✅ Give you next steps

### Method 2: Manual Installation

**Step 1: Clone the repository**
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
```

**Step 2: Install backend dependencies**
```bash
cd backend
npm install
```

**Step 3: Install frontend dependencies**
```bash
cd ../frontend
npm install
```

---

## Configuration

### 1. Backend Configuration

**Create environment file:**
```bash
cd backend
cp .env.example .env
```

**Edit `backend/.env`:**
```env
# Server Port
PORT=5000

# MongoDB Connection (choose one)
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# Option 2: MongoDB Atlas (recommended for production)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Email Configuration (REQUIRED for contact form)
EMAIL_USER=shubhamjadhav0715@gmail.com
EMAIL_PASS=your_gmail_app_password_here

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

**Get Gmail App Password:**

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select **Mail** and **Other (Custom name)**
5. Enter "Portfolio" as the name
6. Click **Generate**
7. Copy the 16-character password (remove spaces)
8. Paste in `backend/.env` as `EMAIL_PASS`

### 2. Frontend Configuration

**Create environment file:**
```bash
cd frontend
cp .env.example .env
```

**Edit `frontend/.env`:**
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## Adding Your Content

### 1. Add Your Assets

**Required files in `frontend/public/assets/`:**

```
frontend/public/assets/
├── profile.png          # Your profile photo (400x400px recommended)
├── resume.pdf           # Your resume PDF
└── projects/            # Project screenshots (optional)
    ├── ticket-booking.png
    ├── portfolio.png
    └── campus-hub.png
```

**How to add:**

**Option A: Via File Explorer**
1. Navigate to `frontend/public/assets/`
2. Copy your files there
3. Ensure exact filenames match

**Option B: Via Command Line**
```bash
cd frontend/public/assets/

# Copy your profile photo
cp /path/to/your/photo.png profile.png

# Copy your resume
cp /path/to/your/resume.pdf resume.pdf

# Create projects folder and add screenshots
mkdir -p projects
cp /path/to/screenshots/* projects/
```

**Option C: Via GitHub Web Interface**
1. Go to your repository on GitHub
2. Navigate to `frontend/public/assets/`
3. Click "Add file" → "Upload files"
4. Drag and drop your files
5. Commit changes

### 2. Update Your Information

**Edit `frontend/src/data/portfolioData.js`:**

This single file contains ALL your personal data:

```javascript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Title | Your Role",
  email: "your.email@gmail.com",
  phone: "+91 XXXXXXXXXX",
  // ... update all fields
};

export const skills = {
  technical: [
    // Add/remove your skills
  ],
  tools: [
    // Add/remove your tools
  ]
};

export const personalProjects = [
  // Add/update your projects
];

// ... update other sections
```

**What to update:**
- ✏️ Personal information (name, email, phone, location)
- 🎯 Professional title and bio
- 🛠️ Skills and tools
- 💼 Projects (title, description, links, technologies)
- 🔗 Social media links
- 💼 Work experience

---

## Running the Application

### Method 1: Using Start Scripts (Easiest) ⭐

**For Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**For Windows:**
```bash
start-dev.bat
```

This will:
- ✅ Start backend on http://localhost:5000
- ✅ Start frontend on http://localhost:3000
- ✅ Open browser automatically
- ✅ Show both server logs

### Method 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected: localhost
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

Browser will automatically open at: **http://localhost:3000**

---

## Customization

### Change Theme Colors

Edit `frontend/src/App.css`:

```css
:root[data-theme='dark'] {
  --accent-color: #3b82f6;  /* Change to your preferred color */
  --bg-primary: #0a0a0a;    /* Background color */
  /* ... more variables */
}
```

### Add More Projects

Edit `frontend/src/data/portfolioData.js`:

```javascript
export const personalProjects = [
  {
    id: 1,
    title: "Your New Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    features: ["Feature 1", "Feature 2"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/you/project",
    image: "/assets/projects/your-project.png"
  },
  // ... add more projects
];
```

### Modify Sections

All components are in `frontend/src/components/`:
- `Hero.jsx` - Landing section
- `About.jsx` - About section
- `Skills.jsx` - Skills section
- `PersonalProjects.jsx` - Projects section
- `Contact.jsx` - Contact form
- etc.

Edit any component to customize its content or layout.

---

## Deployment

### Quick Deploy to Production

**1. Frontend (Vercel) - FREE**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
cd frontend
vercel

# Follow prompts:
# - Set root directory: frontend
# - Add environment variable: REACT_APP_API_URL=your_backend_url
```

**2. Backend (Railway) - FREE**

1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Set root directory: `backend`
6. Add environment variables (from backend/.env)
7. Deploy

**3. Database (MongoDB Atlas) - FREE**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster (M0 Sandbox)
3. Create database user
4. Whitelist IP: `0.0.0.0/0` (allow from anywhere)
5. Get connection string
6. Update `MONGODB_URI` in Railway

**Detailed deployment guide:** See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## Troubleshooting

### Common Issues & Solutions

#### 1. Backend won't start

**Error: "MongoDB connection failed"**
```bash
# Solution 1: Use MongoDB Atlas instead of local
# Update MONGODB_URI in backend/.env to Atlas connection string

# Solution 2: Install MongoDB locally
# Download from: https://www.mongodb.com/try/download/community
```

**Error: "Port 5000 already in use"**
```bash
# Change port in backend/.env
PORT=5001

# Update frontend/.env
REACT_APP_API_URL=http://localhost:5001
```

#### 2. Frontend won't start

**Error: "Port 3000 already in use"**
```bash
# Press 'Y' when asked to run on another port
# Or kill the process using port 3000
```

**Error: "Module not found"**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### 3. Contact form not working

**Email not sending:**
- ✅ Check `EMAIL_USER` and `EMAIL_PASS` in backend/.env
- ✅ Use Gmail App Password, NOT regular password
- ✅ Enable 2-Step Verification in Google Account
- ✅ Check backend terminal for error messages

#### 4. Images not showing

**Profile image not displaying:**
- ✅ Check file is named exactly `profile.png` (not .jpg or .jpeg)
- ✅ File is in `frontend/public/assets/`
- ✅ Clear browser cache (Ctrl+Shift+R)

**Project images not showing:**
- ✅ Check paths in `portfolioData.js` match actual filenames
- ✅ Images are in `frontend/public/assets/projects/`
- ✅ Filenames are case-sensitive

#### 5. API calls failing

**CORS errors in browser console:**
- ✅ Check `FRONTEND_URL` in backend/.env matches your frontend URL
- ✅ Restart backend server after changing .env

**404 errors:**
- ✅ Check `REACT_APP_API_URL` in frontend/.env
- ✅ Ensure backend is running
- ✅ Check backend terminal for errors

---

## Next Steps

1. ✅ **Test Everything**
   - Try the contact form
   - Download resume
   - Check all links
   - Test on mobile

2. ✅ **Customize**
   - Update all personal information
   - Add your projects
   - Customize colors/theme

3. ✅ **Optimize**
   - Compress images (use [TinyPNG](https://tinypng.com/))
   - Test performance (use Lighthouse in Chrome DevTools)
   - Check mobile responsiveness

4. ✅ **Deploy**
   - Deploy to production
   - Set up custom domain (optional)
   - Share with the world!

---

## 📚 Additional Resources

- **[QUICK_START.md](QUICK_START.md)** - 5-minute quick start
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Detailed deployment
- **[README.md](README.md)** - Project overview
- **GitHub Issues** - Report bugs or ask questions

---

## 🆘 Need Help?

1. Check this guide thoroughly
2. Review error messages carefully
3. Check browser console (F12) for frontend errors
4. Check terminal for backend errors
5. Search existing GitHub issues
6. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version)

---

## 🎉 Success!

If everything is working:
- ✅ Backend running on http://localhost:5000
- ✅ Frontend running on http://localhost:3000
- ✅ Contact form sends emails
- ✅ All images load
- ✅ Resume downloads
- ✅ All links work

**Congratulations! Your portfolio is ready! 🚀**

Now customize it, deploy it, and share it with the world!

---

**Made with ❤️ using MERN Stack**
