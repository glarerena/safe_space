'use client';

import styles from './FamilyReunificationSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';
import aecfData from '../../data/aecf.json';

export default function FamilyReunificationSection() {
  const { ref, className } = useScrollAnimation('left');

  return (
    <section id="family-reunification" className={styles.familyReunification}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>{aecfData.title}</h2>
          <div className={styles.layout}>
            <div className={styles.textContent}>
              <p className={styles.description}>
                {aecfData.quote}
              </p>
            </div>
            <div className={styles.calloutCard}>
              <div className={styles.calloutContent}>
                <h3>Supporting Underserved Families</h3>
                <ul className={styles.impactList}>
                  <li>Emotional trauma support</li>
                  <li>Financial hardship assistance</li>
                  <li>Educational resources</li>
                  <li>Community connection programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 