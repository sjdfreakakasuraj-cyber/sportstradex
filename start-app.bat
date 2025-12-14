@echo off
TITLE SportsTradeX Application Launcher

echo ========================================
echo   SportsTradeX - Application Launcher   
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed or not in PATH
    echo Please install Node.js which includes npm from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed
echo.

REM Check if node_modules exists
if exist "node_modules" (
    echo ✅ Dependencies already installed
) else (
    echo ⚙️ Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully
)

echo.
echo ⚙️ Building the application...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Failed to build the application
    pause
    exit /b 1
)

echo ✅ Application built successfully
echo.
echo 🚀 Starting the application...
echo.
echo Application will be available at http://localhost:3000
echo Press Ctrl+C to stop the application
echo.

npm run launch