'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past the top
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.container} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.logo} onClick={scrollToFooter}>
        <h2>Safe Space</h2>
        <span>53205</span>
      </div>
      
      <div className={styles.navLinks}>
        <button onClick={() => scrollToSection('safe-sleep')}>Safe Sleep</button>
        <button onClick={() => scrollToSection('south-carolina')}>Why SC</button>
        <button onClick={() => scrollToSection('family-reunification')}>Family</button>
        <button onClick={() => scrollToSection('call-to-action')}>Get Involved</button>
      </div>
    </nav>
  );
} 