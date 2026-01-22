# Blog Images Guide

## Overview
Blog posts now support two types of images:
1. **Thumbnail Image** - Displayed on the blog listing page (card view)
2. **Featured Image** - Main image displayed at the top of the blog post

## Image Fields

### Thumbnail Image (`thumbnailImage`)
- **Purpose**: Small preview image shown on blog listing cards
- **Recommended Size**: 800x400px (2:1 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Location**: Displayed at the top of each blog card

### Featured Image (`featuredImage`)
- **Purpose**: Main hero image displayed at the top of the blog post
- **Recommended Size**: 1200x630px (for optimal social sharing)
- **Format**: JPG, PNG, or WebP
- **Location**: Displayed below the title and meta information

### SEO Image (`seoMeta.ogImage`)
- **Purpose**: Custom Open Graph image for social media sharing
- **Optional**: If not provided, uses `featuredImage` or `thumbnailImage`
- **Recommended Size**: 1200x630px (Facebook/LinkedIn standard)

## Usage in Blog Posts

### Basic Example
```typescript
{
  slug: 'my-blog-post',
  title: 'My Blog Post Title',
  excerpt: 'A brief description...',
  content: '<p>Blog content...</p>',
  author: 'David Turnbull',
  publishDate: '2025-01-27',
  thumbnailImage: '/blog-images/my-post-thumbnail.jpg',
  featuredImage: '/blog-images/my-post-featured.jpg',
  // ... other fields
}
```

### With SEO Image
```typescript
{
  slug: 'my-blog-post',
  title: 'My Blog Post Title',
  excerpt: 'A brief description...',
  content: '<p>Blog content...</p>',
  author: 'David Turnbull',
  publishDate: '2025-01-27',
  thumbnailImage: '/blog-images/my-post-thumbnail.jpg',
  featuredImage: '/blog-images/my-post-featured.jpg',
  seoMeta: {
    metaDescription: 'SEO description...',
    ogImage: '/blog-images/my-post-og.jpg', // Optional custom OG image
  },
  // ... other fields
}
```

### Image Paths
- **Relative paths**: `/blog-images/image.jpg` (stored in `public/blog-images/`)
- **Absolute URLs**: `https://example.com/image.jpg` (external images)

## Image Optimization Tips

1. **Compress Images**: Use tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Use WebP Format**: Better compression than JPG/PNG
   - Convert: `cwebp input.jpg -q 80 -o output.webp`

3. **Responsive Images**: 
   - Thumbnails: 800x400px (2:1 ratio)
   - Featured: 1200x630px (1.9:1 ratio, optimal for social)

4. **File Naming**: Use descriptive, SEO-friendly names
   - ✅ Good: `aws-cost-optimization-guide.jpg`
   - ❌ Bad: `IMG_1234.jpg`

## Where Images Are Displayed

### Blog Listing Page (`/blog`)
- Shows **thumbnail images** on each blog card
- If no thumbnail, shows a gradient placeholder
- Images are lazy-loaded for performance

### Blog Post Page (`/blog/:slug`)
- Shows **featured image** below the title and meta
- Full-width, responsive design
- Optimized for social sharing (Open Graph)

### Social Media Sharing
- Uses `ogImage` if provided
- Falls back to `featuredImage`
- Falls back to `thumbnailImage`
- Final fallback: site logo

## Image Requirements

### Thumbnail Image
- **Aspect Ratio**: 2:1 (recommended)
- **Minimum Size**: 400x200px
- **Maximum Size**: 1600x800px
- **File Size**: < 200KB (optimized)

### Featured Image
- **Aspect Ratio**: 1.9:1 (recommended for social)
- **Minimum Size**: 600x315px
- **Maximum Size**: 2400x1260px
- **File Size**: < 500KB (optimized)

## Example Implementation

```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: 'reduce-aws-bill-without-rewriting-everything',
    title: 'How to Reduce Your AWS Bill Without Rewriting Everything',
    excerpt: 'A practical guide to cutting AWS costs...',
    content: `<h2>Content here...</h2>`,
    author: 'David Turnbull',
    authorRole: 'Founder & AWS Solutions Architect',
    publishDate: '2025-01-27',
    thumbnailImage: '/blog-images/aws-cost-optimization-thumb.jpg',
    featuredImage: '/blog-images/aws-cost-optimization-featured.jpg',
    seoMeta: {
      metaDescription: 'SEO description...',
      ogImage: '/blog-images/aws-cost-optimization-og.jpg', // Optional
    },
    // ... rest of fields
  },
];
```

## Notes

- Images are automatically lazy-loaded on the blog listing page
- Featured images load immediately (eager) on blog post pages
- All images are responsive and scale properly on mobile devices
- Images are included in JSON-LD structured data for SEO
- Open Graph and Twitter Card images are automatically set
