# 🚀 Deployment Guide

## Quick Start (Local Development)

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
```

### 2. Setup Backend

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
```

Edit `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/portfolio

EMAIL_USER=shubhamjadhav0715@gmail.com
EMAIL_PASS=your_gmail_app_password

FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**Get Gmail App Password:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"
5. Copy and paste in .env

Start backend:
```bash
npm start
# Server runs on http://localhost:5000
```

### 3. Setup Frontend

```bash
cd frontend
npm install

# Create .env file
cp .env.example .env
```

Edit `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000
```

**Add Your Assets:**
Place these files in `frontend/public/assets/`:
- `profile.png` - Your profile photo (circular, 400x400px recommended)
- `resume.pdf` - Your resume PDF
- `projects/ticket-booking.png` - Ticket booking project screenshot
- `projects/portfolio.png` - Portfolio project screenshot
- `projects/campus-hub.png` - Campus hub project screenshot

Start frontend:
```bash
npm start
# App runs on http://localhost:3000
```

---

## 🌐 Production Deployment

### Option 1: Deploy to Vercel (Frontend) + Railway (Backend)

#### Deploy Backend to Railway

1. **Create Railway Account**: https://railway.app
2. **Create New Project** → Deploy from GitHub
3. **Select Repository**: shubhamjadhav0715/mern-portfolio
4. **Set Root Directory**: `/backend`
5. **Add Environment Variables**:
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   EMAIL_USER=shubhamjadhav0715@gmail.com
   EMAIL_PASS=your_app_password
   FRONTEND_URL=https://your-frontend-url.vercel.app
   NODE_ENV=production
   PORT=5000
   ```
6. **Deploy** - Railway will give you a URL like: `https://your-app.railway.app`

#### Deploy Frontend to Vercel

1. **Create Vercel Account**: https://vercel.com
2. **Import Git Repository**: shubhamjadhav0715/mern-portfolio
3. **Configure Project**:
   - Framework Preset: Create React App
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. **Add Environment Variable**:
   ```
   REACT_APP_API_URL=https://your-backend.railway.app
   ```
5. **Deploy** - Vercel will give you a URL like: `https://your-portfolio.vercel.app`

### Option 2: Deploy to Netlify (Frontend) + Render (Backend)

#### Deploy Backend to Render

1. **Create Render Account**: https://render.com
2. **New Web Service** → Connect GitHub
3. **Select Repository**: shubhamjadhav0715/mern-portfolio
4. **Configure**:
   - Name: portfolio-backend
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Add Environment Variables** (same as Railway)
6. **Create Web Service** - Get URL like: `https://portfolio-backend.onrender.com`

#### Deploy Frontend to Netlify

1. **Create Netlify Account**: https://netlify.com
2. **New Site from Git** → GitHub
3. **Select Repository**: shubhamjadhav0715/mern-portfolio
4. **Build Settings**:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
5. **Environment Variables**:
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com
   ```
6. **Deploy** - Get URL like: `https://your-portfolio.netlify.app`

### MongoDB Atlas Setup (Required for Production)

1. **Create Account**: https://www.mongodb.com/cloud/atlas
2. **Create Free Cluster** (M0 Sandbox)
3. **Database Access**: Create user with password
4. **Network Access**: Add IP `0.0.0.0/0` (allow from anywhere)
5. **Connect**: Get connection string
   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
6. **Use in Backend .env**: `MONGODB_URI=your_connection_string`

---

## 📱 Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your domain (e.g., shubhamjadhav.com)
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

---

## 🔧 Environment Variables Summary

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
EMAIL_USER=shubhamjadhav0715@gmail.com
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=https://your-frontend-url.com
NODE_ENV=production
```

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

---

## ✅ Post-Deployment Checklist

- [ ] Backend is running and accessible
- [ ] Frontend is deployed and loads
- [ ] Contact form sends emails successfully
- [ ] All images load correctly
- [ ] Resume download works
- [ ] All links work (GitHub, LinkedIn, etc.)
- [ ] Mobile responsive design works
- [ ] Dark/Light mode toggle works
- [ ] Particle animations work
- [ ] Typing animation works

---

## 🐛 Troubleshooting

### Contact Form Not Working
- Check EMAIL_USER and EMAIL_PASS in backend .env
- Verify Gmail App Password is correct
- Check CORS settings (FRONTEND_URL matches your frontend URL)

### MongoDB Connection Error
- Verify MONGODB_URI is correct
- Check MongoDB Atlas IP whitelist (0.0.0.0/0)
- Ensure database user has correct permissions

### Images Not Loading
- Check file paths in portfolioData.js
- Ensure images are in `frontend/public/assets/`
- Verify image names match exactly (case-sensitive)

### API Calls Failing
- Check REACT_APP_API_URL in frontend .env
- Verify backend is running and accessible
- Check browser console for CORS errors

---

## 📊 Performance Optimization

### Frontend
- Images should be optimized (use tools like TinyPNG)
- Profile image: 400x400px, < 100KB
- Project screenshots: 800x600px, < 200KB each

### Backend
- Enable compression middleware
- Add rate limiting for API endpoints
- Use MongoDB indexes for faster queries

---

## 🔐 Security Best Practices

1. **Never commit .env files** (already in .gitignore)
2. **Use strong MongoDB passwords**
3. **Keep dependencies updated**: `npm audit fix`
4. **Enable HTTPS** (automatic on Vercel/Netlify/Railway)
5. **Add rate limiting** to contact form endpoint

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review deployment platform logs
3. Check browser console for errors
4. Verify all environment variables are set correctly

---

**Your portfolio is now ready to deploy! 🎉**

Choose your preferred deployment platform and follow the steps above.
