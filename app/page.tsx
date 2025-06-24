'use client';

import { useEffect, useState } from "react";
import styles from "@/components/modules/herobanner.module.css"


export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkLightMode = () => {
      setIsLightMode(document.body.classList.contains("light"));
    };

    checkLightMode();

    const observer = new MutationObserver(checkLightMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const imageSrc = isLightMode
    ? "/assets/images/SFLightLogo.png"
    : "/assets/images/SFDarkLogo.png";

  return (
    <section className="home active section" id="home">
      <div className="container">
        <div className="titlerow">
          <div className="home-info padd-15">
            <div className={styles.heroBanner}>
              <div className={styles.heroContent}>
                <img
                  src={imageSrc}
                  alt="From darkness rose Shadowfang Labs"
                  className={styles.heroLogo}
                />
                <div className={styles.heroText}>
                  <h1>
                    <span className={styles.companyTitle}>Shadowfang</span> Labs
                  </h1>
                  <p>Born of shadows built for legacy</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
