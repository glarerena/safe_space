'use client';

import styles from './CallToActionFooter.module.css';
import { useScrollAnimation } from './useScrollAnimation';
import { useState } from 'react';

export default function CallToActionFooter() {
  const { ref, className } = useScrollAnimation('right');
  const [showContactForm, setShowContactForm] = useState(false);

  const handleBookSpeaker = () => {
    // Download the speaker profile PDF
    const link = document.createElement('a');
    link.href = '/myeshia-bates-speaker-profile.txt';
    link.download = 'Myeshia-Bates-Speaker-Profile.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    setShowContactForm(true);
  };

  return (
    <section id="call-to-action" className={styles.callToAction}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${className}`}>
          <h2 className={styles.title}>Ready to Make a Difference?</h2>
          <p className={styles.subtitle}>
            Book a speaker for your organization or community event
          </p>
          <button className={styles.ctaButton} onClick={handleBookSpeaker}>
            Book a Speaker
          </button>
          <div className={styles.smallLinks}>
            <button className={styles.smallLink} onClick={handleContact}>
              Contact
            </button>
          </div>

          {showContactForm && (
            <div className={styles.contactFormOverlay}>
              <div className={styles.contactForm}>
                <h3>Contact Us</h3>
                <form
                  action="https://formspree.io/f/xvgrddjp"
                  method="POST"
                >
                  <input type="hidden" name="_subject" value="Safe Space Campaign - Contact Form" />
                  <input type="hidden" name="_next" value="https://safe-space-campaign.vercel.app" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={styles.formTextarea}
                    ></textarea>
                  </div>

                  <div className={styles.formButtons}>
                    <button type="submit" className={styles.submitButton}>
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className={styles.cancelButton}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
