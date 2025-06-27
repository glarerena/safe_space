'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Made with ❤️ by <a href="https://renaglare.dev" target="_blank" rel="noopener noreferrer">renaglare.dev</a> • © 2025 53205
        </p>
      </div>
    </footer>
  );
} 