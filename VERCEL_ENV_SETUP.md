# Vercel Environment Variables Setup

## Quick Setup Guide

Your deployment is failing because Vercel doesn't have the Supabase environment variables. Follow these steps:

### Step 1: Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### Step 2: Select Your Project
Click on `sportstradex` project

### Step 3: Add Environment Variables
1. Click "Settings" → "Environment Variables"
2. Add the following two variables:

**Variable 1:**
```
Key: NEXT_PUBLIC_SUPABASE_URL
Value: https://lztknyehgjbnlexqicxc.supabase.co
Environments: Production, Preview, Development (select all)
```

**Variable 2:**
```
Key: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dGtueWVoZ2pibmxleHFpY3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjE0MzgsImV4cCI6MjA4MTI5NzQzOH0.yAI-8Fx3hqtmRxHGSqGU53YZxXa0vQwdXbpo4agg2-s
Environments: Production, Preview, Development (select all)
```

### Step 4: Redeploy
1. Go to "Deployments" tab
2. Click the three dots (...) next to the failed deployment
3. Click "Redeploy"
4. Wait for the build to complete

## Why This Is Needed
The Supabase client requires these environment variables to connect to your database. Without them, the build fails with "Invalid supabaseUrl" error.

## Estimated Time
- Adding variables: 2 minutes
- Redeployment: 3-5 minutes
- Total: ~7 minutes

Your application will be live after completing these steps!