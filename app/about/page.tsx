'use client';

import styles from '@/components/modules/about.module.css';
import PageHeader from '@/components/modules/PageHeader/PageHeader';

export default function LegacyDomain() {
  return (
    <section className={styles.legacyForge} id="legacy">
      <div className={styles.forgeContainer}>
        {/* Cinematic Header */}

        <div className={styles.storyVault}>
          {/* Lore-Based Intro */}
          <div className={styles.storyBlock}>
            <h2 className={styles.blockTitle}>
              Revenant <span className={styles.sigilHighlight}>Shadowfang</span>
            </h2>
            <p className={styles.blockText}>
              I am the founder and forgemaster of Shadowfang Labs—a Veteran-owned studio where storytelling, technology, and identity converge. My goal is simple: to arm creators with the tools, presence, and aesthetic clarity needed to leave a lasting mark.
            </p>
          </div>

          {/* Mission */}
          <div className={styles.storyBlock}>
            <h3 className={styles.blockSubheading}>The Sacred Mission</h3>
            <div className={styles.missionScroll}>
              <p>
                Born of shadows, built for legacy—Shadowfang Labs is a creative forge crafted through adversity, discipline, and design. I empower creators through identity-first branding, immersive technology, and strategic innovation that transcends trends.
              </p>
              <p>
                Every pixel, every line of code, is intentional. I build systems, not just designs—experiences that evolve with each creator's path, from first stream to final campaign.
              </p>
              <p>
                Shadowfang Labs is more than a studio—it’s a call to rise, to build boldly, and to craft something unforgettable.
              </p>
            </div>
          </div>

          {/* Origin */}
          <div className={styles.storyBlock}>
            <h3 className={styles.blockSubheading}>The Birth in Shadows</h3>
            <p className={styles.blockText}>
              This began in silence, in struggle—a digital lifeline during my hardest battles. What started as therapy became mastery. Now, each brand I craft carries the imprint of that journey: clarity through chaos, structure born from storm.
            </p>
          </div>

          {/* Core Values */}
          <div className={styles.storyBlock}>
            <h3 className={styles.blockSubheading}>The Forgemaster’s Creed</h3>
            <ul className={styles.creedList}>
              <li><strong>Discipline:</strong> Strike with purpose and precision.</li>
              <li><strong>Resilience:</strong> Temper strength in the fire of struggle.</li>
              <li><strong>Immersion:</strong> Weave every detail into a saga.</li>
              <li><strong>Loyalty:</strong> Honor the craft and uplift the creator.</li>
              <li><strong>Legacy:</strong> Craft for eternity, not a moment.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className={styles.callToForge}>
            <a
              href="/contact"
              className={styles.forgeCommand}
              aria-label="Forge your legacy with Shadowfang Labs"
            >
              Ignite Your Legacy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
