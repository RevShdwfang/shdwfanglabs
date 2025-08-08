// No "use client" needed here

import Link from "next/link";
import styles from "@/styles/modules/about.module.css";

type Block = {
  heading: React.ReactNode;
  body: string[];
  id?: string;
};

const blocks: Block[] = [
  {
    heading: (
      <>
        Meet the{" "}
        <span className={styles.sigilHighlight}>Founder & Designer</span>
      </>
    ),
    body: [
      `I’m a self-taught graphic designer working toward full-time. Shadowfang Labs grew out of a turning point when I chose to commit instead of quit. The name “Shadowfang” comes from a wolf that’s appeared in my dreams since childhood—a personal symbol of hope, resilience, and direction.`,
    ],
    id: "founder",
  },
  {
    heading: "Mission & Approach",
    body: [
      `Identity-first design, clean execution, and durable systems. I help creators and small teams translate who they are into brand visuals, websites, and stream assets that scale.`,
      `Every detail serves a purpose—from typography and color to code and content—so what we build looks sharp and works hard.`,
    ],
    id: "mission",
  },
];

export default function LegacyDomain() {
  return (
    <section
      className={styles.legacyForge}
      id="legacy"
      aria-labelledby="legacy-heading"
    >
      <div className={styles.forgeContainer}>
        <div className={styles.storyVault}>
          {blocks.map((block) => (
            <section
              className={styles.sectionRow}
              key={block.id ?? String(block.heading)}
              aria-labelledby={`${block.id}-heading`}
            >
              <h2 className={styles.labelBlock} id={`${block.id}-heading`}>
                {block.heading}
              </h2>
              <div className={styles.textBlock}>
                {block.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className={styles.sectionRow} aria-labelledby="principles-heading">
            <h2 className={styles.labelBlock} id="principles-heading">
              Core Principles
            </h2>
            <div className={styles.textBlock}>
              <ul className={styles.creedList}>
                <li><strong>Focus:</strong> Intentional choices, no filler.</li>
                <li><strong>Resilience:</strong> Turn setbacks into structure.</li>
                <li><strong>Craft:</strong> Details that communicate clearly.</li>
                <li><strong>Partnership:</strong> I’m in your corner, end to end.</li>
                <li><strong>Longevity:</strong> Built to evolve, not expire.</li>
              </ul>
            </div>
          </section>

          <div className={styles.callToForge}>
            <Link href="/contact" className={styles.forgeCommand}>
              Let’s Build Something That Lasts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
