# Deployment Guide for FormerAI

This guide will help you deploy FormerAI to various hosting platforms.

## ✅ Prerequisites Completed

- ✓ Git repository initialized
- ✓ Code pushed to GitHub: https://github.com/Chandrasekhar246800/FarmerAI.git
- ✓ All dependencies configured in package.json
- ✓ Production build tested

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

#### Steps:

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In" with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub account
   - Find "FarmerAI" repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `.next` (auto-configured)
   - Install Command: `npm install` (auto-configured)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Get your live URL: `your-project.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Environment Variables (if needed):
```
NEXT_PUBLIC_API_URL=your_api_url
```

**Deployment Time**: ~2-3 minutes  
**URL Format**: `formerai.vercel.app` or custom domain

---

### Option 2: Netlify

#### Steps:

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Log in with GitHub

2. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify
   - Select "FarmerAI" repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Configure Next.js Plugin**
   - Go to "Plugins" tab
   - Search for "Next.js Runtime"
   - Install the plugin

5. **Get Your URL**
   - Your site will be at: `random-name.netlify.app`
   - Can customize in Site Settings

**Deployment Time**: ~3-5 minutes  
**URL Format**: `your-site-name.netlify.app`

---

### Option 3: GitHub Pages (Static Export)

⚠️ **Note**: This requires converting to static export. Not recommended for this project due to dynamic features.

---

### Option 4: Self-Hosted (VPS/Server)

If you have your own server:

#### Requirements:
- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy

#### Steps:

1. **SSH into your server**
```bash
ssh user@your-server.com
```

2. **Clone repository**
```bash
git clone https://github.com/Chandrasekhar246800/FarmerAI.git
cd FarmerAI
```

3. **Install dependencies**
```bash
npm install
```

4. **Build for production**
```bash
npm run build
```

5. **Install PM2**
```bash
npm install -g pm2
```

6. **Start with PM2**
```bash
pm2 start npm --name "formerai" -- start
pm2 save
pm2 startup
```

7. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **SSL with Certbot**
```bash
sudo certbot --nginx -d your-domain.com
```

---

## 🔧 Post-Deployment Checklist

### ✅ Essential Checks:

1. **Test Navigation**
   - [ ] All sections scroll smoothly
   - [ ] Mobile menu works
   - [ ] All internal links work

2. **Test Interactive Elements**
   - [ ] Hover effects on cards
   - [ ] Animated counters trigger on scroll
   - [ ] Contact form submission works
   - [ ] Timeline bubbles are clickable

3. **Test Responsiveness**
   - [ ] Desktop view (1920px)
   - [ ] Tablet view (768px)
   - [ ] Mobile view (375px)

4. **Performance**
   - [ ] PageSpeed Insights score > 90
   - [ ] Images load quickly
   - [ ] No console errors

5. **SEO**
   - [ ] Meta tags present
   - [ ] Open Graph tags configured
   - [ ] Sitemap generated

---

## 🌐 Custom Domain Setup

### For Vercel:

1. Go to Project Settings → Domains
2. Add your domain: `formerai.com`
3. Add DNS records at your domain registrar:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

### For Netlify:

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   - Type: `A`, Name: `@`, Value: `75.2.60.5`
   - Type: `CNAME`, Name: `www`, Value: `your-site.netlify.app`

---

## 📊 Monitoring & Analytics

### Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🐛 Troubleshooting

### Build Fails on Vercel/Netlify:

**Error**: `Module not found`
- **Solution**: Check all import paths use `@/` alias correctly
- Run `npm run build` locally first

**Error**: `Out of memory`
- **Solution**: Increase Node memory: `NODE_OPTIONS=--max_old_space_size=4096`

### Images Not Loading:

- Check image paths in `public/` folder
- Use Next.js Image component: `import Image from 'next/image'`

### Styles Not Applied:

- Verify Tailwind config is correct
- Check `globals.css` is imported in `layout.tsx`

---

## 🔄 Continuous Deployment

Both Vercel and Netlify offer automatic deployments:

- **Push to main branch** → Automatic deployment
- **Pull requests** → Preview deployments
- **Branches** → Branch deployments

No manual action needed after initial setup!

---

## 📞 Support

If you encounter issues:

1. Check deployment logs in your platform dashboard
2. Review this guide's troubleshooting section
3. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Open an issue on GitHub

---

## ✨ You're Ready to Deploy!

**Recommended**: Start with Vercel for the easiest deployment experience.

**Live in 3 minutes with Vercel:**
1. Sign up at vercel.com
2. Import GitHub repository
3. Click Deploy
4. Done! 🎉

---

**Last Updated**: October 24, 2025
