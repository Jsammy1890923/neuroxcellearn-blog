# NeuroXcel Learn Blog

Tools & strategies for neurodiverse learners by NeuroXcel Publishing. Built with Next.js and Tailwind CSS.

## About

NeuroXcel Learn is a professional blog platform dedicated to empowering neurodivergent learners through accessible education, innovative AI tools, and evidence-based learning strategies. Part of NeuroXcel Publishing House, we serve individuals with ADHD, autism, dyslexia, and other learning differences.

## Features

- 🎨 **Modern, Accessible Design**: Built with Tailwind CSS and accessibility best practices
- 📝 **Markdown-Based Content**: Easy-to-write blog posts using Markdown
- 🔍 **SEO Optimized**: Meta tags, Open Graph tags, and automatic sitemap generation
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built on Next.js with static generation
- ♿ **Accessibility First**: Designed with WCAG guidelines in mind
- 🎯 **Featured Posts**: Highlight important content on the homepage
- 🏷️ **Dynamic Routing**: Automatic routing for blog posts
- 📊 **SEO-Friendly URLs**: Clean, readable URLs for better search engine optimization

## Project Structure

```
neuroxcellearn-blog/
├── app/
│   ├── about/              # About page
│   ├── blog/               # Blog index and dynamic post routes
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Automatic sitemap generation
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   └── PostCard.tsx        # Blog post preview card
├── lib/
│   └── posts.ts            # Blog post utilities
├── posts/                  # Markdown blog posts
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jsammy1890923/neuroxcellearn-blog.git
cd neuroxcellearn-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Blog Posts

Create a new Markdown file in the `posts/` directory with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
author: "Author Name"
featured: true
tags: ["tag1", "tag2"]
---

Your post content in Markdown format...
```

### Frontmatter Fields

- `title`: Post title (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `excerpt`: Short description for previews (required)
- `author`: Post author name (optional)
- `featured`: Set to `true` to feature on homepage (optional)
- `tags`: Array of tags (optional)

## Building for Production

Build the project:
```bash
npm run build
```

The static files will be generated in the `.next` directory.

## Deployment to Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure build settings
6. Click "Deploy"

### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy

### Environment Configuration

No environment variables are required for basic deployment. For production, consider setting:

- Custom domain in Vercel dashboard
- Analytics (Vercel Analytics or Google Analytics)
- Contact form backend (if implementing form submissions)

## Customization

### Styling

- Edit `app/globals.css` to modify global styles
- Tailwind CSS classes can be used throughout components
- Color scheme can be adjusted in the CSS variables

### Content

- Update header/footer in respective components
- Modify homepage sections in `app/page.tsx`
- Customize About and Contact pages
- Add your own blog posts in `posts/` directory

### SEO

- Update metadata in `app/layout.tsx` for global SEO
- Each page has its own metadata configuration
- Sitemap automatically generates from blog posts
- Add your actual domain in `app/sitemap.ts`

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Responsive design
- High contrast support
- Reduced motion support
- Screen reader friendly

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Content**: Markdown with gray-matter
- **Markdown Processing**: remark & remark-html
- **Date Formatting**: date-fns

## Contributing

We welcome contributions! Please feel free to submit issues or pull requests.

## License

This project is part of NeuroXcel Publishing House.

## Support

For questions or support, please visit our [Contact page](https://neuroxcellearn.com/contact) or open an issue on GitHub.

## Acknowledgments

Built with ❤️ for the neurodivergent community by NeuroXcel Publishing House.

