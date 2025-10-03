# Deployment Guide for NeuroXcel Learn Blog

This guide will help you deploy the NeuroXcel Learn blog to Vercel.

## Prerequisites

- A GitHub account with the repository
- A Vercel account (free tier is sufficient)

## Automatic Deployment (Recommended)

### Step 1: Connect to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Select "Import Git Repository"
5. Find and select `Jsammy1890923/neuroxcellearn-blog`

### Step 2: Configure Project

Vercel will automatically detect that this is a Next.js project and configure the build settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

You don't need to change any of these settings.

### Step 3: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at a Vercel URL (e.g., `neuroxcellearn-blog.vercel.app`)

### Step 4: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `neuroxcellearn.com`)
4. Follow Vercel's instructions to configure your DNS settings

## Manual Deployment with Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From the project root directory:

```bash
vercel
```

Follow the prompts to complete the deployment.

### Step 4: Deploy to Production

```bash
vercel --prod
```

## Environment Variables

This project doesn't require any environment variables for basic operation. However, if you plan to add features like:

- Contact form backend
- Analytics
- CMS integration

You can add environment variables in the Vercel dashboard under Project Settings > Environment Variables.

## Continuous Deployment

Once connected to Vercel:

- Every push to `main` branch triggers a production deployment
- Every push to other branches creates a preview deployment
- Pull requests automatically get preview deployments

## Post-Deployment

### Verify Deployment

Check these pages after deployment:

- Homepage: `https://your-domain.com`
- Blog: `https://your-domain.com/blog`
- About: `https://your-domain.com/about`
- Contact: `https://your-domain.com/contact`
- Sitemap: `https://your-domain.com/sitemap.xml`
- Robots: `https://your-domain.com/robots.txt`

### Update SEO Settings

After deployment, update the following files with your actual domain:

1. **app/sitemap.ts**: Change `baseUrl` to your domain
2. **app/layout.tsx**: Update OpenGraph and Twitter card URLs

### Monitor Performance

Use Vercel Analytics (free tier available) to monitor:

- Page load times
- Core Web Vitals
- Traffic and popular pages

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure all imports use correct paths
- Verify TypeScript types are correct

### 404 Errors

- Ensure all blog posts have `.md` extension
- Check that frontmatter is properly formatted
- Verify file names match the URL slugs

### Styling Issues

- Clear browser cache
- Check Tailwind CSS configuration
- Verify CSS imports are correct

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Contact support via the contact page on the deployed site

## Adding Content

After deployment, to add new blog posts:

1. Create a new `.md` file in the `posts/` directory
2. Add proper frontmatter
3. Commit and push to GitHub
4. Vercel will automatically rebuild and deploy

The site will be updated within 1-2 minutes of pushing changes.
