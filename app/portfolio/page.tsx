'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/@/styles/modules/portfolio.module.css";

export default function EchoGallery() {
  const [selectedArtifact, setSelectedArtifact] = useState<string | null>(null);

  const artifacts = [
    {
      src: "/assets/images/portfolio/samurai-banner.jpg",
      alt: "Samurai Command Banner",
      type: "banner",
    },
    {
      src: "/assets/images/portfolio/titanfall_tournament_poster.jpg",
      alt: "Titanfall Tournament Directive",
      type: "poster",
    },
    {
      src: "/assets/images/portfolio/revgreywolf.jpg",
      alt: "Greywolf Legacy Visual",
      type: "standard",
    },
    {
      src: "/assets/images/portfolio/businesscardmockup.jpg",
      alt: "Identity Card Prototype",
      type: "standard",
    },
    {
      src: "/assets/images/portfolio/paneldisplay.jpg",
      alt: "Command Panel Interface",
      type: "standard",
    },
    {
      src: "/assets/images/portfolio/shdw-banner.jpg",
      alt: "Shadow Domain Banner",
      type: "banner",
    },
  ];

  return (
    <section className="section" id="gallery">
      <div className={styles.forgeContainer}>

        <div className={styles.gridContainer}>
          {artifacts.map((artifact, index) => {
            const className = artifact.type === "banner" ? styles.wide : artifact.type === "poster" ? styles.tall : "";

            return (
              <div
                key={index}
                className={`${styles.gridItem} ${className}`}
                onClick={() => setSelectedArtifact(artifact.src)}
                role="button"
                tabIndex={0}
                aria-label={`View ${artifact.alt}`}
                onKeyDown={(e) => e.key === "Enter" && setSelectedArtifact(artifact.src)}
              >
                <Image
                  src={artifact.src}
                  alt={artifact.alt}
                  width={600}
                  height={400}
                  className={styles.gridImage}
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.gridOverlay}>
                  <span>Access Artifact</span>
                </div>
              </div>
            );
          })}
        </div>

        {selectedArtifact && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedArtifact(null)}
            role="dialog"
            aria-label="Artifact viewer"
          >
            <Image
              src={selectedArtifact}
              alt="Enlarged artifact display"
              width={1200}
              height={800}
              className={styles.lightboxImage}
              style={{ objectFit: "contain" }}
            />
            <span
              className={styles.close}
              onClick={() => setSelectedArtifact(null)}
              role="button"
              tabIndex={0}
              aria-label="Close artifact viewer"
              onKeyDown={(e) => e.key === "Enter" && setSelectedArtifact(null)}
            >
              &times;
            </span>
          </div>
        )}
        </div>
    </section>
  );
}


