# MarkdownCode Component

A reusable React component for displaying markdown content with proper formatting, syntax highlighting, and animations. Perfect for showcasing code snippets, documentation, or any markdown-formatted content within other React components.

## Features

- **Markdown Parsing**: Automatically parses and renders markdown syntax
- **Syntax Highlighting**: Different styling for headings, lists, code blocks, etc.
- **Line Numbers**: Optional line numbering for code blocks
- **Language Badges**: Display language type with customizable badges
- **Responsive Design**: Mobile-friendly layout with proper breakpoints
- **Smooth Animations**: Entrance animations using Framer Motion
- **Customizable**: Easy to integrate and style within other components

## Supported Markdown Elements

- **Headings**: `# H1`, `## H2`, `### H3`, `#### H4`, `##### H5`, `###### H6`
- **Text Formatting**: `**bold**`, `*italic*`
- **Lists**: `- unordered`, `1. ordered`
- **Code**: `` `inline code` ``, ````code blocks````
- **Blockquotes**: `> quoted text`
- **Empty Lines**: Proper spacing and layout

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `''` | The markdown content to display |
| `language` | `string` | `'markdown'` | Language identifier for the badge |
| `title` | `string` | `undefined` | Optional title for the component header |
| `showLineNumbers` | `boolean` | `false` | Whether to show line numbers |
| `className` | `string` | `''` | Additional CSS classes |
| `...props` | `object` | `{}` | Additional props passed to the wrapper |

## Usage

### Basic Usage

```jsx
import MarkdownCode from '@/components/MarkdownCode';

function MyComponent() {
  const markdownContent = `
# Hello World
This is a **bold** and *italic* text.

- List item 1
- List item 2

\`\`\`javascript
console.log("Hello, World!");
\`\`\`
  `;

  return (
    <MarkdownCode 
      content={markdownContent}
      title="Example Markdown"
      language="markdown"
    />
  );
}
```

### With Line Numbers

```jsx
<MarkdownCode 
  content={codeContent}
  language="html"
  title="HTML Code Sample"
  showLineNumbers={true}
/>
```

### Custom Styling

```jsx
<MarkdownCode 
  content={content}
  className="my-custom-class"
  style={{ margin: '2rem 0' }}
/>
```

## Integration Examples

### Inside HtmlFormDemo Component

The component is already integrated into the HtmlFormDemo component to display HTML code samples:

```jsx
// HTML Code Sample
<MarkdownCode 
  content={radioCodeSample}
  language="html"
  title="HTML Code Sample"
  showLineNumbers={true}
  className={styles.codeSample}
/>
```

### In Blog Posts

Perfect for displaying code snippets in blog posts or documentation:

```jsx
<MarkdownCode 
  content={`
# Getting Started
Follow these steps to get started:

1. Install dependencies
2. Run the development server
3. Open your browser

\`\`\`bash
npm install
npm run dev
\`\`\`
  `}
  title="Installation Guide"
  language="markdown"
/>
```

## Styling

The component uses CSS modules with the following key classes:

- `.wrapper` - Main container
- `.header` - Title and language badge section
- `.content` - Content area with line numbers and markdown
- `.lineNumbers` - Line numbering sidebar
- `.markdownContent` - Rendered markdown content
- `.h1` through `.h6` - Heading styles
- `.listItem` - List item styles
- `.inlineCode` - Inline code styling
- `.codeBlock` - Code block styling
- `.blockquote` - Blockquote styling

### Custom Styling

You can override styles by targeting the component's classes:

```css
/* Custom styling for the component */
.my-custom-class .wrapper {
  border: 2px solid #3b82f6;
  border-radius: 1rem;
}

.my-custom-class .header {
  background: #1e293b;
  color: white;
}
```

## Responsive Behavior

- **Desktop**: Full layout with line numbers and spacious padding
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Hidden line numbers, stacked layout, reduced padding

## Dependencies

- **React**: Core React functionality
- **Framer Motion**: Smooth animations and transitions
- **CSS Modules**: Scoped styling

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- CSS custom properties (CSS variables) for theming

## Performance

- Efficient markdown parsing with minimal re-renders
- Optimized animations using Framer Motion
- Responsive design with CSS-only breakpoints

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Screen reader friendly
- Keyboard navigation support

## Examples

See the component in action at `/markdown-demo` route, which showcases various examples including:

- Basic markdown formatting
- HTML code samples
- CSS examples
- JavaScript code snippets

## Future Enhancements

- Syntax highlighting for specific languages
- Copy-to-clipboard functionality
- Collapsible sections
- Search and filter capabilities
- Theme customization options
