'use client';
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Card from '@/components/Card';
import styles from './BoxModelDemo.module.css';

function BoxModelDemo() {
  const [boxModel, setBoxModel] = React.useState('content-box');
  const [padding, setPadding] = React.useState(20);
  const [border, setBorder] = React.useState(10);
  const [margin, setMargin] = React.useState(15);

  const boxVariants = {
    'content-box': {
      width: 200 + (padding * 2) + (border * 2),
      height: 200 + (padding * 2) + (border * 2),
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    'border-box': {
      width: 200,
      height: 200,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const contentVariants = {
    'content-box': {
      width: 200,
      height: 200,
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    'border-box': {
      width: 200 - (padding * 2) - (border * 2),
      height: 200 - (padding * 2) - (border * 2),
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <Card as="section" className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.title}>CSS Box Model Comparison</h3>
        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label className={styles.label}>Box Model:</label>
            <div className={styles.toggle}>
              <button
                className={clsx(styles.toggleBtn, {
                  [styles.active]: boxModel === 'content-box'
                })}
                onClick={() => setBoxModel('content-box')}
              >
                content-box
              </button>
              <button
                className={clsx(styles.toggleBtn, {
                  [styles.active]: boxModel === 'border-box'
                })}
                onClick={() => setBoxModel('border-box')}
              >
                border-box
              </button>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <label className={styles.label}>Padding: {padding}px</label>
            <input
              type="range"
              min="0"
              max="40"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles.controlGroup}>
            <label className={styles.label}>Border: {border}px</label>
            <input
              type="range"
              min="0"
              max="30"
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles.controlGroup}>
            <label className={styles.label}>Margin: {margin}px</label>
            <input
              type="range"
              min="0"
              max="40"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className={styles.slider}
            />
          </div>
        </div>
      </header>

      <div className={styles.demoArea}>
        <div className={styles.boxContainer}>
          <motion.div
            className={styles.box}
            style={{
              boxSizing: boxModel,
              padding: `${padding}px`,
              border: `${border}px solid #3b82f6`,
              margin: `${margin}px`,
            }}
            variants={boxVariants}
            animate={boxModel}
            layout
          >
            <motion.div
              className={styles.content}
              variants={contentVariants}
              animate={boxModel}
              layout
            >
              <span className={styles.contentText}>Content</span>
              <span className={styles.dimensions}>
                {boxModel === 'content-box' ? '200×200' : `${200 - (padding * 2) - (border * 2)}×${200 - (padding * 2) - (border * 2)}`}
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={clsx(styles.legendBox, styles.contentBox)}></div>
            <span>Content</span>
          </div>
          <div className={styles.legendItem}>
            <div className={clsx(styles.legendBox, styles.paddingBox)}></div>
            <span>Padding</span>
          </div>
          <div className={styles.legendItem}>
            <div className={clsx(styles.legendBox, styles.borderBox)}></div>
            <span>Border</span>
          </div>
          <div className={styles.legendItem}>
            <div className={clsx(styles.legendBox, styles.marginBox)}></div>
            <span>Margin</span>
          </div>
        </div>
      </div>

      {/* <div className={styles.explanation}>
        <h4>How it works:</h4>
        <ul>
          <li>
            <strong>content-box:</strong> Padding and border are added to the specified width/height,
            making the total box larger than the content area.
          </li>
          <li>
            <strong>border-box:</strong> Padding and border are included within the specified width/height,
            making the content area smaller to accommodate them.
          </li>
        </ul>
        <div className={styles.codeExample}>
          <code>
            {`box-sizing: ${boxModel};`}
          </code>
        </div>
      </div> */}
    </Card>
  );
}

export default BoxModelDemo; 