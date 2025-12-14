@echo off
TITLE SportsTradeX Vercel Deployment

echo ========================================
echo   SportsTradeX - Vercel CLI Deployment  
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

echo ✅ Node.js is installed
echo.

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚙️ Installing Vercel CLI...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo ❌ Failed to install Vercel CLI
        pause
        exit /b 1
    )
    echo ✅ Vercel CLI installed successfully
    echo.
)

echo ✅ Vercel CLI is available
echo.

echo 🚀 Starting deployment process...
echo.
echo You will be prompted to:
echo 1. Log in to your Vercel account
echo 2. Configure your project settings
echo 3. Deploy your application
echo.
echo After deployment, remember to:
echo 1. Add environment variables in the Vercel dashboard
echo 2. Redeploy your application
echo.

pause

echo 📦 Deploying SportsTradeX to Vercel...
echo.
vercel

echo.
echo 🎉 Deployment process initiated!
echo.
echo Next steps:
echo 1. Add environment variables in the Vercel dashboard:
echo    - NEXT_PUBLIC_SUPABASE_URL = https://lztknyehgjbnlexqicxc.supabase.co
echo    - NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dGtueWVoZ2pibmxleHFpY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjE0MzgsImV4cCI6MjA4MTI5NzQzOH0.yAI-8Fx3hqtmRxHGSqGU53YZxXa0vQwdXbpo4agg2-s
echo.
echo 2. Redeploy your application after adding environment variables
echo.
echo Check your browser for the deployment URL!
echo.
pause