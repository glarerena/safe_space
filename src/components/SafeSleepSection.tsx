'use client';

import styles from './SafeSleepSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';
import aapData from '../../data/aap.json';
import cdcData from '../../data/cdc.json';
import scStatsData from '../../data/sc_stats.json';

export default function SafeSleepSection() {
  const { ref, className } = useScrollAnimation('left');

  const downloadCribCard = () => {
    // Create crib card content using the JSON data
    const cribCardContent = `
SAFE SLEEP CRIB CARD
====================

${aapData.title}
${aapData.source}

${aapData.importance}

KEY SAFE SLEEP GUIDELINES:
• Always place babies on their back to sleep
• Use a firm, flat sleep surface in a safety-approved crib
• Keep the sleep area free of soft objects and loose bedding
• Share room but not bed with your baby
• Avoid overheating and head covering
• Breastfeed if possible
• Offer a pacifier at nap time and bedtime
• Avoid smoke exposure, alcohol, and illicit drugs
• Get regular prenatal care
• Immunize your baby

IMPORTANT STATISTICS:
• ${cdcData.stats.total.toLocaleString()} babies lost in 2022 due to unsafe sleep
• ${scStatsData.estimated_rate} - South Carolina Infant Mortality Rate
• ${scStatsData.quote}

SOUTH CAROLINA FOCUS:
${scStatsData.summary.join('\n')}

${scStatsData.attribution}

For more information and support, visit Safe Space Campaign by 53205.
    `.trim();

    // Create a blob and download link
    const blob = new Blob([cribCardContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'safe-sleep-crib-card.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="safe-sleep" className={styles.safeSleep} style={{ backgroundColor: 'var(--accent-soft-blue)' }}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>What Is Safe Sleep?</h2>
          <p className={styles.description}>
            {aapData.importance}
          </p>
          
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{cdcData.stats.total.toLocaleString()}</span>
              <span className={styles.statLabel}>Babies lost in 2022</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{scStatsData.estimated_rate}</span>
              <span className={styles.statLabel}>SC Infant Mortality Rate</span>
            </div>
          </div>

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

          <div className={styles.quoteContainer}>
            <p className={styles.quote}>{scStatsData.quote}</p>
          </div>

          <button className={styles.downloadButton} onClick={downloadCribCard}>
            Download Crib Card
          </button>
        </div>
      </div>
    </section>
  );
} 