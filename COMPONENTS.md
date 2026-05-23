# Component Documentation

Detailed documentation of all React components in the Taxareus website.

## Component Overview

The website is built with 8 main components:

1. **Navigation** - Header with navigation menu
2. **HeroSection** - Landing banner
3. **TaxCalculator** - Interactive tax calculator
4. **Services** - Service cards grid
5. **WhyTrust** - Trust features section
6. **Pricing** - Pricing information
7. **MobileApp** - Mobile app showcase
8. **Footer** - Footer with contact info
9. **ScrollToTop** - Floating scroll button

## Component Hierarchy

```
App
├── Navigation
├── HeroSection
├── TaxCalculator
├── Services
├── WhyTrust
├── Pricing
├── MobileApp
├── Footer
└── ScrollToTop
```

## Detailed Component Documentation

### 1. Navigation Component

**File**: `src/components/Navigation.js`

**Purpose**: Header navigation with sticky positioning and mobile menu.

**Props**: 
- `isScrolled` (boolean) - Whether page is scrolled (from App)

**State**:
- `mobileMenuOpen` (boolean) - Mobile menu visibility

**Features**:
- Sticky header on scroll
- Blur background effect
- Mobile hamburger menu
- Smooth scroll navigation
- Logo clickable for home

**Key Functions**:
```javascript
handleNavClick(sectionId)    // Navigate to section
scrollToTop()                // Scroll to top
```

**Styling**: `src/components/Navigation.css`
- Desktop: Full menu visible
- Mobile: Hamburger menu
- Sticky positioning with z-index 1000

**Usage**:
```javascript
<Navigation isScrolled={isScrolled} />
```

---

### 2. HeroSection Component

**File**: `src/components/HeroSection.js`

**Purpose**: Landing banner with call-to-action and phone mockup.

**State**: None

**Features**:
- Gradient purple background
- Phone mockup with app interface
- Floating decorative icons
- Two CTA buttons
- Trusted by clients badge
- Responsive layout

**Key Elements**:
- Hero heading with italic emphasis
- Subheading with pricing info
- Phone mockup showing refund amount
- App interface with 4 buttons
- Floating decorative emoji icons

**Styling**: `src/components/HeroSection.css`
- Gradient background (#4A4AFF to #6B6BFF)
- Phone mockup frame
- Floating animations
- Responsive phone sizing

**Responsive Breakpoints**:
- Desktop: 2-column grid
- Tablet: Adjust sizing
- Mobile: Single column stacked

---

### 3. TaxCalculator Component

**File**: `src/components/TaxCalculator.js`

**Purpose**: Interactive tax calculator with live calculations.

**State**:
```javascript
const [grossIncome, setGrossIncome] = useState(297107);
const [year, setYear] = useState('2025-2026');
const [results, setResults] = useState({});
```

**Key Features**:
- Real-time tax calculations
- Pakistan FBR tax slabs
- Interactive range slider
- Currency formatting
- Tax breakdown visualization
- Year selection dropdown

**Tax Slabs Implemented**:
```javascript
[
  { from: 0, to: 600000, rate: 0 },
  { from: 600001, to: 1200000, rate: 2.5 },
  { from: 1200001, to: 2400000, rate: 12.5 },
  // ... more slabs
]
```

**Key Functions**:
```javascript
calculateTax(income)        // Calculate based on slabs
handleSliderChange(e)       // Handle slider input
handleInputChange(e)        // Handle text input
formatCurrency(value)       // Format currency display
```

**Output Calculations**:
- Monthly tax
- Monthly net income
- Annual tax
- Annual gross income
- Detailed tax breakdown

**Styling**: `src/components/TaxCalculator.css`
- 2-column grid layout
- Input styling with currency symbol
- Range slider with gradient
- Results grid (2x2)
- Tax slab visualization

**Responsive Design**:
- Desktop: Side-by-side layout
- Tablet: Adjust spacing
- Mobile: Stacked layout

---

### 4. Services Component

**File**: `src/components/Services.js`

**Purpose**: Display 6 tax services in grid layout.

**State**: None

**Services Included**:
1. Personal Tax Filing
2. Tax Registrations
3. Business Representation
4. NTN Registration
5. Tax Refunds
6. Audit Support

**Features**:
- Service cards grid
- Icons for each service
- Hover animations
- Learn more links
- Card elevation on hover

**Card Structure**:
- Icon wrapper with background
- Service title
- Description text
- Learn More link with arrow

**Styling**: `src/components/Services.css`
- CSS Grid (3 columns)
- Card hover effects
- Icon animation
- Link underline animation

**Grid Responsive**:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

---

### 5. WhyTrust Component

**File**: `src/components/WhyTrust.js`

**Purpose**: Build trust with feature highlights.

**State**: None

**Features Displayed**:
1. Unmatched Speed (⚡)
2. 100% Accuracy (✓)
3. Expert Support (💬)
4. Data Security (🔐)

**Component Structure**:
- Left: Text content with features
- Right: Image placeholder
- Feature icons with backgrounds
- Hover animations

**Feature Item Structure**:
- Icon in rounded background
- Title
- Description

**Styling**: `src/components/WhyTrust.css`
- 2-column grid
- Feature item flex layout
- Icon animation on hover
- Image placeholder with gradient

---

### 6. Pricing Component

**File**: `src/components/Pricing.js`

**Purpose**: Display transparent pricing.

**State**: None

**Price Information**:
- Price: Rs. 3,500 per return
- 5 included features
- 4 benefit highlights

**Features Listed**:
1. Individual Income Tax Return
2. Wealth Statement Preparation
3. ITR/FBR Tax Refund Analysis
4. 180 Days ITR Management
5. Dedicated Tax Consultant

**Benefits**:
- Fast Processing (🚀)
- 100% Accuracy
- Maximum Refunds (💰)
- Secure & Confidential (🛡️)

**Components**:
- Large price display
- Feature checklist with checkmarks
- CTA button
- Benefit cards grid
- Pricing note

**Styling**: `src/components/Pricing.css`
- Light purple gradient background
- Centered pricing card
- Feature checklist styling
- Checkmark icons
- Benefits grid (4 items)

---

### 7. MobileApp Component

**File**: `src/components/MobileApp.js`

**Purpose**: Showcase mobile app features.

**State**:
```javascript
const [isDarkMode, setIsDarkMode] = useState(false);
```

**Features**:
- Phone mockup display
- Dark/Light mode toggle
- App interface showcase
- Download buttons (App Store, Play Store)
- Feature highlights grid

**Phone Mockup**:
- Realistic phone frame
- App dashboard display
- Refund status
- Status indicators
- Home button

**Theme Toggle**:
- Switch between light and dark
- Smooth transitions
- Affects mockup display

**App Features Shown**:
1. Real-time Dashboard (📊)
2. Document Upload (📁)
3. Expert Chat Support (💬)
4. Instant Notifications (🔔)

**Styling**: `src/components/MobileApp.css`
- Phone frame with gradient
- Dark/Light theme variants
- Theme toggle switch
- Feature grid (2 columns)
- Download buttons

---

### 8. Footer Component

**File**: `src/components/Footer.js`

**Purpose**: Footer with contact, links, and newsletter.

**State**:
```javascript
const [email, setEmail] = useState('');
const [subscriptionStatus, setSubscriptionStatus] = useState('');
```

**Features**:
- 4-column footer grid
- Newsletter subscription
- Contact information
- Quick links
- Social media links
- Copyright notice
- Legal links

**Sections**:
1. Company Info
   - Logo
   - Description
   - Social links

2. Quick Links
   - Services
   - Calculator
   - Pricing
   - App

3. Contact Info
   - Email
   - Phone
   - Address
   - NTN

4. Newsletter
   - Email input
   - Subscribe button
   - Status messages

**Contact Details**:
- Email: info@taxareus.com
- Phone: +92 332-7772354
- Address: Flat 903, Green Two Residency
- NTN: 9344224-1

**Key Functions**:
```javascript
handleNewsletterSubmit(e)   // Handle subscription
isValidEmail(email)         // Email validation
```

**Styling**: `src/components/Footer.css`
- Dark background (#1A1A4D)
- 4-column grid
- Newsletter form
- Contact item layout
- Social links styling

---

### 9. ScrollToTop Component

**File**: `src/components/ScrollToTop.js`

**Purpose**: Floating button to scroll to top.

**State**:
```javascript
const [isVisible, setIsVisible] = useState(false);
```

**Features**:
- Appears only when scrolled past 300px
- Smooth scroll animation
- Gradient background
- Hover effects
- Keyboard accessible

**Key Functions**:
```javascript
toggleVisibility()   // Show/hide button
scrollToTop()        // Smooth scroll to top
```

**Styling**: `src/components/ScrollToTop.css`
- Fixed positioning (bottom-right)
- Gradient background
- Box shadow
- Hover elevation
- Responsive sizing

## Component Data Flow

```
App (state: isScrolled)
├── Navigation (receives: isScrolled)
├── HeroSection (standalone)
├── TaxCalculator (local state)
├── Services (static data)
├── WhyTrust (static data)
├── Pricing (standalone)
├── MobileApp (local state)
├── Footer (local state)
└── ScrollToTop (local state)
```

## State Management

### Local Component State
- **Navigation**: `mobileMenuOpen`
- **TaxCalculator**: `grossIncome`, `year`, `results`
- **MobileApp**: `isDarkMode`
- **Footer**: `email`, `subscriptionStatus`
- **ScrollToTop**: `isVisible`

### Props Passed from App
- **Navigation**: `isScrolled` (boolean)

## Reusable Patterns

### Component Template
```javascript
import React from 'react';
import './ComponentName.css';

const ComponentName = () => {
  return (
    <section className="component-name">
      <div className="container">
        {/* Content */}
      </div>
    </section>
  );
};

export default ComponentName;
```

### Hook Usage
```javascript
const [state, setState] = useState(initialValue);

useEffect(() => {
  // Side effects
}, [dependencies]);
```

## Styling Approach

- **Global Styles**: `src/index.css` and `src/App.css`
- **Component Styles**: Each component has matching `.css` file
- **CSS Custom Properties**: Used for colors and transitions
- **CSS Grid/Flexbox**: For layouts
- **Media Queries**: For responsive design

## Responsive Design Pattern

```css
/* Desktop (1200px+) */
.component {
  grid-template-columns: 1fr 1fr;
}

/* Tablet (768px - 1199px) */
@media (max-width: 1024px) {
  .component {
    grid-template-columns: 1fr;
  }
}

/* Mobile (< 768px) */
@media (max-width: 768px) {
  .component {
    padding: 40px 0;
  }
}
```

## Component Performance

- Functional components with hooks
- Efficient state updates
- No unnecessary re-renders
- Proper dependency arrays in useEffect
- Optimized event handlers

## Accessibility Features

- Semantic HTML (section, article, etc.)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on buttons
- Color contrast compliance

## Testing Components

### Manual Testing
1. Check each component renders
2. Test interactions (inputs, buttons)
3. Verify styling and layout
4. Test responsiveness
5. Check accessibility

### Browser DevTools
- Check console for errors
- Inspect element styling
- Monitor network tab
- Review performance

## Component Customization

### Adding Content
1. Edit component props or state
2. Modify array data (services, features)
3. Update text content
4. Change styling classes

### Styling Changes
1. Edit corresponding `.css` file
2. Modify CSS custom properties
3. Adjust responsive breakpoints
4. Update hover states

### Adding Functionality
1. Add state with useState
2. Add effects with useEffect
3. Add event handlers
4. Update component logic

## Best Practices Used

✅ Single Responsibility Principle
✅ DRY (Don't Repeat Yourself)
✅ Component Composition
✅ Proper Naming Conventions
✅ Comments in Complex Logic
✅ Consistent Code Style
✅ Performance Optimization
✅ Accessibility Support
✅ Mobile-First Design
✅ SEO Considerations

## Common Issues & Solutions

### Issue: Component not updating
**Solution**: Check state dependencies in useEffect

### Issue: Styling not applying
**Solution**: Verify CSS class names match HTML

### Issue: Mobile layout broken
**Solution**: Check media query breakpoints

### Issue: Performance slow
**Solution**: Check for unnecessary re-renders

## Future Component Ideas

- Authentication component
- User dashboard component
- Form submission component
- Payment integration component
- Chat support component
- Analytics dashboard component
- Admin panel component

---

All components follow React best practices and are production-ready!
