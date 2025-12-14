# Quick Start: Deploy SportsTradeX

This guide will help you deploy a standard version of SportsTradeX as quickly as possible.

## Immediate Deployment Steps

### Step 1: Install Dependencies

```bash
# Navigate to the project directory
cd k:\Stakes\sportstradex-master\sportstradex-master

# Install all required packages
npm install
```

This will install all dependencies including:
- Next.js 14.2.28
- React 18
- TailwindCSS
- Framer Motion for animations
- Radix UI components
- And many other libraries

### Step 2: Create Basic Environment File

Create a `.env.local` file in the root directory:

```bash
# On Windows
copy .env.example .env.local

# Or manually create with this content:
```

Content for `.env.local`:
```env
NEXT_PUBLIC_APP_NAME=SportsTradeX
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_TOKEN_SECRET=development-secret-key-change-in-production
AUTH_TOKEN_EXPIRES_IN=7d
```

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build of the application.

### Step 4: Start Production Server

```bash
npm run start
```

Your application will be available at: http://localhost:3000

## Verify Deployment

1. Visit http://localhost:3000 - You should see the homepage
2. Visit http://localhost:3000/status - You should see the status page confirming the app is running
3. Try navigating between pages using the menu

## Deploy to the Internet (Recommended Options)

### Option 1: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Select your repository
5. Vercel will automatically detect it's a Next.js app
6. Click "Deploy"

Your site will be live at a vercel.app subdomain within minutes!

### Option 2: Docker Deployment

Build and run with Docker:

```bash
# Build the Docker image (make sure Docker is running)
docker build -t sportstradex .

# Run the container
docker run -p 3000:3000 sportstradex
```

Access at: http://localhost:3000

## What's Included in This Standard Version

✅ Fully functional frontend with all pages
✅ Responsive design for mobile and desktop
✅ Authentication system (demo version)
✅ All UI components
✅ Animations and interactive elements
✅ Health check endpoints
✅ Deployment configurations

## Next Steps After Deployment

After you have the basic version running, you can enhance it:

1. **Connect to Real Backend** - Replace mock authentication with real API
2. **Add Real Database** - Implement user accounts and data persistence
3. **Enhance Security** - Update secret keys and implement HTTPS
4. **Add Analytics** - Integrate Google Analytics or similar
5. **Improve Performance** - Optimize images and implement caching

## Troubleshooting

### Common Issues

1. **"Module not found" errors** - Run `npm install` again
2. **Port already in use** - Change port with `PORT=3001 npm run start`
3. **Build fails** - Ensure you have Node.js 18+ installed

### Check Node.js Version

```bash
node --version
```

Should show v18.x.x or higher.

## Support

For issues with this deployment, you can:
1. Check the console for error messages
2. Refer to the detailed documentation in the repository
3. Review the DEPLOYMENT_SCRIPT.md file for comprehensive instructions

This standard version gives you a fully functional SportsTradeX application that you can start using immediately!