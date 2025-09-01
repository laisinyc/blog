'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './MarkdownCode.module.css';

function MarkdownCode({
  content,
  language = 'markdown',
  title,
  showLineNumbers = false,
  className = '',
  ...props
}) {
  // Parse markdown content and convert to HTML-like structure
  const parseMarkdown = (text) => {
    if (!text) return [];

    const lines = text.split('\n');
    const parsedLines = [];

    lines.forEach((line, index) => {
      let parsedLine = line;
      let lineType = 'text';

      // Parse different markdown elements
      if (line.startsWith('# ')) {
        parsedLine = line.substring(2);
        lineType = 'h1';
      } else if (line.startsWith('## ')) {
        parsedLine = line.substring(3);
        lineType = 'h2';
      } else if (line.startsWith('### ')) {
        parsedLine = line.substring(4);
        lineType = 'h3';
      } else if (line.startsWith('#### ')) {
        parsedLine = line.substring(5);
        lineType = 'h4';
      } else if (line.startsWith('##### ')) {
        parsedLine = line.substring(6);
        lineType = 'h5';
      } else if (line.startsWith('###### ')) {
        parsedLine = line.substring(7);
        lineType = 'h6';
      } else if (line.startsWith('- ')) {
        parsedLine = line.substring(2);
        lineType = 'list-item';
      } else if (line.startsWith('1. ')) {
        parsedLine = line.substring(3);
        lineType = 'ordered-list-item';
      } else if (line.startsWith('```')) {
        lineType = 'code-block';
      } else if (line.startsWith('`') && line.endsWith('`')) {
        parsedLine = line.substring(1, line.length - 1);
        lineType = 'inline-code';
      } else if (line.startsWith('> ')) {
        parsedLine = line.substring(2);
        lineType = 'blockquote';
      } else if (line.startsWith('**') && line.endsWith('**')) {
        parsedLine = line.substring(2, line.length - 2);
        lineType = 'bold';
      } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        parsedLine = line.substring(1, line.length - 1);
        lineType = 'italic';
      } else if (line.trim() === '') {
        lineType = 'empty';
      }

      parsedLines.push({
        content: parsedLine,
        type: lineType,
        originalLine: line,
        lineNumber: index + 1
      });
    });

    return parsedLines;
  };

  const parsedContent = parseMarkdown(content);

  const renderLine = (line, index) => {
    const lineKey = `${index}-${line.lineNumber}`;

    switch (line.type) {
      case 'h1':
        return (
          <motion.h1
            key={lineKey}
            className={styles.h1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.h1>
        );

      case 'h2':
        return (
          <motion.h2
            key={lineKey}
            className={styles.h2}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.h2>
        );

      case 'h3':
        return (
          <motion.h3
            key={lineKey}
            className={styles.h3}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.h3>
        );

      case 'h4':
        return (
          <motion.h4
            key={lineKey}
            className={styles.h4}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.h4>
        );

      case 'h5':
        return (
          <motion.h5
            key={lineKey}
            className={styles.h5}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.h5>
        );

      case 'h6':
        return (
          <motion.h6
            key={lineKey}
            className={styles.h6}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.h6>
        );

      case 'list-item':
        return (
          <motion.li
            key={lineKey}
            className={styles.listItem}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.li>
        );

      case 'ordered-list-item':
        return (
          <motion.li
            key={lineKey}
            className={styles.orderedListItem}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.li>
        );

      case 'inline-code':
        return (
          <motion.code
            key={lineKey}
            className={styles.inlineCode}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.code>
        );

      case 'code-block':
        return (
          <motion.div
            key={lineKey}
            className={styles.codeBlock}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.div>
        );

      case 'blockquote':
        return (
          <motion.blockquote
            key={lineKey}
            className={styles.blockquote}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.blockquote>
        );

      case 'bold':
        return (
          <motion.strong
            key={lineKey}
            className={styles.bold}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.strong>
        );

      case 'italic':
        return (
          <motion.em
            key={lineKey}
            className={styles.italic}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.em>
        );

      case 'empty':
        return <div key={lineKey} className={styles.emptyLine}>&nbsp;</div>;

      default:
        return (
          <motion.p
            key={lineKey}
            className={styles.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {line.content}
          </motion.p>
        );
    }
  };

  return (
    <motion.div
      className={`${styles.wrapper} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {title && (
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={styles.title}>{title}</h3>
          {language && (
            <span className={styles.language}>{language}</span>
          )}
        </motion.div>
      )}

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {showLineNumbers && (
          <div className={styles.lineNumbers}>
            {parsedContent.map((_, index) => (
              <div key={index} className={styles.lineNumber}>
                {index + 1}
              </div>
            ))}
          </div>
        )}

        <div className={styles.markdownContent}>
          {parsedContent.map((line, index) => renderLine(line, index))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MarkdownCode;
