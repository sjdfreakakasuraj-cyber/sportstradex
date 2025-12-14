# SportsTradeX - Quick Start Guide

Get your SportsTradeX application up and running in minutes!

## 🚀 Super Fast Start (Windows)

Double-click the `start-app.bat` file in the project root directory. This will:

1. Check if Node.js is installed
2. Install all dependencies
3. Build the application
4. Start the server

Your application will be available at http://localhost:3000

## 🛠️ Manual Installation

### Prerequisites
- Node.js version 18 or higher
- npm (comes with Node.js)

### Step-by-Step Installation

1. **Navigate to the project directory**:
   ```bash
   cd k:\Stakes\sportstradex-master\sportstradex-master
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify installation**:
   ```bash
   npm run verify
   ```

4. **Build the application**:
   ```bash
   npm run build
   ```

5. **Start the application**:
   ```bash
   npm run launch
   ```

Your application will be available at http://localhost:3000

## 🧪 Health Check

After starting the application, verify it's running properly:

```bash
npm run health
```

You can also visit http://localhost:3000/status in your browser.

## 📁 Project Structure

```
sportstradex-master/
├── src/
│   ├── app/           # Pages and layouts
│   ├── components/    # UI components
│   └── lib/          # Utility functions
├── public/            # Static assets
├── scripts/           # Helper scripts
├── next.config.mjs    # Next.js configuration
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## 🎯 Key Features Ready to Use

✅ **Complete Website** - All pages (Home, Courses, Experts, etc.)
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Authentication System** - Demo login/signup functionality
✅ **Animations** - Smooth transitions and interactive elements
✅ **Health Monitoring** - Built-in status checking

## 🌐 Deployment to the Internet

### Vercel (Easiest)
1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Deploy!

### Docker
```bash
# Build the image
docker build -t sportstradex .

# Run the container
docker run -p 3000:3000 sportstradex
```

## ⚙️ Environment Variables

The application uses the following environment variables:

```env
NEXT_PUBLIC_APP_NAME=SportsTradeX
NEXT_PUBLIC_APP_URL=http://localhost:3000
AUTH_TOKEN_SECRET=development-secret-key-change-in-production
AUTH_TOKEN_EXPIRES_IN=7d
```

For production, update `AUTH_TOKEN_SECRET` with a strong secret key.

## 🆘 Troubleshooting

### Common Issues

1. **"Module not found" errors**:
   ```bash
   npm install
   ```

2. **Port already in use**:
   ```bash
   # Windows
   set PORT=3001 && npm run launch
   
   # Mac/Linux
   PORT=3001 npm run launch
   ```

3. **Build fails due to memory issues**:
   ```bash
   set NODE_OPTIONS=--max-old-space-size=4096
   npm run build
   ```

### Check Node.js Version

```bash
node --version
```

Should show v18.x.x or higher.

## 📈 Next Steps for Enhancement

After deploying this standard version, you can enhance it by:

1. **Real Backend Integration** - Connect to actual API services
2. **Database Setup** - Implement user accounts and data persistence
3. **Security Hardening** - Update secrets and implement HTTPS
4. **Performance Optimization** - Image optimization and caching
5. **Analytics Integration** - Add Google Analytics or similar

## 📞 Support

For any issues:
1. Check the console for error messages
2. Run `npm run verify` to check deployment status
3. Refer to detailed documentation in the repository

---

**Your SportsTradeX application is ready to deploy and use!**