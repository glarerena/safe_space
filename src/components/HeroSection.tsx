'use client';

import styles from './HeroSection.module.css';
import { useScrollAnimation } from './useScrollAnimation';
import Image from 'next/image';

export default function HeroSection() {
  const { ref, className } = useScrollAnimation('right');

  const scrollToSafeSleep = () => {
    const safeSleepSection = document.getElementById('safe-sleep');
    if (safeSleepSection) {
      safeSleepSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToBookSpeaker = () => {
    // Scroll to the call-to-action section
    const ctaSection = document.getElementById('call-to-action');
    if (ctaSection) {
      ctaSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className={styles.hero} style={{ backgroundColor: 'var(--background-main)' }}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <Image 
            src="/assets/53205.svg" 
            alt="53205 Logo" 
            width={200} 
            height={80} 
            className={styles.logo}
          />
          <h1 className={styles.title}>
            Empowering Families. Building Community. Healing Through Connection.
          </h1>
          <p className={styles.subtitle}>
            At 53205, we provide trauma-informed, relationship-based programs to support families and individuals.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton} onClick={scrollToSafeSleep}>
              Learn About Safe Sleep
            </button>
            <button className={styles.secondaryButton} onClick={scrollToBookSpeaker}>
              Book a Speaker
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 