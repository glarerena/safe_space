'use client';

import styles from './FamilyReunificationSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function FamilyReunificationSection() {
  const { ref, className } = useScrollAnimation('left');

  return (
    <section id="family-reunification" className={styles.familyReunification}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>Family Reunification & Education</h2>
          <div className={styles.layout}>
            <div className={styles.textContent}>
              <p>
                Our comprehensive approach addresses not just safe sleep education, but the 
                broader challenges facing justice-impacted families. We believe that stronger 
                families create safer environments for children to thrive.
              </p>
            </div>
            <div className={styles.calloutCard}>
              <div className={styles.calloutStat}>
                <h3>85%</h3>
                <p>Of families report improved parenting confidence after our programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 