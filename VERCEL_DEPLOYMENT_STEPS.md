# Vercel Deployment Steps for SportsTradeX

## Prerequisites
- GitHub account
- Vercel account
- This repository pushed to GitHub

## Step 1: Push Code to GitHub
If you haven't already, push your SportsTradeX code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/sportstradex.git
git push -u origin main
```

## Step 2: Connect to Vercel
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework: Next.js
   - Root directory: Leave as is
   - Build command: `next build`
   - Output directory: `.next`

## Step 3: Add Environment Variables
In Vercel project settings, add these environment variables:

1. `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://lztknyehgjbnlexqicxc.supabase.co`

2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dGtueWVoZ2pibmxleHFpY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjE0MzgsImV4cCI6MjA4MTI5NzQzOH0.yAI-8Fx3hqtmRxHGSqGU53YZxXa0vQwdXbpo4agg2-s`

## Step 4: Configure Supabase for Production
In your Supabase dashboard:
1. Go to Authentication > Settings
2. Add your Vercel deployment URL to "Redirect URLs":
   - `https://your-project.vercel.app`
   - `https://your-project.vercel.app/*`

## Step 5: Deploy
Click "Deploy" in Vercel and wait for the build to complete.

## Troubleshooting
If you encounter issues:
1. Check that environment variables are correctly set in Vercel
2. Verify that Supabase redirect URLs include your Vercel domain
3. Check Vercel logs for build errors