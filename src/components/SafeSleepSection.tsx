'use client';

import styles from './SafeSleepSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function SafeSleepSection() {
  const { ref, className } = useScrollAnimation('left');

  return (
    <section id="safe-sleep" className={styles.safeSleep} style={{ backgroundColor: 'var(--accent-soft-blue)' }}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>What Is Safe Sleep?</h2>
          <p className={styles.description}>
            Safe sleep practices can reduce the risk of Sudden Infant Death Syndrome (SIDS) 
            and other sleep-related infant deaths by up to 50%. Our program provides 
            evidence-based education to help families create the safest possible sleep 
            environment for their babies.
          </p>
          <div className={styles.bulletPoints}>
            <div className={styles.bulletPoint}>
              <span className={styles.bulletIcon}>🛏️</span>
              <span>Always place babies on their back to sleep</span>
            </div>
            <div className={styles.bulletPoint}>
              <span className={styles.bulletIcon}>🏠</span>
              <span>Use a firm, flat sleep surface in a safety-approved crib</span>
            </div>
            <div className={styles.bulletPoint}>
              <span className={styles.bulletIcon}>🧸</span>
              <span>Keep the sleep area free of soft objects and loose bedding</span>
            </div>
          </div>
          <button className={styles.downloadButton}>
            Download Crib Card
          </button>
        </div>
      </div>
    </section>
  );
} 