# Taxareus - Professional Tax Filing Website

A modern, responsive, and fully functional tax filing website built with React. Designed for Pakistan's tax system with accurate FBR tax calculations.

## Features

### Core Features
- ✅ **Instant Tax Calculator** - Real-time tax calculations based on Pakistan FBR tax slabs
- ✅ **Responsive Design** - Mobile-first approach with seamless experience on all devices
- ✅ **Modern UI** - Clean, professional design with smooth animations
- ✅ **Interactive Components** - Dynamic range sliders, theme toggles, and form validations
- ✅ **Performance Optimized** - Fast loading with optimized assets
- ✅ **Accessibility** - ARIA labels and keyboard navigation support
- ✅ **SEO Optimized** - Semantic HTML and meta tags

### Sections
1. **Navigation Bar** - Sticky header with mobile hamburger menu
2. **Hero Section** - Eye-catching banner with CTA buttons and phone mockup
3. **Tax Calculator** - Interactive calculator with live tax calculations
4. **Services** - Comprehensive tax services showcase (6 service cards)
5. **Why Trust** - Professional features and trust indicators
6. **Pricing** - Simple transparent pricing with feature checklist
7. **Mobile App** - App showcase with theme toggle (light/dark mode)
8. **Footer** - Complete footer with newsletter subscription and contact info

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: CSS3 with CSS Custom Properties
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Typography**: Google Fonts (Inter, Poppins)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd taxareus
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
taxareus/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── HeroSection.js
│   │   ├── HeroSection.css
│   │   ├── TaxCalculator.js
│   │   ├── TaxCalculator.css
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── WhyTrust.js
│   │   ├── WhyTrust.css
│   │   ├── Pricing.js
│   │   ├── Pricing.css
│   │   ├── MobileApp.js
│   │   ├── MobileApp.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   ├── ScrollToTop.js
│   │   └── ScrollToTop.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Tax Calculator Details

The tax calculator uses Pakistan's FBR tax slab system:

- **0% Tax**: Rs. 0 - Rs. 600,000
- **2.5% Tax**: Rs. 600,001 - Rs. 1,200,000
- **12.5% Tax**: Rs. 1,200,001 - Rs. 2,400,000
- **20% Tax**: Rs. 2,400,001 - Rs. 3,600,000
- **25% Tax**: Rs. 3,600,001 - Rs. 6,000,000
- **32.5% Tax**: Rs. 6,000,001 - Rs. 12,000,000
- **35% Tax**: Above Rs. 12,000,000

The calculator provides:
- Real-time tax calculations
- Monthly and annual breakdowns
- Visual tax slab representation
- Detailed tax breakdown by bracket
- Interactive range slider (0 - Rs. 50 Lakhs)

## Responsive Design

The website is fully responsive across all devices:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Color Scheme

- **Primary Color**: Deep Purple (#4A4AFF)
- **Primary Light**: Light Purple (#5B5BFF)
- **Secondary Light**: Light Purple Background (#F5F3FF)
- **Secondary Lighter**: Lighter Purple (#EDE9FE)
- **Text Dark**: #1A1A1A
- **Text Light**: #666666
- **Footer Background**: #1A1A4D

## Key Components

### Navigation
- Sticky header with blur effect on scroll
- Mobile responsive hamburger menu
- Smooth scroll navigation to sections
- CTA "Get a Quote" button

### Tax Calculator
- Accepts monthly gross income input
- Range slider for easy income adjustment
- Currency formatting
- Real-time calculations
- Visual tax slab breakdown
- Pakistan tax year selection

### Services Section
- 6 service cards with icons
- Hover animations
- Learning more links
- Professional descriptions

### Mobile App Section
- Phone mockup display
- Dark/Light theme toggle
- Download buttons (App Store, Play Store)
- Feature highlights

### Footer
- Newsletter subscription with validation
- Contact information
- Quick links
- Social media links
- Copyright and legal links

## Animations

The website includes smooth animations for:
- Page scrolling
- Card hover effects
- Number transitions
- Float animations on icons
- Fade-in animations on scroll
- Slide animations on load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Optimized CSS with critical styles inline
- Lazy loading ready for images
- Minimal dependencies (only React and React Icons)
- CSS Grid and Flexbox for efficient layouts
- Smooth animations using CSS transforms

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Proper color contrast ratios
- Alt text ready for images

## SEO Optimization

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Semantic HTML elements
- Proper heading hierarchy
- Structured data ready

## Installation & Running

### Development
```bash
npm start
```

### Testing
```bash
npm test
```

### Production Build
```bash
npm run build
```

### Deploy to Production
```bash
# The build folder can be deployed to any static hosting service
# Examples: Netlify, Vercel, GitHub Pages, AWS S3, etc.
```

## Deployment Options

1. **Netlify**: Connect your Git repo for automatic deployments
2. **Vercel**: Similar to Netlify with excellent React support
3. **GitHub Pages**: Free hosting for static sites
4. **AWS Amplify**: AWS's hosting solution
5. **Firebase Hosting**: Google's hosting platform

## Future Enhancements

- [ ] Integration with FBR API for real-time filing
- [ ] Payment gateway integration
- [ ] User authentication and dashboard
- [ ] Document upload functionality
- [ ] Email notifications
- [ ] Multi-language support (Urdu)
- [ ] Advanced tax planning features
- [ ] Tax history tracking
- [ ] API backend for data persistence

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

- **Email**: info@taxareus.com
- **Phone**: +92 332-7772354
- **Address**: Flat 903, Green Two Residency, Block 2 PECHS, Karachi
- **NTN**: 9344224-1

## Support

For support, issues, or feature requests, please contact our team at info@taxareus.com

---

**Built with ❤️ for Pakistan's Taxpayers**

Last Updated: May 2026
