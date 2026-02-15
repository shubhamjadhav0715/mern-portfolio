#!/bin/bash

# MERN Portfolio - Development Start Script
# Starts both backend and frontend in parallel

echo "🚀 Starting MERN Portfolio in Development Mode..."
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Trap Ctrl+C
trap cleanup INT TERM

# Check if dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

# Check if .env files exist
if [ ! -f "backend/.env" ]; then
    echo "⚠️  backend/.env not found. Creating from example..."
    cp backend/.env.example backend/.env
    echo "⚠️  Please edit backend/.env with your credentials"
fi

if [ ! -f "frontend/.env" ]; then
    echo "⚠️  frontend/.env not found. Creating from example..."
    cp frontend/.env.example frontend/.env
fi

echo ""
echo "✅ Starting servers..."
echo ""
echo "📡 Backend will run on: http://localhost:5000"
echo "🌐 Frontend will run on: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start backend in background
cd backend
npm start &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Start frontend in background
cd ../frontend
npm start &
FRONTEND_PID=$!

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
