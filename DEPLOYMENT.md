# Deployment Guide for Render

## Frontend Deployment Steps

### 1. Configure Render Service

In your Render dashboard:

**Build Command:**
```bash
cd frontend && npm install && npm run build
```

**Start Command:**
```bash
cd frontend && npm run start
```

**Environment Variables:**
- `NODE_VERSION`: `18`
- `PORT`: (automatically set by Render)

### 2. Root Directory
Set the root directory to: `.` (project root)

### 3. Build Settings
- **Branch**: `main` (or your default branch)
- **Environment**: `Node`
- **Region**: Choose closest to your users

### 4. Auto-Deploy
Enable "Auto-Deploy" to deploy on every push to main branch

## Troubleshooting

### "Application exited early" Error
This happens when:
1. Using `npm run dev` in production (wrong command)
2. Not building the app before starting
3. Port configuration issues

**Solution:**
- Make sure Build Command runs `npm run build`
- Make sure Start Command runs `npm run start` (not `npm run dev`)
- Ensure PORT environment variable is used

### Build Fails
1. Check Node version is 18+
2. Verify all dependencies are in package.json
3. Check build logs for specific errors

### App Doesn't Load
1. Check browser console for errors
2. Verify API URLs if using backend
3. Check Render logs for runtime errors

## Local Testing of Production Build

Test production build locally before deploying:

```bash
cd frontend
npm run build
npm run start
```

Then visit: http://localhost:3000

## Current Configuration

✅ package.json configured with proper start command
✅ vite.config.js configured for preview server
✅ Port configuration uses $PORT from environment
✅ Host set to 0.0.0.0 for external access

