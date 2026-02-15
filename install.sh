#!/bin/bash

# MERN Portfolio - Automated Installation Script
# Author: Shubham Jadhav

echo "🚀 MERN Portfolio - Automated Setup"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
echo -e "${BLUE}Checking prerequisites...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed!${NC}"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) found${NC}"
echo -e "${GREEN}✅ npm $(npm -v) found${NC}"
echo ""

# Install Backend Dependencies
echo -e "${BLUE}📦 Installing backend dependencies...${NC}"
cd backend
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backend dependencies installed${NC}"
else
    echo -e "${RED}❌ Failed to install backend dependencies${NC}"
    exit 1
fi
echo ""

# Setup Backend Environment
if [ ! -f .env ]; then
    echo -e "${BLUE}⚙️  Setting up backend environment...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✅ Created backend/.env${NC}"
    echo -e "${YELLOW}⚠️  Please edit backend/.env and add your credentials:${NC}"
    echo "   - MONGODB_URI (MongoDB connection string)"
    echo "   - EMAIL_USER (your Gmail address)"
    echo "   - EMAIL_PASS (Gmail app password)"
else
    echo -e "${GREEN}✅ backend/.env already exists${NC}"
fi
echo ""

# Install Frontend Dependencies
echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
cd ../frontend
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
else
    echo -e "${RED}❌ Failed to install frontend dependencies${NC}"
    exit 1
fi
echo ""

# Setup Frontend Environment
if [ ! -f .env ]; then
    echo -e "${BLUE}⚙️  Setting up frontend environment...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✅ Created frontend/.env${NC}"
else
    echo -e "${GREEN}✅ frontend/.env already exists${NC}"
fi
echo ""

# Check for assets
echo -e "${BLUE}📁 Checking for required assets...${NC}"
cd public/assets

MISSING_ASSETS=0

if [ ! -f profile.png ]; then
    echo -e "${YELLOW}⚠️  Missing: profile.png${NC}"
    MISSING_ASSETS=1
else
    echo -e "${GREEN}✅ Found: profile.png${NC}"
fi

if [ ! -f resume.pdf ]; then
    echo -e "${YELLOW}⚠️  Missing: resume.pdf${NC}"
    MISSING_ASSETS=1
else
    echo -e "${GREEN}✅ Found: resume.pdf${NC}"
fi

if [ $MISSING_ASSETS -eq 1 ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Some assets are missing. Add them to frontend/public/assets/${NC}"
    echo "   The portfolio will still work, but images won't display."
fi

cd ../../..
echo ""

# Final Instructions
echo -e "${GREEN}✅ Installation Complete!${NC}"
echo ""
echo -e "${BLUE}📝 Next Steps:${NC}"
echo ""
echo "1. Configure Backend (.env):"
echo "   cd backend"
echo "   nano .env  # or use your preferred editor"
echo "   # Add your MongoDB URI and Gmail credentials"
echo ""
echo "2. Add Your Assets:"
echo "   cd frontend/public/assets"
echo "   # Add profile.png and resume.pdf"
echo ""
echo "3. Start the Application:"
echo ""
echo "   Terminal 1 (Backend):"
echo "   cd backend && npm start"
echo ""
echo "   Terminal 2 (Frontend):"
echo "   cd frontend && npm start"
echo ""
echo -e "${GREEN}🎉 Your portfolio will open at http://localhost:3000${NC}"
echo ""
echo "For detailed instructions, see:"
echo "  - QUICK_START.md (5-minute setup)"
echo "  - DEPLOYMENT_GUIDE.md (production deployment)"
echo ""
