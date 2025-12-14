# Vercel CLI Deployment Guide for SportsTradeX

This guide will help you deploy your SportsTradeX application to Vercel using the CLI, which is perfect when you don't want to push to GitHub.

## Prerequisites

1. Node.js installed on your system
2. Vercel account (you're creating this now)
3. This project directory

## Step 1: Install Vercel CLI

Open your terminal/command prompt and run:

```bash
npm install -g vercel
```

## Step 2: Prepare Your Project

I've already configured your project with the correct Supabase credentials:

- **Supabase URL**: `https://lztknyehgjbnlexqicxc.supabase.co`
- **Supabase Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dGtueWVoZ2pibmxleHFpY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjE0MzgsImV4cCI6MjA4MTI5NzQzOH0.yAI-8Fx3hqtmRxHGSqGU53YZxXa0vQwdXbpo4agg2-s`

## Step 3: Deploy Using Vercel CLI

Navigate to your project directory and deploy:

```bash
cd k:\Stakes\sportstradex-master\sportstradex-master
vercel
```

## Step 4: Follow the Prompts

When you run `vercel`, you'll be prompted to:

1. **Log in to your Vercel account**
   - Choose to log in with email or continue with browser
   - Complete the authentication process

2. **Set up and deploy**
   - Select the project directory (current directory)
   - Vercel will auto-detect it's a Next.js application
   - Choose a project name (e.g., "sportstradex")
   - Select your personal account or team

3. **Configure build settings** (Vercel will auto-detect these)
   - Framework: Next.js
   - Build command: `next build`
   - Output directory: `.next`
   - Development command: `next dev`

## Step 5: Set Environment Variables

After the initial deployment, you'll need to add environment variables in the Vercel dashboard:

1. Go to your Vercel dashboard
2. Select your newly created project
3. Go to Settings > Environment Variables
4. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://lztknyehgjbnlexqicxc.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dGtueWVoZ2pibmxleHFpY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjE0MzgsImV4cCI6MjA4MTI5NzQzOH0.yAI-8Fx3hqtmRxHGSqGU53YZxXa0vQwdXbpo4agg2-s`

## Step 6: Redeploy

After adding environment variables, redeploy your application:

1. In your project dashboard, click "Deployments"
2. Click the "Redeploy" button for the latest deployment
3. Or run `vercel --prod` from your project directory

## Alternative: One-Command Deployment

Once you've set up your project initially, you can deploy to production with one command:

```bash
vercel --prod
```

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Ensure all dependencies are listed in package.json
   - Check that Node.js version is compatible (18+ recommended)

2. **Environment Variables Not Working**:
   - Make sure they're added in the Vercel dashboard
   - Redeploy after adding variables

3. **Supabase Connection Issues**:
   - Verify Supabase credentials are correct
   - Check that redirect URLs are configured in Supabase dashboard

### Checking Deployment Logs

1. In Vercel dashboard, go to your project
2. Click "Deployments"
3. Select the latest deployment
4. View logs for build and runtime information

## Next Steps After Deployment

1. **Configure Custom Domain** (optional):
   - In project settings, add your domain
   - Follow DNS configuration instructions

2. **Set Up Supabase Redirect URLs**:
   - In Supabase dashboard, add your Vercel domain to redirect URLs:
     - `https://your-vercel-domain.vercel.app`
     - `https://your-vercel-domain.vercel.app/*`

3. **Test Your Application**:
   - Visit your deployed URL
   - Test authentication (signup/login)
   - Verify all pages load correctly

This CLI deployment method gives you the flexibility to deploy without needing to push to a Git repository, making it perfect for quick deployments and testing.