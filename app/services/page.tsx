"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faCode,
  faFingerprint,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/modules/services.module.css";
import "@/app/globals.css";
import Link from "next/link";

export default function DomainServices() {
  const serviceDomains = [
    {
      icon: faWaveSquare,
      title: "Stream Forge",
      slug: "stream-forge",
      desc: "Crafted overlays, alerts, and branding assets to amplify your presence on Twitch, YouTube, and beyond.",
      price: "$150 – $300",
    },
    {
      icon: faPencilRuler,
      title: "Web Design",
      slug: "web-design",
      desc: "Our Web Design service is all about creating visually stunning and user-friendly websites...",
      price: "$250 – $400",
    },
    {
      icon: faCode,
      title: "Web Development",
      slug: "web-development",
      desc: "Our Web Development service is focused on turning your website into a powerful digital asset...",
      price: "$400 – $600",
    },
    {
      icon: faFingerprint,
      title: "Brand Identity",
      slug: "brand-identity",
      desc: "Forging bold logos and cohesive branding systems to resonate with your audience...",
      price: "$250 – $400",
    },
  ];

  return (
    <section className="section" id="domains">
      <div className={styles.forgeContainer}>
        <div className={styles.missionApproach}>
          <h3>Strategic Alignment</h3>
          <p>
            As a solo visionary at Shadowfang Labs, I tailor each mission to
            your project's scope and ambition. Share your objectives, and I’ll
            deliver a precise blueprint of deliverables and timelines, ensuring
            transparency and exceptional craftsmanship.
          </p>
        </div>
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
                <div className={styles.titleParagraph}>
                  <h4 id={`domain-title-${index}`}>{domain.title}</h4>
                  <p>{domain.desc}</p>
                </div>
                <div className={styles.ctaContainer}>
                  <div className={styles.priceTag}>
                    Starts at Price: <strong>{domain.price}</strong>
                  </div>
                  <Link
                    href={`/services/${domain.slug}`}
                    className={styles.btn}
                    aria-label={`Initiate ${domain.title} project`}
                  >
                    Choose Package <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.customPackage}>
  <h3>Need Something Unique?</h3>
  <p>
    Not sure which package is right for you? Mix and match what you need with our custom package builder.
  </p>
  <Link
    href="/services/custom-package"
    className={styles.btnAlt}
    aria-label="Build a custom package"
  >
    Build Your Custom Package <span>→</span>
  </Link>
</div>
      </div>
    </section>
  );
}


