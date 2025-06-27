'use client';

import styles from './SouthCarolinaSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function SouthCarolinaSection() {
  const { ref, className } = useScrollAnimation('right');

  return (
    <section id="south-carolina" className={styles.southCarolina} style={{ backgroundColor: 'var(--background-main)' }}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>Why South Carolina?</h2>
          <div className={styles.layout}>
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <h3>1 in 3</h3>
                <p>Children have a parent who has been incarcerated</p>
              </div>
              <div className={styles.statItem}>
                <h3>2x Higher</h3>
                <p>Risk of SIDS for justice-impacted families</p>
              </div>
              <div className={styles.statItem}>
                <h3>50%</h3>
                <p>Reduction in SIDS risk with proper education</p>
              </div>
            </div>
            <div className={styles.textContent}>
              <p>
                South Carolina faces unique challenges with high rates of incarceration 
                and limited access to healthcare education. Our program specifically 
                targets justice-impacted families who often lack access to critical 
                safe sleep information and resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 