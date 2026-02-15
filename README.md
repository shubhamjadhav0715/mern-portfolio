# 🚀 MERN Stack Portfolio - Shubham Jadhav

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a minimalist dark theme with subtle animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🌐 Quick Deploy

Deploy your portfolio in one click!

### Frontend Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shubhamjadhav0715/mern-portfolio&root-directory=frontend&env=REACT_APP_API_URL&envDescription=Backend%20API%20URL&envLink=https://github.com/shubhamjadhav0715/mern-portfolio/blob/main/DEPLOY_NOW.md&project-name=mern-portfolio&repository-name=mern-portfolio)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shubhamjadhav0715/mern-portfolio)

### Backend Deployment

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/mern-portfolio?referralCode=shubham)

**📖 Detailed Deployment Guide:** [DEPLOY_NOW.md](DEPLOY_NOW.md)

---

## ✨ Features

- 🎨 **Minimalist Dark Theme** with light mode toggle
- ✨ **Particle Background** animations for visual appeal
- ⌨️ **Typing Animation** in hero section
- 📱 **Fully Responsive** design (mobile-first approach)
- 📧 **Working Contact Form** with email integration
- 💼 **Two Project Sections**: Personal Projects & Campus Project Hub
- 🎓 **Testimonials Section** with dynamic loading
- 📄 **Resume Download** functionality
- 🔗 **Social Media Integration** (GitHub, LinkedIn, Telegram, WhatsApp)
- 🌐 **SEO Optimized** with meta tags
- ⚡ **Fast Performance** with optimized assets

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **CSS3** - Custom styling with CSS variables
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Particles.js** - Background animations
- **React Typed** - Typing animation
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Quick Installation

### Automated Installation (Recommended)

**For Linux/Mac:**
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
chmod +x install.sh start-dev.sh
./install.sh
./start-dev.sh
```

**For Windows:**
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
install.bat
start-dev.bat
```

### Manual Installation

**Prerequisites:**
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

**Step 1: Clone Repository**
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
```

**Step 2: Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm start
```

**Step 3: Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with backend URL
npm start
```

**Step 4: Add Assets**
Place these files in `frontend/public/assets/`:
- `profile.png` - Your profile photo
- `resume.pdf` - Your resume
- `projects/` - Project screenshots

## ⚙️ Configuration

### Backend Environment Variables (`backend/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### Frontend Environment Variables (`frontend/.env`)
```env
REACT_APP_API_URL=http://localhost:5000
```

### Gmail App Password Setup
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate password for "Mail"
5. Copy and paste in `backend/.env`

## 🎨 Customization

All personal data is centralized in one file:
**`frontend/src/data/portfolioData.js`**

Update this file to customize:
- Personal information (name, title, bio)
- Skills and tools
- Projects and descriptions
- Social media links
- Contact information
- Experience details

### Theme Customization
Edit CSS variables in `frontend/src/App.css`:
```css
:root[data-theme='dark'] {
  --bg-primary: #0a0a0a;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

## 📁 Project Structure

```
mern-portfolio/
├── backend/                 # Node.js/Express backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Request handlers
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   └── server.js           # Entry point
├── frontend/               # React frontend
│   ├── public/             # Static files
│   │   └── assets/         # Images, resume, etc.
│   └── src/
│       ├── components/     # React components
│       ├── data/           # Portfolio data
│       └── App.js          # Main component
├── .github/workflows/      # CI/CD
├── DEPLOY_NOW.md          # Deployment guide
├── GETTING_STARTED.md     # Setup guide
├── install.sh             # Installation script
└── start-dev.sh           # Development script
```

## 🚀 Deployment

### Quick Deploy (15 minutes)

**Follow the step-by-step guide:** [DEPLOY_NOW.md](DEPLOY_NOW.md)

**Deployment Stack:**
- **Frontend**: Vercel or Netlify (FREE)
- **Backend**: Railway or Render (FREE)
- **Database**: MongoDB Atlas (FREE)

**Total Cost:** $0

### Deployment Configurations Included

- ✅ `vercel.json` - Vercel configuration
- ✅ `netlify.toml` - Netlify configuration
- ✅ `railway.json` - Railway configuration
- ✅ `render.yaml` - Render configuration

## 📚 Documentation

- **[DEPLOY_NOW.md](DEPLOY_NOW.md)** - Deploy in 15 minutes
- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Complete setup guide
- **[QUICK_START.md](QUICK_START.md)** - Get running in 5 minutes
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Detailed deployment
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Project overview
- **[CHECKLIST.md](CHECKLIST.md)** - Setup checklist

## 🎯 Features Breakdown

### Hero Section
- Animated particle background
- Typing animation with multiple titles
- Profile image with glow effect
- Social media links
- Resume download button

### About Section
- Personal introduction
- Contact information cards
- Professional summary

### Skills Section
- Technical skills with progress bars
- Tools and technologies grid
- Interactive hover effects

### Experience Section
- Timeline layout
- Job descriptions
- Company details

### Projects Section
- Personal projects showcase
- Campus Project Hub (featured)
- Live demo and GitHub links
- Technology tags

### Testimonials Section
- Dynamic testimonial cards
- Star ratings
- Client information

### Contact Section
- Working contact form
- Email integration
- Contact information display
- Form validation

## 🔧 Development

### Run in Development Mode

**Using Scripts (Recommended):**
```bash
./start-dev.sh  # Linux/Mac
start-dev.bat   # Windows
```

**Manual:**
```bash
# Terminal 1 - Backend
cd backend && npm start

# Terminal 2 - Frontend
cd frontend && npm start
```

### Build for Production

```bash
cd frontend
npm run build
```

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Check MONGODB_URI in .env
- Ensure MongoDB is running
- Verify network access in MongoDB Atlas

**Email Not Sending:**
- Verify EMAIL_USER and EMAIL_PASS
- Use Gmail App Password
- Check Gmail security settings

**Port Already in Use:**
- Change PORT in backend/.env
- Update REACT_APP_API_URL in frontend/.env

**Images Not Loading:**
- Check file paths in portfolioData.js
- Ensure files are in frontend/public/assets/
- Verify file names match exactly

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shubham Baban Jadhav**
- Email: shubhamjadhav0715@gmail.com
- LinkedIn: [Shubham Jadhav](https://www.linkedin.com/in/shubhamjadhav7066149532/)
- GitHub: [@shubhamjadhav0715](https://github.com/shubhamjadhav0715)
- Telegram: [@shubham_jadhav0715](https://t.me/shubham_jadhav0715)
- WhatsApp: [+91 70661 49532](https://wa.me/917066149532)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Particles.js](https://particles.js.org/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📊 Project Stats

- **Total Components**: 11
- **Lines of Code**: 5000+
- **Build Time**: ~30 seconds
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

---

## 🎯 Quick Links

- 📖 [Getting Started](GETTING_STARTED.md) - Complete setup guide
- 🚀 [Deploy Now](DEPLOY_NOW.md) - Deploy in 15 minutes
- ⚡ [Quick Start](QUICK_START.md) - Run in 5 minutes
- ✅ [Checklist](CHECKLIST.md) - Track your progress
- 📊 [Project Summary](PROJECT_SUMMARY.md) - Overview

---

**Made with ❤️ using MERN Stack**

⭐ **Star this repository if you found it helpful!**

🐛 **Found a bug?** [Open an issue](https://github.com/shubhamjadhav0715/mern-portfolio/issues)

💡 **Have a suggestion?** [Start a discussion](https://github.com/shubhamjadhav0715/mern-portfolio/discussions)

🚀 **Ready to deploy?** Follow [DEPLOY_NOW.md](DEPLOY_NOW.md)
