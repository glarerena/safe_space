'use client';

import styles from './HeroSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function HeroSection() {
  const { ref, className } = useScrollAnimation('right');

  return (
    <section id="hero" className={styles.hero} style={{ backgroundColor: 'var(--background-main)' }}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h1 className={styles.title}>
            Every Baby Deserves a Safe Start.
          </h1>
          <p className={styles.subtitle}>
            Every Parent Deserves a Second Chance.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Learn About Safe Sleep
            </button>
            <button className={styles.secondaryButton}>
              Book a Speaker
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 