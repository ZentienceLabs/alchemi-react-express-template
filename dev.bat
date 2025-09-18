@echo off
echo Starting Alchemi React + Express Development Environment...
echo.

REM Check if node_modules exists
if not exist node_modules (
    echo Installing root dependencies...
    npm install
)

REM Check if web node_modules exists
if not exist web\node_modules (
    echo Installing web dependencies...
    cd web
    npm install
    cd ..
)

REM Check if api node_modules exists
if not exist api\node_modules (
    echo Installing API dependencies...
    cd api
    npm install
    cd ..
)

echo.
echo Starting development servers...
echo Web (React): http://localhost:3000
echo API (Express): http://localhost:5000
echo.
echo Available endpoints:
echo - Health Check: http://localhost:5000/health
echo - Hello: http://localhost:5000/hello
echo - Users: http://localhost:5000/users
echo.

REM Start both servers concurrently
npm run dev