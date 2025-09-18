#!/bin/bash

echo "Starting Alchemi React + Express Development Environment..."
echo

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing root dependencies..."
    npm install
fi

# Check if web node_modules exists
if [ ! -d "web/node_modules" ]; then
    echo "Installing web dependencies..."
    cd web
    npm install
    cd ..
fi

# Check if api node_modules exists
if [ ! -d "api/node_modules" ]; then
    echo "Installing API dependencies..."
    cd api
    npm install
    cd ..
fi

echo
echo "Starting development servers..."
echo "Web (React): http://localhost:3000"
echo "API (Express): http://localhost:5000"
echo
echo "Available endpoints:"
echo "- Health Check: http://localhost:5000/health"
echo "- Hello: http://localhost:5000/hello"
echo "- Users: http://localhost:5000/users"
echo

# Start both servers concurrently
npm run dev