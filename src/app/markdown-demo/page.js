import React from 'react';
import MarkdownCode from '@/components/MarkdownCode';
import styles from './markdown-demo.module.css';

export default function MarkdownDemoPage() {
  const markdownExamples = [
    {
      title: 'Basic Markdown',
      language: 'markdown',
      content: `# Main Heading
## Sub Heading
### Section Heading

This is a **bold text** and this is *italic text*.

- List item 1
- List item 2
- List item 3

1. Ordered item 1
2. Ordered item 2
3. Ordered item 3

> This is a blockquote with some important information.

Here's some \`inline code\` for you.

\`\`\`
// Code block example
function hello() {
  console.log("Hello, World!");
}
\`\`\``
    },
    {
      title: 'HTML Code',
      language: 'html',
      content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a <strong>paragraph</strong> with <em>emphasis</em>.</p>
    
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
    </ul>
    
    <button onclick="alert('Hello!')">Click me</button>
</body>
</html>`
    },
    {
      title: 'CSS Example',
      language: 'css',
      content: `/* CSS Styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
}`
    },
    {
      title: 'JavaScript Code',
      language: 'javascript',
      content: `// JavaScript Example
class Calculator {
    constructor() {
        this.history = [];
    }
    
    add(a, b) {
        const result = a + b;
        this.history.push(\`\${a} + \${b} = \${result}\`);
        return result;
    }
    
    subtract(a, b) {
        const result = a - b;
        this.history.push(\`\${a} - \${b} = \${result}\`);
        return result;
    }
    
    getHistory() {
        return this.history;
    }
}

// Usage
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.getHistory());`
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>MarkdownCode Component Demo</h1>
        <p className={styles.description}>
          This page demonstrates the MarkdownCode component with various examples of markdown content,
          HTML, CSS, and JavaScript code snippets.
        </p>

        <div className={styles.examples}>
          {markdownExamples.map((example, index) => (
            <div key={index} className={styles.example}>
              <MarkdownCode
                content={example.content}
                language={example.language}
                title={example.title}
                showLineNumbers={true}
              />
            </div>
          ))}
        </div>

        <div className={styles.features}>
          <h2>Component Features</h2>
          <ul>
            <li><strong>Syntax Highlighting:</strong> Different styling for various markdown elements</li>
            <li><strong>Line Numbers:</strong> Optional line numbering for code blocks</li>
            <li><strong>Language Support:</strong> Display language badges for different code types</li>
            <li><strong>Responsive Design:</strong> Mobile-friendly layout with proper breakpoints</li>
            <li><strong>Animations:</strong> Smooth entrance animations using Framer Motion</li>
            <li><strong>Customizable:</strong> Easy to integrate into other components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
