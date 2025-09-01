import React from 'react';
import HtmlFormDemo from '@/components/HtmlFormDemo';
import styles from './demo.module.css';

export default function DemoPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>HTML Form Elements Demo</h1>
        <p className={styles.description}>
          This page demonstrates the interactive HTML form elements component with Framer Motion animations.
        </p>
        <HtmlFormDemo />
      </div>
    </div>
  );
}
