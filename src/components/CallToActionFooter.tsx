'use client';

import styles from './CallToActionFooter.module.css';
import { useScrollAnimation } from './useScrollAnimation';
import { useState } from 'react';

export default function CallToActionFooter() {
  const { ref, className } = useScrollAnimation('right');
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookSpeaker = () => {
    const subject = encodeURIComponent('Safe Space Campaign - Speaker Request');
    const body = encodeURIComponent(`Hello Safe Space Campaign Team,

I'm interested in booking a speaker for our organization/community event.

Organization/Event Details:
- Organization/Event Name: 
- Date: 
- Location: 
- Expected Audience Size: 
- Type of Event: (workshop, presentation, community meeting, etc.)

Contact Information:
- Name: 
- Email: 
- Phone: 

Please let me know about availability and any requirements.

Thank you!`);

    const mailtoLink = `mailto:contact.53205@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  const handleContact = () => {
    setShowContactForm(true);
    setIsSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    setIsSubmitted(true);
    setShowContactForm(false);
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
                  onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="_subject" value="Safe Space Campaign - Contact Form" />
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

          {isSubmitted && (
            <div className={styles.successMessage}>
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
