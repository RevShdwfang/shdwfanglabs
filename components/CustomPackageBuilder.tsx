'use client';

import { useState } from 'react';
import Link from 'next/link';
import FAQSection from '@/components/shared/FAQSection';
import styles from '@/styles/modules/customPackage.module.css';

type FAQ = { question: string; answer: string };
type Props = { faq?: FAQ[]; currentSlug?: string };

const allServices = [
  { title: 'Stream Forge', slug: 'stream-forge' },
  { title: 'Web Design', slug: 'web-design' },
  { title: 'Web Development', slug: 'web-development' },
  { title: 'Brand Identity', slug: 'brand-identity' },
];

const serviceItems = [
  {
    category: 'Web Design',
    items: [
      { label: '1-page design', price: 150 },
      { label: 'Multi-page responsive site', price: 250 },
      { label: 'Contact form setup', price: 50 },
      { label: 'UI/UX wireframe mockups', price: 120 },
      { label: 'Mobile-first optimization', price: 80 },
      { label: 'Landing page design', price: 100 },
      { label: 'Hero section with CTA', price: 60 },
      { label: 'Design system / style guide', price: 140 },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { label: 'Basic CMS integration', price: 100 },
      { label: 'API integration', price: 150 },
      { label: 'Deployment to Vercel', price: 75 },
      { label: 'Dynamic content rendering', price: 125 },
      { label: 'Client-side form validation', price: 60 },
      { label: 'Newsletter or mailing list setup', price: 90 },
      { label: 'Light/dark theme switcher', price: 70 },
    ],
  },
  {
    category: 'Stream Forge',
    items: [
      { label: 'Stream overlays (static)', price: 75 },
      { label: 'Animated alerts', price: 100 },
      { label: 'Stinger transition', price: 125 },
      { label: 'Stream Starting/BRB/Offline screens', price: 80 },
      { label: 'Custom panel graphics', price: 60 },
      { label: 'Stream logo or watermark', price: 90 },
      { label: 'Sound FX design for alerts', price: 40 },
    ],
  },
  {
    category: 'Brand Identity',
    items: [
      { label: 'Logo design (primary)', price: 150 },
      { label: 'Logo variants (alt, icon)', price: 100 },
      { label: 'Brand guide PDF', price: 100 },
      { label: 'Social media kit', price: 80 },
      { label: 'Favicon + App icon design', price: 50 },
      { label: 'Typography system', price: 60 },
      { label: 'Color palette curation', price: 70 },
    ],
  },
];

export default function CustomPackageBuilder({ faq = [], currentSlug }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const relatedServices = allServices.filter(s => s.slug !== currentSlug);

  const toggleItem = (itemLabel: string) => {
    setSelected(prev => {
      const updated = new Set(prev);
      updated.has(itemLabel) ? updated.delete(itemLabel) : updated.add(itemLabel);
      return updated;
    });
  };

  const total = serviceItems
    .flatMap(cat => cat.items.filter(item => selected.has(item.label)))
    .reduce((sum, item) => sum + item.price, 0);

  const handleQuoteRequest = () => {
    if (selected.size === 0) {
      alert('Please select at least one item.');
      return;
    }

    const lines: string[] = [];
    let quoteTotal = 0;

    serviceItems.forEach(category => {
      category.items.forEach(item => {
        if (selected.has(item.label)) {
          lines.push(`${item.label} — $${item.price}`);
          quoteTotal += item.price;
        }
      });
    });

    const quoteText = [...lines.map(l => `• ${l}`), '', `Total Estimate: $${quoteTotal}`].join('\n');
    const encodedQuote = encodeURIComponent(quoteText);
    window.location.href = `/contact?quote=${encodedQuote}`;
  };

  return (
    <>
      {/* Builder */}
      <div className={styles.forgeContainer}>
        <div className={styles.categories}>
          {serviceItems.map(cat => (
            <div key={cat.category} className={styles.category}>
              <h3>{cat.category}</h3>
              <ul>
                {cat.items.map(item => (
                  <li key={item.label}>
                    <label className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selected.has(item.label)}
                        onChange={() => toggleItem(item.label)}
                      />
                      <span>
                        {item.label} - ${item.price}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <p>
            <strong>Total Estimate:</strong> ${total}
          </p>
          <button className={styles.submitBtn} onClick={handleQuoteRequest}>
            Request Custom Quote
          </button>
        </div>
      

      {/* FAQ */}
      {faq.length > 0 && (
        <section id="faq">
          <FAQSection faq={faq} />
        </section>
      )}

      {/* Related Services */}
      <section className={styles.relatedSection}>
        <h2>Other Services You Might Like</h2>
        <div className={styles.relatedGrid}>
          {relatedServices.map(service => (
            <div key={service.slug} className={styles.relatedCard}>
              <h3>{service.title}</h3>
              <Link href={`/services/${service.slug}`}>Explore this service</Link>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
