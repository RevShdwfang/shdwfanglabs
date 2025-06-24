'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/modules/portfolio.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
  "/assets/images/portfolio/samurai-banner.jpg",
  "/assets/images/portfolio/titanfall_tournament_poster.jpg",
  "/assets/images/portfolio/revgreywolf(official)3.jpg",
  "/assets/images/portfolio/businesscardmockup.jpg",
  "/assets/images/portfolio/revshadowfang.jpg",
  "/assets/images/portfolio/paneldisplay.jpg",
  "/assets/images/portfolio/shdw-banner.jpg",
];

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="titlerow">
          <div className="section-title padd-15">
            <h2>
              <FontAwesomeIcon icon={faBriefcase} /> Portfolio
            </h2>
          </div>
        </div>

        <div className={styles.gridContainer}>
          {images.map((src, index) => {
            const lower = src.toLowerCase();
            let className = "";

            if (lower.includes("banner")) {
              className = styles.wide;
            } else if (lower.includes("poster")) {
              className = styles.tall;
            }

            return (
              <div
                key={index}
                className={`${styles.gridItem} ${className}`}
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  width={600}
                  height={400}
                  className={styles.gridImage}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </div>
            );
          })}
        </div>

        {selectedImage && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={selectedImage}
              alt="Enlarged project"
              width={1200}
              height={800}
              className={styles.lightboxImage}
              style={{ objectFit: "contain" }}
            />
            <span className={styles.close}>&times;</span>
          </div>
        )}
      </div>
    </section>
  );
}
