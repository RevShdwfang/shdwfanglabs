'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPalette,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/modules/services.module.css";
import "@/app/globals.css";


export default function Services() {
  const serviceList = [
    {
      icon: faDesktop,
      title: "Stream Assets",
      desc: "Overlays, alerts, and content branding for Twitch, YouTube, and social presence."
    },
    {
      icon: faPalette,
      title: "Brand Identity",
      desc: "From custom logos to full branding systems and social kits, we build identities that resonate.",
    },
    {
      icon: faCode,
      title: "Website UI/UX",
      desc: "Modern, responsive designs that blend usability with aesthetic precision.",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="titlerow">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>

        <div className={styles.row}>
          {serviceList.map((service, index) => (
            <div className={`${styles.serviceItem} ${styles.padd15}`} key={index}>
              <div className={styles.serviceItemInner}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <div className={`${styles.price} ${styles.servicePrice}`}>
                  {/* Future price info can go here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
