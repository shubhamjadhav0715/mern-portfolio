@echo off
REM MERN Portfolio - Automated Installation Script for Windows
REM Author: Shubham Jadhav

echo ========================================
echo MERN Portfolio - Automated Setup
echo ========================================
echo.

REM Check if Node.js is installed
echo Checking prerequisites...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

node -v
npm -v
echo [OK] Node.js and npm found
echo.

REM Install Backend Dependencies
echo Installing backend dependencies...
cd backend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install backend dependencies
    pause
    exit /b 1
)
echo [OK] Backend dependencies installed
echo.

REM Setup Backend Environment
if not exist .env (
    echo Setting up backend environment...
    copy .env.example .env
    echo [OK] Created backend\.env
    echo [WARNING] Please edit backend\.env and add your credentials:
    echo    - MONGODB_URI (MongoDB connection string^)
    echo    - EMAIL_USER (your Gmail address^)
    echo    - EMAIL_PASS (Gmail app password^)
) else (
    echo [OK] backend\.env already exists
)
echo.

REM Install Frontend Dependencies
echo Installing frontend dependencies...
cd ..\frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install frontend dependencies
    pause
    exit /b 1
)
echo [OK] Frontend dependencies installed
echo.

REM Setup Frontend Environment
if not exist .env (
    echo Setting up frontend environment...
    copy .env.example .env
    echo [OK] Created frontend\.env
) else (
    echo [OK] frontend\.env already exists
)
echo.

REM Check for assets
echo Checking for required assets...
cd public\assets

if not exist profile.png (
    echo [WARNING] Missing: profile.png
) else (
    echo [OK] Found: profile.png
)

if not exist resume.pdf (
    echo [WARNING] Missing: resume.pdf
) else (
    echo [OK] Found: resume.pdf
)

cd ..\..\..
echo.

REM Final Instructions
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next Steps:
echo.
echo 1. Configure Backend (.env^):
echo    cd backend
echo    notepad .env
echo    # Add your MongoDB URI and Gmail credentials
echo.
echo 2. Add Your Assets:
echo    cd frontend\public\assets
echo    # Add profile.png and resume.pdf
echo.
echo 3. Start the Application:
echo.
echo    Terminal 1 (Backend^):
echo    cd backend
echo    npm start
echo.
echo    Terminal 2 (Frontend^):
echo    cd frontend
echo    npm start
echo.
echo Your portfolio will open at http://localhost:3000
echo.
echo For detailed instructions, see:
echo   - QUICK_START.md (5-minute setup^)
echo   - DEPLOYMENT_GUIDE.md (production deployment^)
echo.
pause
