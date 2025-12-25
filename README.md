# Eosmoda

Eos Moda - Fashion Store Website

## 🚨 Current Status: Deployment Action Required

⚠️ **404 Error Fix Required**: If you're seeing a 404 error when accessing the deployed site, GitHub Pages needs to be manually enabled. See instructions below.

### Fix 404 Error (Repository Owner)

To resolve the 404 error (Code: NOT_FOUND):

1. Go to **Settings** → **Pages** in this repository
2. Under **Build and deployment** → **Source**, select **GitHub Actions**
3. Click **Save**
4. Wait 1-2 minutes for deployment to complete
5. Visit: `https://centrodigital2023.github.io/Eosmoda/`

📖 For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

The deployment workflow triggers on:
- Push to `main` branch
- Push to `copilot/deploy-application` branch
- Push to `copilot/fix-404-error-handling` branch
- Manual trigger via workflow dispatch

### Deployment Status

✅ Website files configured
✅ GitHub Actions workflow configured
✅ Custom 404 error page added
⏳ **Waiting for GitHub Pages to be enabled**

## Features

- Responsive design for mobile and desktop
- Smooth scrolling navigation
- Product showcase with seasonal collections
- Contact form with validation
- Animated elements
- Custom 404 error page with helpful instructions

## Local Development

Open `index.html` in your browser to view the website locally.

## Project Structure

```
/
├── index.html          # Main landing page
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── 404.html           # Custom 404 error page
├── DEPLOYMENT.md      # Deployment instructions
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```