'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/modules/about.module.css";



export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="titlerow">
          <div className="section-title">
            <h2>
              About Me
            </h2>
          </div>
        </div>

        <section className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.intro}>
              <h2 className={styles.heading}>
                Meet <span className={styles.highlight}>Revenant Shadowfang</span>
              </h2>
              <p className={styles.description}>
                I'm a self-taught developer and designer. Shadowfang Labs was forged from personal adversity and now stands as a symbol of resilience, creativity, and identity. I specialize in bold brand visuals — from logos and web design to stream overlays — all driven by purpose and legacy.
              </p>
            </div>

            <div className={styles.ctaBlock}>
              <a href="/contact" className={styles.ctaButton}>
                Hire Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
