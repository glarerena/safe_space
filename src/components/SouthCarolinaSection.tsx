'use client';

import styles from './SouthCarolinaSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';

export default function SouthCarolinaSection() {
  const { ref, className } = useScrollAnimation('right');

  return (
    <section id="south-carolina" className={styles.southCarolina} style={{ backgroundColor: 'var(--background-main)' }}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>Community Presentations & Consulting</h2>
          <div className={styles.layout}>
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <h3>Family Health</h3>
                <p>Engaging presentations on family wellness and parenting</p>
              </div>
              <div className={styles.statItem}>
                <h3>Prevention</h3>
                <p>Substance abuse and violence prevention programming</p>
              </div>
              <div className={styles.statItem}>
                <h3>Botvin Life Skills</h3>
                <p>Evidence-based curriculum for schools and organizations</p>
              </div>
            </div>
            <div className={styles.textContent}>
              <p>
                We provide professional consulting services to support family-centered program development and community engagement. Our workshops are tailored for schools, organizations, and community groups throughout South Carolina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 