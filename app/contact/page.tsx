// Contact Page //
import styles from "@/components/modules/contactform.module.css"

export default function Contact() {
  return (
    <section className="contact active section" id="contact">
        
      <div className="container">
        <div className="titlerow">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
       <div className={styles.row}>
      <form
        className={`${styles.contactForm} ${styles.padd15}`}
        method="POST"
        action="https://formspree.io/f/xldnjqan"
      >
        <div className={styles.row}>
          <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
            <div className={styles.formGroup}>
              <input
                type="email"
                className={styles.formControl}
                placeholder="Email"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Brand Name / Company Name"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Subject"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
            <div className={styles.formGroup}>
              <textarea
                className={styles.formControl}
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
            <button type="submit" className={styles.btn}>Send Message</button>
          </div>
        </div>
      </form>
    </div>
      </div>
    </section>
  );
}