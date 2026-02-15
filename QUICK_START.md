# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🎯 Step 1: Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## 🎯 Step 2: Add Your Assets (1 minute)

**Upload your files to `frontend/public/assets/`:**

You already have:
- ✅ Your profile photo
- ✅ Your resume PDF

Just add them to the assets folder:
```bash
cd frontend/public/assets/
# Add your files here:
# - profile.png (your circular profile photo)
# - resume.pdf (your resume)
```

**For project screenshots** (optional - can add later):
```bash
mkdir -p frontend/public/assets/projects/
# Add screenshots:
# - projects/ticket-booking.png
# - projects/portfolio.png
# - projects/campus-hub.png
```

## 🎯 Step 3: Configure Environment (1 minute)

### Backend Configuration

```bash
cd backend
cp .env.example .env
```

**Edit `backend/.env`** - Use these settings for quick start:

```env
PORT=5000

# For local testing, use local MongoDB (or skip - app will still work)
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email settings (REQUIRED for contact form)
EMAIL_USER=shubhamjadhav0715@gmail.com
EMAIL_PASS=your_gmail_app_password_here

FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**Get Gmail App Password (30 seconds):**
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Type "Portfolio" and click Generate
4. Copy the 16-character password
5. Paste in .env as EMAIL_PASS

### Frontend Configuration

```bash
cd frontend
cp .env.example .env
```

**Edit `frontend/.env`:**
```env
REACT_APP_API_URL=http://localhost:5000
```

## 🎯 Step 4: Run the Application (1 minute)

### Start Backend (Terminal 1)
```bash
cd backend
npm start
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected: localhost
```

### Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```

Browser will automatically open at: **http://localhost:3000**

## ✅ You're Done!

Your portfolio is now running! 🎉

### What You Should See:
- ✨ Animated particle background
- ⌨️ Typing animation with your titles
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 📧 Working contact form
- 💼 All your projects and skills

---

## 🚨 Quick Troubleshooting

### Backend won't start?
**MongoDB Error?** 
- Don't worry! The app will still work without MongoDB
- Contact form will show error but rest of portfolio works fine
- For production, use MongoDB Atlas (free): https://www.mongodb.com/cloud/atlas

**Port 5000 already in use?**
```bash
# Change PORT in backend/.env to 5001
PORT=5001

# Update frontend/.env
REACT_APP_API_URL=http://localhost:5001
```

### Frontend won't start?
**Port 3000 already in use?**
- Press `Y` when asked to run on another port

**Dependencies error?**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Images not showing?
Make sure your files are named exactly:
- `frontend/public/assets/profile.png` (not .jpg or .jpeg)
- `frontend/public/assets/resume.pdf`

Or update the paths in `frontend/src/data/portfolioData.js`

### Contact form not working?
- Check EMAIL_PASS in backend/.env
- Make sure you used Gmail App Password (not regular password)
- Check backend terminal for error messages

---

## 🎨 Customize Your Portfolio

All your personal data is in one file:
**`frontend/src/data/portfolioData.js`**

Edit this file to update:
- ✏️ Your name, title, bio
- 🛠️ Skills and tools
- 💼 Projects
- 🔗 Social media links
- 📧 Contact information

---

## 📱 Next Steps

1. **Test Everything**
   - Try the contact form
   - Download your resume
   - Check all links
   - Test on mobile (open http://localhost:3000 on your phone)

2. **Customize**
   - Update your information in `portfolioData.js`
   - Add more projects
   - Change colors in `App.css` if you want

3. **Deploy** (when ready)
   - See `DEPLOYMENT_GUIDE.md` for detailed instructions
   - Recommended: Vercel (frontend) + Railway (backend)
   - Takes about 10 minutes to deploy

---

## 💡 Pro Tips

- **Dark Mode**: Click the sun/moon icon in navbar
- **Smooth Scroll**: Click any nav link to smoothly scroll to section
- **Mobile Menu**: On mobile, click hamburger icon for menu
- **Particle Interaction**: Move your mouse over the background!

---

## 🆘 Need Help?

1. Check `DEPLOYMENT_GUIDE.md` for detailed setup
2. Check `README.md` for project overview
3. Review error messages in terminal
4. Check browser console (F12) for frontend errors

---

**Enjoy your new portfolio! 🚀**

Made with ❤️ using MERN Stack
