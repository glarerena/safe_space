'use client';

import styles from './FamilyReunificationSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function FamilyReunificationSection() {
  const { ref, className } = useScrollAnimation('left');

  return (
    <section id="family-reunification" className={styles.familyReunification}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>🧡 Parent & Family Education</h2>
          <div className={styles.layout}>
            <div className={styles.textContent}>
              <p className={styles.description}>
                Building Healthy Communication & Strong Family Bonds
              </p>
              <p className={styles.mainText}>
                Our trauma-informed, relationship-based programs focus on parenting classes that build healthy communication and strong family bonds. We provide family workshops on child development and effective parenting strategies in safe, supportive learning environments.
              </p>
              <div className={styles.helpingFamilies}>
                <h3>Our Family Services</h3>
                <ul>
                  <li>Parenting classes focused on building healthy communication</li>
                  <li>Family workshops on child development</li>
                  <li>Effective parenting strategies</li>
                  <li>Facilitated peer support groups for parents and caregivers</li>
                </ul>
              </div>
            </div>
            <div className={styles.calloutCard}>
              <div className={styles.calloutContent}>
                <h3>Life Skills Training</h3>
                <ul className={styles.impactList}>
                  <li>Botvin Life Skills Program</li>
                  <li>Decision-making & stress management</li>
                  <li>Communication skills</li>
                  <li>Substance abuse & violence prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 