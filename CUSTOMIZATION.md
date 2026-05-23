# Customization Guide

This guide explains how to customize the Taxareus website for your needs.

## Color Scheme Customization

### Change Primary Color

1. **Edit `src/index.css`**:

```css
:root {
  --primary-color: #YOUR_COLOR;
  --primary-dark: #DARKER_SHADE;
  --primary-light: #LIGHTER_SHADE;
  /* ... rest of variables */
}
```

2. **Update Color Names**:
- Replace all `--primary-color` references with your color

### Create Color Themes

Add in `src/App.js`:

```javascript
const [theme, setTheme] = useState('light');

const applyTheme = (themeName) => {
  const themes = {
    light: { primary: '#4A4AFF', secondary: '#F5F3FF' },
    dark: { primary: '#6B5BFF', secondary: '#2A2640' },
  };
  
  const colors = themes[themeName];
  document.documentElement.style.setProperty('--primary-color', colors.primary);
};
```

## Modify Content

### Change Pricing

**File**: `src/components/Pricing.js`

```javascript
const features = [
  'Feature 1',
  'Feature 2',
  // Add or remove features
];

const price = 5000; // Change price
```

### Update Tax Slabs

**File**: `src/components/TaxCalculator.js`

```javascript
const taxSlabs = [
  { from: 0, to: 500000, rate: 0 },  // Modify rates
  { from: 500001, to: 1200000, rate: 3 },
  // Update as needed
];
```

### Change Services

**File**: `src/components/Services.js`

```javascript
const services = [
  {
    id: 1,
    icon: '👤',
    title: 'Your Service',
    description: 'Your description',
    link: 'Learn More'
  },
  // Add more services
];
```

### Update Contact Information

**File**: `src/constants.js`

```javascript
export const CONTACT_INFO = {
  EMAIL: 'your-email@example.com',
  PHONE: '+92 XXX-XXXXXXX',
  ADDRESS: 'Your Address',
  NTN: 'Your NTN',
};
```

## Style Customization

### Change Font Family

**File**: `src/index.css`

```css
body {
  font-family: 'Your-Font', sans-serif;
}
```

**Then update in `public/index.html`**:

```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Adjust Spacing

**File**: `src/App.css`

```css
.section {
  padding: 120px 0;  /* Change padding */
}

.gap-2 {
  gap: 30px;  /* Adjust gaps */
}
```

### Modify Button Styles

**File**: `src/App.css`

```css
.btn {
  padding: 14px 28px;  /* Adjust padding */
  border-radius: 10px;  /* Adjust roundness */
  font-weight: 600;  /* Adjust weight */
}
```

## Component Structure

### Add New Section

1. **Create Component**:

```javascript
// src/components/YourSection.js
import React from 'react';
import './YourSection.css';

const YourSection = () => {
  return (
    <section className="your-section">
      {/* Your content */}
    </section>
  );
};

export default YourSection;
```

2. **Add Styling**:

```css
/* src/components/YourSection.css */
.your-section {
  background: white;
  padding: 100px 0;
}
```

3. **Import in App**:

```javascript
// src/App.js
import YourSection from './components/YourSection';

function App() {
  return (
    <main>
      <YourSection />
    </main>
  );
}
```

### Modify Existing Component

1. Edit component file (e.g., `src/components/HeroSection.js`)
2. Update styling in corresponding CSS file
3. Changes update automatically in development mode

## Feature Customization

### Disable Dark Mode in Mobile App

**File**: `src/components/MobileApp.js`

```javascript
// Remove or comment out the theme toggle section
// <div className="theme-toggle-section">...</div>
```

### Change Calculator Range

**File**: `src/components/TaxCalculator.js`

```javascript
<input
  type="range"
  min="0"
  max="10000000"  // Change max value
  step="50000"    // Change step size
  value={grossIncome}
  onChange={handleSliderChange}
/>
```

### Customize Services Grid

**File**: `src/components/Services.css`

```css
.services-grid {
  grid-template-columns: repeat(4, 1fr);  /* Change column count */
  gap: 24px;  /* Adjust gap */
}
```

## Content Updates

### Update Company Info

**File**: `src/constants.js`

```javascript
export const CONTACT_INFO = {
  EMAIL: 'newemail@example.com',
  PHONE: '+92-XXX-XXXXXXX',
  ADDRESS: 'New Address',
  NTN: 'New NTN',
};
```

### Add Social Media Links

**File**: `src/components/Footer.js`

```javascript
const socialLinks = [
  { platform: 'Facebook', url: 'https://facebook.com/yourpage' },
  { platform: 'Instagram', url: 'https://instagram.com/yourpage' },
];
```

### Update Newsletter Messages

**File**: `src/components/Footer.js`

```javascript
const messages = {
  success: 'Thanks for subscribing!',
  error: 'Please check your email',
};
```

## Performance Customization

### Adjust Animation Speed

**File**: `src/index.css`

```css
:root {
  --transition-fast: 0.1s ease;      /* Make faster */
  --transition-smooth: 0.4s ease;    /* Adjust smooth */
  --transition-slow: 0.7s ease;      /* Make slower */
}
```

### Disable Animations

Add to `src/index.css`:

```css
* {
  animation: none !important;
  transition: none !important;
}
```

### Optimize Images

Store images in `src/assets/images/` and import:

```javascript
import image from '../assets/images/your-image.jpg';

export default function Component() {
  return <img src={image} alt="Description" />;
}
```

## Form Customization

### Add Custom Validation

**File**: `src/utils.js`

```javascript
export const validateCustomField = (value) => {
  // Your validation logic
  return isValid;
};
```

### Modify Newsletter Form

**File**: `src/components/Footer.js`

```javascript
// Add more fields or change validation
const handleSubmit = (e) => {
  e.preventDefault();
  // Custom logic
};
```

## SEO Customization

### Update Meta Tags

**File**: `public/index.html`

```html
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords" />
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your description" />
```

### Update Structured Data

**File**: `public/index.html`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "email": "your@email.com"
}
</script>
```

## Advanced Customization

### Add Authentication

```javascript
import React, { useState } from 'react';

function ProtectedComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  if (!isAuthenticated) {
    return <LoginComponent />;
  }
  
  return <YourComponent />;
}
```

### Integrate Backend API

**File**: `src/utils.js`

```javascript
export const fetchFromAPI = async (endpoint) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const response = await fetch(`${baseUrl}${endpoint}`);
  return await response.json();
};
```

**Usage**:

```javascript
useEffect(() => {
  fetchFromAPI('/tax-data').then(data => {
    // Use data
  });
}, []);
```

### Add State Management (Context API)

```javascript
// src/context/TaxContext.js
import React, { createContext, useState } from 'react';

export const TaxContext = createContext();

export function TaxProvider({ children }) {
  const [income, setIncome] = useState(0);
  
  return (
    <TaxContext.Provider value={{ income, setIncome }}>
      {children}
    </TaxContext.Provider>
  );
}
```

## Localization

### Add Multi-Language Support

Create language files:

```javascript
// src/locales/en.js
export const en = {
  services: {
    title: 'Services',
    // More translations
  }
};

// src/locales/ur.js
export const ur = {
  services: {
    title: 'خدمات',
    // More translations
  }
};
```

## Testing Customizations

```bash
# Test locally
npm start

# Check build
npm run build

# Test production build locally
npm run build
npx serve -s build
```

## Best Practices

1. ✅ Always test changes locally first
2. ✅ Keep backups of original files
3. ✅ Follow existing code style
4. ✅ Update documentation
5. ✅ Test responsiveness
6. ✅ Check browser compatibility
7. ✅ Optimize images before uploading
8. ✅ Validate forms properly
9. ✅ Test on mobile devices
10. ✅ Commit changes to version control

## Common Customizations Summary

| Change | File | What to Modify |
|--------|------|----------------|
| Colors | `src/index.css` | CSS custom properties |
| Pricing | `src/components/Pricing.js` | `features` and `price` |
| Tax Rates | `src/components/TaxCalculator.js` | `taxSlabs` array |
| Services | `src/components/Services.js` | `services` array |
| Fonts | `public/index.html` & `src/index.css` | Font imports and families |
| Contact | `src/constants.js` | `CONTACT_INFO` object |
| Forms | Component files | `onSubmit` handlers |

---

**Need help?** Check README.md or FEATURES.md for more information.
