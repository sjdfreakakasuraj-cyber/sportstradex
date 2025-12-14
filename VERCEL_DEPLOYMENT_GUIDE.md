# Vercel + Supabase Deployment Guide for SportsTradeX

This guide will walk you through deploying your SportsTradeX application to Vercel with Supabase as the backend.

## Prerequisites

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **Supabase Account** - Sign up at [supabase.com](https://supabase.com)
3. **GitHub Account** - For connecting your repository to Vercel
4. **Git Repository** - Your SportsTradeX code should be pushed to GitHub

## Step 1: Set Up Supabase

### Create a New Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Enter project details:
   - **Name**: SportsTradeX
   - **Database Password**: Create a strong password
   - **Region**: Choose the region closest to your users
4. Click "Create New Project"

### Get Supabase Credentials

After your project is created, you'll need two important values:

1. **Project URL**:
   - Go to Settings > API
   - Copy the "Project URL"

2. **Anonymous Key**:
   - In the same API settings page
   - Copy the "anon" key (public key)

## Step 2: Set Up Vercel

### Connect Your Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your SportsTradeX GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: Leave as is
   - **Build and Output Settings**: Use defaults

### Add Environment Variables

In the Vercel project configuration, add these environment variables:

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Value: Your Supabase Project URL
   - Type: Plain Text

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Value: Your Supabase Anonymous Key
   - Type: Plain Text

## Step 3: Configure Supabase Authentication

### Enable Email Authentication

1. In your Supabase dashboard, go to Authentication > Providers
2. Enable "Email" provider
3. Save the changes

### Configure Redirect URLs

1. Still in Authentication > Providers
2. In the "Email" provider settings, add these redirect URLs:
   - `http://localhost:3000`
   - `http://localhost:3000/*`
   - `https://your-vercel-domain.vercel.app`
   - `https://your-vercel-domain.vercel.app/*`

## Step 4: Create Database Tables

### Users Table (Automatically Created)

Supabase automatically creates a `users` table when you enable authentication.

### Courses Table (Optional)

If you want to store course information in the database:

1. Go to Table Editor
2. Click "Create a new table"
3. Name it "courses"
4. Add columns:
   - `id` (UUID, Primary Key, Auto-generated)
   - `title` (Text)
   - `description` (Text)
   - `price` (Numeric)
   - `created_at` (Timestamp, Default: now())

## Step 5: Deploy to Vercel

### Initial Deployment

1. After configuring environment variables, click "Deploy"
2. Vercel will automatically:
   - Install dependencies
   - Build your Next.js application
   - Deploy to a temporary URL

### Set Up Production Domain

1. After successful deployment, go to your project settings
2. Click "Domains"
3. Add your custom domain (optional)
4. Follow the DNS configuration instructions

## Step 6: Test Your Deployment

### Verify Authentication

1. Visit your deployed application
2. Try signing up for a new account
3. Check that you can log in successfully

### Verify Database Connection

1. Create a course through the application
2. Verify it appears in your Supabase table editor

## Environment Variables Reference

Your application expects these environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Troubleshooting

### Common Issues

1. **Authentication Not Working**:
   - Check that environment variables are correctly set in Vercel
   - Verify redirect URLs in Supabase authentication settings

2. **Database Connection Errors**:
   - Ensure your Supabase project is not paused
   - Check that table permissions are correctly set

3. **Build Failures**:
   - Check the build logs in Vercel for specific error messages
   - Ensure all dependencies are correctly listed in package.json

### Checking Logs

1. In Vercel, go to your project
2. Click "Logs" to see real-time application logs
3. Check for any error messages

## Next Steps

After successful deployment, consider:

1. **Setting up custom domain**
2. **Configuring analytics**
3. **Setting up monitoring and alerts**
4. **Implementing additional Supabase features**:
   - Realtime subscriptions
   - Storage for file uploads
   - Functions for serverless logic

## Support

For issues with this deployment:

1. Check the Vercel and Supabase documentation
2. Review the build and runtime logs
3. Verify all environment variables are correctly set
4. Ensure your Supabase project is active and not paused

Your SportsTradeX application should now be successfully deployed to Vercel with Supabase as the backend!