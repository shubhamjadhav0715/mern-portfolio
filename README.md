# MERN Stack Portfolio - Shubham Jadhav

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a minimalist dark theme with subtle animations.

## 🚀 Features

- ✨ Minimalist dark theme with light mode toggle
- 🎨 Particle background animations
- ⌨️ Typing animation in hero section
- 📱 Fully responsive design (mobile-first)
- 📧 Working contact form with email integration
- 💼 Two project sections: Personal Projects & Campus Project Hub
- 🎓 Testimonials section
- 📄 Resume download functionality
- 🔗 Social media integration

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS3 (Custom styling)
- React Router
- Axios
- React Icons
- Particles.js / Tsparticles
- React Typed

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer (for contact form)
- CORS
- dotenv

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/shubhamjadhav0715/mern-portfolio.git
cd mern-portfolio
```

### Backend Setup
```bash
cd backend
npm install

# Create .env file with the following variables:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_app_password
# FRONTEND_URL=http://localhost:3000

npm start
```

### Frontend Setup
```bash
cd frontend
npm install

# Create .env file with:
# REACT_APP_API_URL=http://localhost:5000

npm start
```

The application will run on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📁 Project Structure

```
mern-portfolio/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── profile.png
│   │       └── resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── PersonalProjects.jsx
│   │   │   ├── CampusProjectHub.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ParticlesBackground.jsx
│   │   ├── styles/
│   │   │   └── [component styles]
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── models/
│   │   ├── Contact.js
│   │   └── Testimonial.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── testimonials.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── testimonialController.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information
Edit `frontend/src/data/portfolioData.js` to update:
- Personal details
- Skills
- Projects
- Social links

### Change Theme Colors
Modify CSS variables in `frontend/src/App.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... */
}
```

## 📧 Contact Form Setup

To enable the contact form:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Add credentials to backend `.env` file

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend (Railway/Render/Heroku)
- Set environment variables
- Deploy from GitHub repository

## 📱 Contact

- **Email:** shubhamjadhav0715@gmail.com
- **LinkedIn:** [Shubham Jadhav](https://www.linkedin.com/in/shubhamjadhav7066149532/)
- **GitHub:** [shubhamjadhav0715](https://github.com/shubhamjadhav0715)
- **Telegram:** @shubham_jadhav0715
- **WhatsApp:** +91 70661 49532

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons
- Animations powered by Particles.js

---

**Made with ❤️ by Shubham Jadhav**
