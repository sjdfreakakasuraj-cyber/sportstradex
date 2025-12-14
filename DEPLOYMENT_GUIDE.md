# Deployment Guide for SportsTradeX

This guide provides instructions for deploying the SportsTradeX application to various environments.

## 1. Prerequisites

### Local Development Setup
1. Node.js version 18 or higher
2. npm or yarn package manager
3. Git version control system
4. Code editor (VS Code recommended)

### Required Accounts
1. Vercel account (for deployment)
2. GitHub account (for CI/CD)
3. Domain registrar (for custom domains)

## 2. Environment Configuration

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
# Application Settings
NEXT_PUBLIC_APP_NAME=SportsTradeX
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Authentication
AUTH_TOKEN_SECRET=your-super-secret-jwt-key-here
AUTH_TOKEN_EXPIRES_IN=7d

# Database (if using a database)
DATABASE_URL=postgresql://user:password@localhost:5432/sportstradex

# API Keys
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com

# Third-party Services
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@sentry.io/xxxxxxx
```

## 3. Local Development

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/sportstradex.git

# Navigate to the project directory
cd sportstradex

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your values
```

### Running the Development Server
```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 4. Testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Run tests in watch mode
npm run test:watch
```

### Test Structure
Tests are organized in the same directory structure as the source code:
```
src/
├── components/
│   └── ui/
│       ├── button.test.tsx
│       └── input.test.tsx
└── lib/
    └── utils.test.ts
```

## 5. Building for Production

### Build Process
```bash
# Create an optimized production build
npm run build
```

The build process will:
1. Analyze the application
2. Optimize bundles
3. Generate static assets
4. Create server-side rendered pages

### Output Directory
The build output is stored in the `.next` directory:
- Static assets in `.next/static`
- Server-rendered pages in `.next/server`
- Client-side bundles in `.next/static/chunks`

## 6. Deployment Options

### Option 1: Vercel (Recommended)
Vercel provides the best experience for deploying Next.js applications.

#### Deployment Steps:
1. Push your code to a GitHub repository
2. Sign in to Vercel
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables
6. Deploy!

#### Vercel Configuration
Create a `vercel.json` file in the root directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": {
        "includeFiles": ["next.config.mjs"]
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

### Option 2: Docker Deployment
Create a `Dockerfile` in the root directory:

```dockerfile
# Install dependencies only when needed
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run the Docker image:
```bash
# Build the Docker image
docker build -t sportstradex .

# Run the container
docker run -p 3000:3000 sportstradex
```

### Option 3: Traditional Node.js Server
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start the production server
npm run start
```

## 7. CI/CD Pipeline

### GitHub Actions
The project includes a GitHub Actions workflow in `.github/workflows/ci.yml`.

#### Pipeline Stages:
1. **Lint and Type Check** - Validates code quality
2. **Test** - Runs the test suite
3. **Build** - Creates production build
4. **Security Scan** - Checks for vulnerabilities
5. **Deploy** - Deploys to staging or production

#### Required Secrets:
Add the following secrets to your GitHub repository:
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID
- `SNYK_TOKEN` - Snyk authentication token (optional)

## 8. Monitoring and Analytics

### Performance Monitoring
1. **Web Vitals**: Next.js automatically reports Web Vitals
2. **Custom Analytics**: Implement custom event tracking
3. **Error Tracking**: Integrate Sentry or similar service

### Error Tracking Setup
```javascript
// pages/_app.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

## 9. Scaling Considerations

### Caching Strategies
1. **Static Assets**: Use CDN for images and static files
2. **API Responses**: Implement Redis or similar caching
3. **Database Queries**: Use query result caching

### Load Balancing
For high-traffic applications:
1. Deploy multiple instances
2. Use a load balancer (NGINX, AWS ELB)
3. Implement sticky sessions if needed

### Database Optimization
1. Use connection pooling
2. Implement read replicas for scaling reads
3. Add database indexes for frequently queried fields

## 10. Backup and Recovery

### Automated Backups
1. Database backups (daily/weekly)
2. Code repository backups (GitHub handles this)
3. Environment variable backups (store securely)

### Disaster Recovery Plan
1. Document recovery procedures
2. Test backup restoration regularly
3. Maintain multiple backup locations

## 11. Security Best Practices

### HTTPS Enforcement
Ensure all traffic is served over HTTPS:
```javascript
// next.config.mjs
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
```

### Security Headers
Implement security headers in your deployment platform:
```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

This deployment guide provides a comprehensive approach to deploying the SportsTradeX application in various environments while maintaining security, performance, and scalability.