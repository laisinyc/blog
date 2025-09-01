import React from 'react';
import styles from './loading.module.css';
import { range } from '@/utils';

function Loading() {
  // 创建3个加载占位符
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Loading...
      </h1>

      {range(5).map((index) => (
        <div
          key={index}
          className={`${styles.cardWrapper} ${styles.loading}`}
        >
          <div className={styles.title} />
          <div className={styles.date} />
          <div className={styles.abstract}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading; 