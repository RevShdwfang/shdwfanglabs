'use client';
import { useState } from 'react';
import styles from '@/components/modules/FAQSection.module.css';


export default function FAQSection({ faq }: { faq: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faq}>
  <div className={styles.faqLayout}>
    <div className={styles.faqIntro}>
      <h2>FAQ</h2>
      <p>
        <span className={styles.faqLabel}>Your Questions,</span>
        <span className={styles.faqHighlight}>Answered</span>
      </p>
    </div>

    <div className={styles.faqContent}>
      {faq.map((item, idx) => (
        <div
          key={idx}
          className={`${styles.faqItem} ${openIndex === idx ? styles.open : ''}`}
        >
          <div
            className={styles.summary}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {item.question}
            <span className={styles.icon}>{openIndex === idx ? '−' : '+'}</span>
          </div>

          {openIndex === idx && (
            <div className={styles.faqAnswer}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

