'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ToggleComponent.module.css';

function ToggleComponent({
  children,
  defaultVisible = false,
  showToggleButton = true,
  toggleText = { show: 'Show Tags', hide: 'Hide Tags' },
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`${styles.toggleContainer} ${className}`}>
      {showToggleButton && (
        <motion.button
          className={styles.toggleButton}
          onClick={toggleVisibility}
          aria-expanded={isVisible}
          aria-controls="toggle-content"
        >
          <span className={styles.toggleText}>
            {isVisible ? toggleText.hide : toggleText.show}
          </span>
          <motion.div
            className={styles.toggleIcon}
            animate={{ rotate: isVisible ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▼
          </motion.div>
        </motion.button>
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            id="toggle-content"
            className={styles.toggleContent}
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ToggleComponent;
