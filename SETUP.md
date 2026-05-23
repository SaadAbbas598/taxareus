# Taxareus Setup & Installation Guide

This guide will walk you through setting up and running the Taxareus tax filing website locally.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js, v6.0.0 or higher)
   - Verify installation: `npm --version`

3. **Git** (optional but recommended)
   - Download from: https://git-scm.com/

## Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd taxareus
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- React Icons 4.11.0
- React Scripts 5.0.1
- All dependencies

Installation may take 2-5 minutes depending on your internet connection.

### Step 3: Create Environment File

Copy the example environment file:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Or create a `.env` file in the root directory with:

```env
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_TAX_YEAR=2025-2026
REACT_APP_NTN=9344224-1
REACT_APP_CONTACT_EMAIL=info@taxareus.com
REACT_APP_CONTACT_PHONE=+92 332-7772354
REACT_APP_FILING_PRICE=3500
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm start
```

This will:
- Start a local server at `http://localhost:3000`
- Open the application in your default browser
- Enable hot reload (changes refresh automatically)
- Show compilation errors in the browser

Expected output:
```
On Your Network:   http://YOUR_IP:3000
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

This will:
- Create a `build` folder with optimized files
- Minify CSS and JavaScript
- Optimize assets for production
- Reduce bundle size significantly

## Project Structure Overview

```
taxareus/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── favicon files
├── src/
│   ├── components/         # React components
│   │   ├── Navigation/
│   │   ├── HeroSection/
│   │   ├── TaxCalculator/
│   │   ├── Services/
│   │   ├── WhyTrust/
│   │   ├── Pricing/
│   │   ├── MobileApp/
│   │   ├── Footer/
│   │   └── ScrollToTop/
│   ├── App.js             # Main app component
│   ├── App.css            # Global styles
│   ├── index.js           # Entry point
│   ├── index.css          # Global CSS variables
│   ├── constants.js       # Constants and configuration
│   └── utils.js           # Utility functions
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
└── README.md              # Documentation
```

## Component Organization

Each component follows this structure:

```
ComponentName/
├── ComponentName.js       # React component
└── ComponentName.css      # Component styles
```

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**
Ejects from Create React App for full configuration control.

## Troubleshooting

### Issue: Port 3000 is already in use

**Solution:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Issue: Dependencies won't install

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Changes not reflecting

**Solution:**
1. Stop the dev server (Ctrl+C)
2. Clear browser cache
3. Restart: `npm start`

### Issue: Module not found errors

**Solution:**
```bash
# Reinstall all dependencies
npm install

# Clear cache
npm cache clean --force
```

## Browser Support

The application supports:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS 12+, Android 5+)

## Performance Tips

1. **Enable Production Mode**: Use `npm run build` for production
2. **Clear Browser Cache**: For testing new changes
3. **Use Chrome DevTools**: For debugging and performance profiling
4. **Monitor Bundle Size**: Check with `npm run build`

## Development Workflow

1. Make changes to components in `src/components/`
2. Update styling in component CSS files
3. Test in development mode
4. Commit changes to version control
5. Build for production

## Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect GitHub to Netlify
3. Netlify automatically builds and deploys on push

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Deploy to AWS Amplify

```bash
npm install -g @aws-amplify/cli
amplify configure
amplify init
amplify publish
```

## Environment Variables

Environment variables are configured in `.env`:

```env
# Base API URL for backend integration
REACT_APP_API_BASE_URL=http://localhost:3001/api

# Tax configuration
REACT_APP_TAX_YEAR=2025-2026
REACT_APP_NTN=9344224-1

# Contact information
REACT_APP_CONTACT_EMAIL=info@taxareus.com
REACT_APP_CONTACT_PHONE=+92 332-7772354

# Pricing
REACT_APP_FILING_PRICE=3500
```

Access in components:
```javascript
const apiUrl = process.env.REACT_APP_API_BASE_URL;
```

## Git Setup

Initialize git repository:

```bash
git init
git add .
git commit -m "Initial commit: Taxareus website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Test the application locally
4. ✅ Make customizations as needed
5. ✅ Build for production
6. ✅ Deploy to hosting platform

## Additional Resources

- [React Documentation](https://react.dev)
- [Create React App Docs](https://create-react-app.dev)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Support

For issues or questions:
1. Check the README.md
2. Review the component documentation
3. Check console for error messages
4. Contact: info@taxareus.com

## Common Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm start

# Stop server (in terminal)
Ctrl + C

# Build for production
npm run build

# Clear npm cache
npm cache clean --force

# Check for outdated packages
npm outdated

# Update packages
npm update

# Check package versions
npm list

# Run tests
npm test
```

## Performance Checklist

- ✅ Optimized images
- ✅ Minified CSS and JavaScript
- ✅ Efficient React rendering
- ✅ Smooth animations
- ✅ Mobile responsive
- ✅ Fast loading time
- ✅ Accessibility compliant
- ✅ SEO optimized

## Security Checklist

- ✅ No sensitive data in code
- ✅ Environment variables for secrets
- ✅ HTTPS ready
- ✅ Input validation
- ✅ XSS protection
- ✅ CSRF protection ready
- ✅ Secure dependencies

---

**Successfully set up? Start developing!** 🚀

For detailed component information, check the README.md file.
