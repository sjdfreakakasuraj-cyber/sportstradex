# SportsTradeX - Production Ready Version

This is a [Next.js](https://nextjs.org) project for SportsTradeX, India's First Sports Trading Platform.

## Quick Deployment

Follow these steps to deploy a standard version of the application:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create Environment Variables**
   Create a `.env.local` file with basic configuration:
   ```env
   NEXT_PUBLIC_APP_NAME=SportsTradeX
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   AUTH_TOKEN_SECRET=your-super-secret-development-key-change-in-production
   AUTH_TOKEN_EXPIRES_IN=7d
   ```

3. **Build the Application**
   ```bash
   npm run build
   ```

4. **Start the Production Server**
   ```bash
   npm run start
   ```

The application will be available at http://localhost:3000

## Alternative Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository
2. Sign up for a free account at [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Deploy!

### Deploy with Docker

1. Build the Docker image:
   ```bash
   docker build -t sportstradex .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 sportstradex
   ```

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next Steps

After deploying this standard version, you can gradually improve the application by:

1. Adding real authentication with a backend service
2. Enhancing security with proper secret keys and HTTPS
3. Improving performance with image optimization and caching
4. Adding monitoring and analytics
5. Expanding test coverage

See `DEPLOYMENT_SCRIPT.md` for detailed instructions.
