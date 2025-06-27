'use client';

import styles from './CallToActionFooter.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function CallToActionFooter() {
  const { ref, className } = useScrollAnimation('right');

  return (
    <section id="call-to-action" className={styles.callToAction}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>Ready to Make a Difference?</h2>
          <p className={styles.subtitle}>
            Book a speaker for your organization or community event
          </p>
          <button className={styles.ctaButton}>
            Book a Speaker
          </button>
          <div className={styles.smallLinks}>
            <a href="#volunteer" className={styles.smallLink}>Volunteer</a>
            <span className={styles.separator}>•</span>
            <a href="#donate" className={styles.smallLink}>Donate</a>
            <span className={styles.separator}>•</span>
            <a href="#contact" className={styles.smallLink}>Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
} 