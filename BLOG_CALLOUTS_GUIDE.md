# Blog Call-Outs Guide

## Overview
Call-outs are styled boxes that help highlight important information, tips, warnings, or success messages in your blog posts. They make content more engaging and help readers quickly identify key information.

## Available Call-Out Types

### 1. Info Call-Out (`callout-info`)
Use for general information or explanations.

**HTML:**
```html
<div class="callout callout-info">
  <span class="callout-title">Important Information</span>
  <p>Your informative content here.</p>
</div>
```

### 2. Tip Call-Out (`callout-tip`)
Use for helpful tips, best practices, or recommendations.

**HTML:**
```html
<div class="callout callout-tip">
  <span class="callout-title">Pro Tip</span>
  <p>Your tip content here.</p>
</div>
```

### 3. Warning Call-Out (`callout-warning`)
Use for warnings, cautions, or important things to avoid.

**HTML:**
```html
<div class="callout callout-warning">
  <span class="callout-title">Warning</span>
  <p>Your warning content here.</p>
</div>
```

### 4. Success Call-Out (`callout-success`)
Use for positive outcomes, achievements, or confirmations.

**HTML:**
```html
<div class="callout callout-success">
  <span class="callout-title">Success</span>
  <p>Your success message here.</p>
</div>
```

## Usage Examples

### Basic Call-Out (No Title)
```html
<div class="callout callout-info">
  <p>This is a simple informational call-out without a title.</p>
</div>
```

### Call-Out with Title
```html
<div class="callout callout-tip">
  <span class="callout-title">Best Practice</span>
  <p>Always tag your AWS resources with Environment, Application, Owner, and CostCentre tags.</p>
</div>
```

### Call-Out with Multiple Paragraphs
```html
<div class="callout callout-warning">
  <span class="callout-title">Important Security Note</span>
  <p>Never share your AWS access keys publicly.</p>
  <p>Always use IAM roles and least-privilege principles.</p>
</div>
```

### Call-Out with Lists
```html
<div class="callout callout-success">
  <span class="callout-title">Quick Wins Achieved</span>
  <ul>
    <li>Reduced EC2 costs by 30%</li>
    <li>Eliminated unused S3 buckets</li>
    <li>Implemented budget alerts</li>
  </ul>
</div>
```

## Visual Design

- **Info**: Blue theme with ℹ️ icon
- **Tip**: Yellow/amber theme with 💡 icon
- **Warning**: Red theme with ⚠️ icon
- **Success**: Green theme with ✅ icon

All call-outs feature:
- Glass morphism effect (backdrop blur)
- Left border accent
- Rounded corners
- Icon indicator
- Responsive design

## Adding to Blog Posts

Simply include the HTML structure in your blog post's `content` field in `src/data/blogPosts.ts`:

```typescript
content: `
  <h2>Your Heading</h2>
  <p>Regular paragraph content.</p>
  
  <div class="callout callout-tip">
    <span class="callout-title">Pro Tip</span>
    <p>Your highlighted tip goes here.</p>
  </div>
  
  <p>More regular content.</p>
`
```

## Notes

- The `callout-title` class is optional - you can omit it if you don't want a title
- Call-outs work with any HTML content (paragraphs, lists, etc.)
- They automatically have proper spacing and styling
- The icons are emoji-based for simplicity and compatibility
