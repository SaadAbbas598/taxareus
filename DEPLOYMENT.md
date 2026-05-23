# Deployment Guide for Taxareus

This guide covers deploying the Taxareus website to various hosting platforms.

## Pre-Deployment Checklist

- ✅ All features tested locally
- ✅ Build runs without errors: `npm run build`
- ✅ No console errors or warnings
- ✅ Environment variables configured
- ✅ Responsive design verified on multiple devices
- ✅ Performance optimized
- ✅ SEO meta tags added
- ✅ Analytics configured (optional)

## Build the Application

Before deployment, create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

#### Method A: Using Git

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [https://netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `build`

3. **Automatic Deployment**
   - Every push to `main` branch auto-deploys
   - Preview deployments for pull requests

#### Method B: Using Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

#### Netlify Configuration File

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production]
  environment = { REACT_APP_ENV = "production" }
```

### Option 2: Vercel

#### Setup

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts

#### Vercel Configuration (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "env": {
    "REACT_APP_ENV": "production"
  }
}
```

### Option 3: Firebase Hosting

1. **Install Firebase Tools**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init
   ```

3. **Select these options:**
   - Hosting: Configure and deploy Firebase Hosting
   - Use existing project or create new
   - Public directory: `build`
   - Single-page app: Yes
   - Automatic builds with GitHub: Yes

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Option 4: AWS S3 + CloudFront

1. **Create S3 Bucket**
   - Create bucket for your domain
   - Enable static website hosting
   - Upload contents of `build/` folder

2. **Create CloudFront Distribution**
   - Set S3 bucket as origin
   - Create distribution
   - Point domain to CloudFront URL

3. **Configure for SPA**
   - Set default root object to `index.html`
   - Set error responses to redirect to `index.html`

### Option 5: GitHub Pages

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   "homepage": "https://yourusername.github.io/taxareus",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 6: Traditional Hosting (Cpanel, etc.)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload contents of `build/` folder to `public_html/`
   - Use FTP or file manager in cPanel

3. **Configure .htaccess**
   Create `.htaccess` in `public_html/`:
   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Domain Configuration

### Point Domain to Hosting

1. **Get nameservers** from your hosting provider
2. **Update DNS** at domain registrar
3. **Wait 24-48 hours** for propagation
4. **Verify** domain is pointing correctly

### SSL Certificate

Most platforms provide free SSL:
- Netlify: Automatic
- Vercel: Automatic
- Firebase: Automatic
- AWS: Use AWS Certificate Manager
- GitHub Pages: Automatic
- cPanel: Let's Encrypt (usually free)

## Environment Variables in Production

### Netlify
1. Site settings → Build & deploy → Environment
2. Add environment variables

### Vercel
1. Settings → Environment Variables
2. Add variables for different environments

### Firebase
1. Use Firebase Environment Configuration
2. Or set in `.env` file before deployment

### AWS
1. Use AWS Systems Manager Parameter Store
2. Reference in CloudFormation template

## Monitoring & Analytics

### Add Google Analytics

Update `public/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance

1. **Lighthouse**: Chrome DevTools
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **GTmetrix**: https://gtmetrix.com/

## Troubleshooting Deployment

### Blank White Page

**Problem**: Page loads but shows nothing

**Solutions**:
1. Check browser console for errors
2. Verify build command ran successfully
3. Check public directory is set correctly
4. Ensure all assets have correct paths

### 404 Errors on Page Refresh

**Problem**: Routes don't work after refresh

**Solutions**:
1. Configure redirect rules in hosting
2. Set `public` directory correctly
3. Ensure `index.html` is default document

### Build Fails

**Problem**: Deploy fails during build

**Solutions**:
```bash
# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

### Environment Variables Not Loading

**Problem**: `process.env.REACT_APP_*` returns undefined

**Solutions**:
1. Variables must start with `REACT_APP_`
2. Restart build after changing variables
3. Check spelling matches exactly
4. Use double quotes in `.env` file

## Performance Optimization

### Bundle Size

```bash
npm install -g source-map-explorer
npm run build
source-map-explorer 'build/static/js/*.js'
```

### Gzip Compression

Most platforms enable automatically. Verify:
- Netlify: Automatic
- Vercel: Automatic
- Firebase: Automatic
- AWS: Enable in CloudFront
- cPanel: Enable in WHM

### Caching

Add cache headers in `netlify.toml`:

```toml
[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

## Post-Deployment

1. **Test everything**
   - All pages load correctly
   - Calculator works
   - Forms submit
   - Links work
   - Mobile responsive

2. **Check Analytics**
   - Verify tracking code works
   - Monitor traffic

3. **Monitor Errors**
   - Set up error tracking
   - Monitor performance

4. **Update Documentation**
   - Document deployment process
   - Note any custom configurations

## Rollback Deployment

### Netlify
- Go to Deploys
- Click on previous deployment
- Click "Publish deploy"

### Vercel
- Go to Deployments
- Click three dots on previous deployment
- Click "Promote to Production"

### Firebase
- Keep previous versions
- Use `firebase hosting:rollback`

## Continuous Deployment

Recommended CI/CD Pipeline:

1. Push code to GitHub
2. Run automated tests
3. Build application
4. Deploy to staging
5. Run end-to-end tests
6. Deploy to production

## Security Checklist

- ✅ HTTPS enabled
- ✅ Security headers configured
- ✅ No sensitive data in code
- ✅ Environment variables for secrets
- ✅ Regular dependency updates
- ✅ Security scanning enabled

## Getting Help

- **Netlify**: https://docs.netlify.com/
- **Vercel**: https://vercel.com/docs
- **Firebase**: https://firebase.google.com/docs/hosting
- **AWS**: https://docs.aws.amazon.com/
- **GitHub Pages**: https://docs.github.com/en/pages

---

**Successfully deployed?** Monitor your live site and gather user feedback to improve continuously! 🚀
