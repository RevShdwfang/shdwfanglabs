'use client';

import Link from 'next/link';
import styles from '@/styles/servicePage.module.css';

type Package = {
  [x: string]: any;
  name: string;
  subtitle: string;
  price: string;
  features: string[];
};

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  subtitle: string;
  packages: Package[];
  process: string[];
  faq: FAQ[];
  currentSlug: string;
};

const allServices = [
  { title: 'Stream Forge', slug: 'stream-forge' },
  { title: 'Web Design', slug: 'web-design' },
  { title: 'Web Development', slug: 'web-development' },
  { title: 'Brand Identity', slug: 'brand-identity' },
];

export default function ServicePage({ title, subtitle, packages, process, faq, currentSlug }: Props) {
  const relatedServices = allServices.filter((service) => service.slug !== currentSlug);

  return (
    <div className={styles.pageWrapper}>
      <Link href="/services" className={styles.backLink}>
        ← Back to All Services
      </Link>

      
<div className={styles.forgeContainer}>
      <section className={styles.packages} id="pricing">
  {packages.map((pkg) => {
    const quote = [
      `${title} – ${pkg.name} Package`,
      `Price: ${pkg.price}`,
      '',
      'Included Features:',
      ...pkg.features.map((f) => `• ${f}`)
    ].join('\n');

    const cardClasses = `${styles.packageCard} ${pkg.featured ? styles.featured : ''}`;

    return (
      <div key={pkg.name} className={cardClasses}>
        {pkg.featured && <span className={styles.featuredBadge}>Most Popular</span>}

        <h2 className={styles.packageTitle}>{pkg.name}</h2>
        <p className={styles.packagePrice}>{pkg.price}</p>
        <p className={styles.packageSubtitle}>{pkg.subtitle}</p>
        <ul className={styles.featureList}>
          {pkg.features.map((feat, idx) => (
            <li key={idx} className={styles.featureItem}>
              {feat}
            </li>
          ))}
        </ul>
        <Link
          href={{
            pathname: '/contact',
            query: {
              quote: encodeURIComponent(quote),
              subject: title,
            },
          }}
          className={`${styles.packageButton} ${pkg.featured ? styles.gradient : ''}`}
        >
          Get Started
        </Link>

        <p className={styles.noCredit}>No credit card required</p>
      </div>
    );
  })}
</section>




      <section className={styles.process}>
        <h2>How It Works</h2>
        <ol>
          {process.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      <section className={styles.faq}>
        <h2>FAQ</h2>
        {faq.map((item, idx) => (
          <div key={idx} className={styles.faqItem}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <section className={styles.related}>
        <h2>Other Services You Might Like</h2>
        <ul className={styles.relatedList}>
          {relatedServices.map((service) => (
            <li key={service.slug}>
              <Link href={`/services/${service.slug}`}>{service.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
}
