# Quick Start Guide - Taxareus Website

Get the Taxareus website running in just 5 minutes!

## Prerequisites

- Node.js v14+ installed
- npm v6+ installed
- A code editor (VS Code recommended)

## 5-Minute Setup

### Step 1: Navigate to Project (30 seconds)

```bash
cd taxareus
```

### Step 2: Install Dependencies (2 minutes)

```bash
npm install
```

### Step 3: Start Development Server (1 minute)

```bash
npm start
```

The website will open at `http://localhost:3000` in your browser.

### Step 4: Explore (1.5 minutes)

Navigate through the website and test:
- ✅ Scroll through all sections
- ✅ Test the tax calculator
- ✅ Try the mobile app toggle
- ✅ Submit newsletter form
- ✅ Click on links

## That's It! 🎉

Your Taxareus website is now running locally.

## What's Next?

### Want to Make Changes?
See [CUSTOMIZATION.md](CUSTOMIZATION.md) for how to modify:
- Colors
- Pricing
- Content
- Tax rates
- Contact info

### Ready to Deploy?
Follow [DEPLOYMENT.md](DEPLOYMENT.md) to deploy to:
- Netlify
- Vercel
- Firebase
- AWS
- GitHub Pages

### Need Details?
Read [README.md](README.md) for complete documentation.

## Common Commands

```bash
# Start development server
npm start

# Create production build
npm run build

# Stop the server
Ctrl + C

# Restart server
npm start
```

## Troubleshooting

### Port 3000 Already in Use?
```bash
npm start -- --port 3001
```

### Changes Not Appearing?
1. Save file
2. Wait for auto-reload
3. Refresh browser
4. Clear browser cache

### Dependencies Won't Install?
```bash
npm cache clean --force
npm install
```

## File Structure Overview

```
taxareus/
├── src/components/      # All React components
├── public/              # HTML and manifest
├── package.json         # Dependencies
└── README.md           # Full documentation
```

## Key Components

- **Navigation** - Header with menu
- **Hero Section** - Landing banner
- **Tax Calculator** - Interactive calculator
- **Services** - Service cards
- **Pricing** - Pricing information
- **Footer** - Contact & newsletter

## Make Your First Change

### Change the Primary Color

1. Open `src/index.css`
2. Find `--primary-color: #4A4AFF;`
3. Change to your color: `--primary-color: #FF6B9D;`
4. Save and see changes instantly!

### Change the Price

1. Open `src/components/Pricing.js`
2. Find `const amount = 3500;`
3. Change to: `const amount = 4500;`
4. Save and refresh!

## Testing Checklist

- [ ] Website loads without errors
- [ ] Calculator works
- [ ] Forms validate input
- [ ] Links navigate smoothly
- [ ] Mobile menu works
- [ ] Page is responsive
- [ ] Dark/light toggle works
- [ ] Newsletter subscription works

## Performance Tips

- Speeds up as dependencies load
- Production build is much faster
- Clear browser cache if issues
- Use Chrome DevTools to inspect

## Need Help?

1. Check [SETUP.md](SETUP.md) for detailed setup
2. See [CUSTOMIZATION.md](CUSTOMIZATION.md) for changes
3. Read [README.md](README.md) for full docs
4. Visit [FEATURES.md](FEATURES.md) for feature list

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Next Steps

### Immediate
1. ✅ Get it running (you're here!)
2. Explore the website locally
3. Test all features

### Soon
1. Make customizations
2. Build for production
3. Choose hosting platform
4. Deploy online

### Later
1. Monitor performance
2. Gather user feedback
3. Implement improvements
4. Scale as needed

## Production Build

When ready for deployment:

```bash
npm run build
```

Creates optimized `build/` folder. Use for hosting.

## Connect & Share

Once deployed, share your website with users!

---

**Congratulations!** You now have Taxareus running locally. 🚀

For more detailed information, see the complete documentation files.
