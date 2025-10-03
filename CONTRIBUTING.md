# Contributing to NeuroXcel Learn

Thank you for your interest in contributing to NeuroXcel Learn! This document provides guidelines for contributing to the project.

## Ways to Contribute

### 1. Content Contributions

**Blog Posts**
- Write educational articles about neurodiversity
- Share personal experiences and strategies
- Create guides and tutorials

**Blog Post Guidelines:**
- Use inclusive, accessible language
- Cite sources for research-based content
- Include practical, actionable advice
- Use clear headings and structure
- Add appropriate tags

**Blog Post Format:**
```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description (2-3 sentences)"
author: "Your Name"
featured: false
tags: ["tag1", "tag2", "tag3"]
---

Your content here...
```

### 2. Code Contributions

**Areas for Enhancement:**
- New features (search, categories, filtering)
- Performance improvements
- Accessibility enhancements
- Bug fixes
- UI/UX improvements

### 3. Design Contributions

- Improve visual design
- Enhance accessibility
- Create illustrations or graphics
- Design templates or components

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- Git
- Basic knowledge of React/Next.js (for code contributions)

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/neuroxcellearn-blog.git
cd neuroxcellearn-blog
```

3. Install dependencies:
```bash
npm install
```

4. Create a branch:
```bash
git checkout -b feature/your-feature-name
```

5. Start development server:
```bash
npm run dev
```

## Submitting Changes

### For Blog Posts

1. Create your markdown file in `posts/` directory
2. Follow the frontmatter format
3. Test locally to ensure it renders correctly
4. Submit a pull request with:
   - Clear description of the content
   - Why it's valuable for the community
   - Any relevant sources or references

### For Code Changes

1. Make your changes
2. Test thoroughly:
```bash
npm run build
npm run dev
```

3. Ensure code quality:
   - Follow existing code style
   - Add comments for complex logic
   - Ensure TypeScript types are correct

4. Commit your changes:
```bash
git add .
git commit -m "Brief description of changes"
```

5. Push to your fork:
```bash
git push origin feature/your-feature-name
```

6. Create a pull request with:
   - Clear description of changes
   - Why the change is needed
   - Screenshots (for UI changes)
   - Testing steps

## Pull Request Guidelines

### Title Format
- For features: `feat: Add search functionality`
- For bugs: `fix: Resolve navigation issue on mobile`
- For content: `content: Add article on study strategies`
- For docs: `docs: Update deployment guide`

### Description Should Include
- What the change does
- Why it's needed
- How to test it
- Any breaking changes
- Related issues (if any)

### Review Process
1. Automated checks will run
2. Maintainers will review your PR
3. Address any feedback
4. Once approved, changes will be merged

## Code Style Guidelines

### TypeScript/React
- Use TypeScript for type safety
- Use functional components
- Follow React best practices
- Keep components focused and reusable

### Styling
- Use Tailwind CSS utility classes
- Follow existing design system
- Ensure responsive design
- Maintain accessibility standards

### File Organization
```
app/              # Next.js pages
components/       # Reusable components
lib/              # Utility functions
posts/            # Blog post markdown files
public/           # Static assets
```

## Accessibility Guidelines

All contributions must maintain WCAG 2.1 AA standards:

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Maintain color contrast ratios
- Support screen readers
- Include ARIA labels where needed

## Content Guidelines

### Inclusive Language
- Use person-first or identity-first language as appropriate
- Avoid ableist terms
- Be respectful of all neurodivergent experiences
- Include diverse perspectives

### Writing Style
- Clear, concise writing
- Break text into readable chunks
- Use headings and lists
- Define technical terms
- Provide examples and practical tips

## Community Standards

### Be Respectful
- Treat all contributors with respect
- Welcome diverse perspectives
- Be open to feedback
- Assume good intentions

### Be Professional
- Keep discussions focused and constructive
- Provide helpful feedback
- Credit others' work appropriately
- Follow code of conduct

## Questions or Need Help?

- Open an issue for discussion
- Use the contact form on the website
- Check existing documentation first

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Recognition

All contributors will be recognized in the project. Significant contributions may be highlighted on the website.

Thank you for helping make education more accessible for neurodivergent learners! 🎉
