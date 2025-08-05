"use client";

import styles from "@/components/modules/about.module.css";

const blocks = [
  {
    title: (
      <>
        Meet the <span className={styles.sigilHighlight}>Forgemaster</span>
      </>
    ),
    text: [
      `I’m the heart behind Shadowfang Labs—a solo Veteran-owned studio where storytelling, tech, and identity collide. My mission? To equip creators like you with killer tools, a standout presence, and crystal-clear branding to leave your mark on the world.`,
    ],
  },
  {
    subtitle: "Our Epic Mission",
    text: [
      `Born from the shadows, built for greatness—Shadowfang Labs is my creative forge, shaped by grit, focus, and design flair. I’m here to supercharge your brand with identity-driven visuals, cutting-edge tech, and smart innovations that outlast trends.`,
      `Every pixel and line of code is packed with purpose. I craft experiences that grow with you—perfect for that first stream or your next big campaign.`,
      `This isn’t just a studio—it’s a rallying cry to rise up, build bold, and create something epic together!`,
    ],
  },
  {
    subtitle: "Born in the Shadows",
    text: [
      `This journey kicked off in silence, through tough times—a digital escape that turned into my passion. What began as healing became my craft. Now, every brand I build echoes that path: clarity carved from chaos, strength forged in the storm.`,
    ],
  },
];

export default function LegacyDomain() {
 return (
  <section className={styles.legacyForge} id="legacy">
    <div className={styles.forgeContainer}>
      <div className={styles.storyVault}>

        {blocks.map((block, index) => (
          <div className={styles.sectionRow} key={index}>
            <div className={styles.labelBlock}>
              {block.title || block.subtitle}
            </div>
            <div className={styles.textBlock}>
              {block.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.sectionRow}>
          <div className={styles.labelBlock}>The Forgemaster’s Code</div>
          <div className={styles.textBlock}>
            <ul className={styles.creedList}>
              <li><strong>Focus:</strong> Every move is sharp and intentional.</li>
              <li><strong>Grit:</strong> Strength rises from every challenge.</li>
              <li><strong>Depth:</strong> Every detail tells your story.</li>
              <li><strong>Support:</strong> I’m in your corner, boosting your vision.</li>
              <li><strong>Impact:</strong> We create for the long haul, not just today.</li>
            </ul>
          </div>
        </div>

        <div className={styles.callToForge}>
          <a
            href="/contact"
            className={styles.forgeCommand}
            aria-label="Forge your legacy with Shadowfang Labs"
          >
            Let’s Build Something Epic
          </a>
        </div>
      </div>
    </div>
  </section>
);

}
