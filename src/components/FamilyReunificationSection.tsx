'use client';

import styles from './FamilyReunificationSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function FamilyReunificationSection() {
  const { ref, className } = useScrollAnimation('left');

  return (
    <section id="family-reunification" className={styles.familyReunification}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>🧡 Supporting Underserved Families with Infant Wellness</h2>
          <div className={styles.layout}>
            <div className={styles.textContent}>
              <p className={styles.description}>
                Empowering Parents, Protecting Babies
              </p>
              <p className={styles.mainText}>
                Many families across South Carolina face challenges like financial hardship, housing instability, or limited access to health education. These invisible burdens can make it harder to keep babies safe—especially during sleep. Our mission is to support these families through community-driven education and wellness resources, so every child has a safe, healthy start in life.
              </p>
              <div className={styles.helpingFamilies}>
                <h3>Helping Families Thrive</h3>
                <ul>
                  <li>Safe sleep education & awareness</li>
                  <li>Infant wellness and parenting resources</li>
                  <li>Support for families experiencing hardship</li>
                  <li>Community health & connection programs</li>
                </ul>
              </div>
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