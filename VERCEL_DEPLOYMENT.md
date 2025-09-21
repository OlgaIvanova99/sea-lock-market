# Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the Sea Lock Market application to Vercel.

## Prerequisites

- GitHub account with the project repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment Process

### 1. Prepare the Repository

1. Ensure all code is committed and pushed to your GitHub repository
2. Verify that the following files exist:
   - `package.json` with correct dependencies
   - `vite.config.ts` for Vite configuration
   - `tsconfig.json` for TypeScript configuration
   - `tailwind.config.ts` for Tailwind CSS configuration

### 2. Create Vercel Account and Connect GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in using your GitHub account
3. Authorize Vercel to access your GitHub repositories

### 3. Import Project to Vercel

1. In Vercel dashboard, click "New Project"
2. Select "Import Git Repository"
3. Find and select your `sea-lock-market` repository
4. Click "Import"

### 4. Configure Build Settings

Vercel should automatically detect this as a Vite project. Verify these settings:

**Framework Preset:** Vite
**Root Directory:** `./` (default)
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

### 5. Configure Environment Variables

In the Vercel project settings, add the following environment variables:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_ID
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_ID
```

**To add environment variables:**
1. Go to your project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the sidebar
4. Add each variable with your actual values
5. Make sure to add them for all environments (Production, Preview, Development)

### 6. Deploy the Application

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Once deployed, you'll receive a production URL

### 7. Configure Custom Domain (Optional)

1. In your project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Wait for SSL certificate to be issued

### 8. Verify Deployment

1. Visit your deployed application URL
2. Test wallet connection functionality
3. Verify that all components load correctly
4. Check that environment variables are properly loaded

## Important Configuration Notes

### Build Configuration

The project uses Vite as the build tool. Vercel automatically detects this and configures:
- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 18.x

### Environment Variables

All environment variables are prefixed with `VITE_` for client-side access:
- `VITE_WALLET_CONNECT_PROJECT_ID` - WalletConnect project ID
- `VITE_CHAIN_ID` - Ethereum chain ID (11155111 for Sepolia)
- `VITE_RPC_URL` - RPC endpoint URL

### Dependencies

The project includes the following key dependencies:
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- RainbowKit for wallet connection
- Wagmi for Ethereum interactions
- shadcn/ui for UI components

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are in `package.json`
   - Verify TypeScript configuration
   - Ensure all imports are correct

2. **Environment Variables Not Loading**
   - Make sure variables are prefixed with `VITE_`
   - Check that variables are added to all environments
   - Redeploy after adding new variables

3. **Wallet Connection Issues**
   - Verify WalletConnect project ID is correct
   - Check that RPC URLs are accessible
   - Ensure chain ID matches your target network

### Build Logs

To view build logs:
1. Go to your project dashboard
2. Click on the latest deployment
3. View the build logs for any errors

## Production Checklist

Before going live, ensure:

- [ ] All environment variables are configured
- [ ] Wallet connection works on the target network
- [ ] Smart contract addresses are correct
- [ ] All UI components render properly
- [ ] Mobile responsiveness is working
- [ ] Performance is optimized

## Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs for errors
3. Verify environment variable configuration
4. Test locally before deploying

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)
- [Wagmi Documentation](https://wagmi.sh/)