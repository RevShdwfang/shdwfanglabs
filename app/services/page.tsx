'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPalette, faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/modules/services.module.css";
import "@/app/globals.css";

export default function DomainServices() {
  const serviceDomains = [
    {
      icon: faDesktop,
      title: "Stream Forge",
      desc: "Crafted overlays, alerts, and branding assets to amplify your presence on Twitch, YouTube, and beyond.",
    },
    {
      icon: faPalette,
      title: "Legacy Identity",
      desc: "Forging bold logos and cohesive branding systems to resonate with your audience across all platforms.",
    },
    {
      icon: faCode,
      title: "Digital Command UI",
      desc: "Precision-engineered, responsive interfaces blending seamless functionality with visionary aesthetics.",
    },
  ];

  return (
    <section className="section" id="domains">
      <div className={styles.forgeContainer}>
        <div className={styles.row}>
          {serviceDomains.map((domain, index) => (
            <div
              className={`${styles.serviceItem} shadow-dark`}
              key={index}
              role="article"
              aria-labelledby={`domain-title-${index}`}
            >
              <div className={styles.serviceItemInner}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={domain.icon} aria-hidden="true" />
                </div>
                <h4 id={`domain-title-${index}`}>{domain.title}</h4>
                <p>{domain.desc}</p>
                <a href="/contact" className="btn" aria-label={`Initiate ${domain.title} project`}>
                  Launch Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pricingInfo}>
          <h3>Strategic Alignment</h3>
          <p>
            As a solo visionary at Shadowfang Labs, I tailor each mission to your project's scope and ambition.
            Share your objectives, and I’ll deliver a precise blueprint of deliverables and timelines,
            ensuring transparency and exceptional craftsmanship.
          </p>
          <a href="/contact" className="btn" aria-label="Request a strategic quote">
            Secure Your Blueprint
          </a>
        </div>
      </div>
    </section>
  );
}
