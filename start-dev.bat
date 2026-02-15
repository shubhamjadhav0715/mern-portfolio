@echo off
REM MERN Portfolio - Development Start Script for Windows
REM Starts both backend and frontend in separate windows

echo ========================================
echo Starting MERN Portfolio in Development Mode
echo ========================================
echo.

REM Check if dependencies are installed
if not exist "backend\node_modules" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

if not exist "frontend\node_modules" (
    echo Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
)

REM Check if .env files exist
if not exist "backend\.env" (
    echo Creating backend\.env from example...
    copy backend\.env.example backend\.env
    echo [WARNING] Please edit backend\.env with your credentials
)

if not exist "frontend\.env" (
    echo Creating frontend\.env from example...
    copy frontend\.env.example frontend\.env
)

echo.
echo Starting servers...
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
echo Close the terminal windows to stop the servers
echo.

REM Start backend in new window
start "Portfolio Backend" cmd /k "cd backend && npm start"

REM Wait a bit for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend in new window
start "Portfolio Frontend" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo Servers started successfully!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Close the terminal windows to stop the servers
echo.
pause
