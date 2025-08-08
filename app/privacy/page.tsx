import styles from "@/styles/modules/privacy.module.css";
import "@/app/globals.css";

const LAST_UPDATED = "August 8, 2025";

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className={styles.forgeContainer}>
        <div className={styles.row}>
          <div className={styles.padd15}>
            <header aria-label="Privacy header">
              <h1>Privacy Policy</h1>
              <p>
                <strong>Last updated:</strong>{" "}
                <time dateTime="2025-08-08">{LAST_UPDATED}</time>
              </p>
              <p>
                This Privacy Policy explains how Shadowfang Labs (“Shadowfang,” “we,” “us,” or
                “our”) collects, uses, and shares information when you visit our website, use the
                client portal, place shop orders, or otherwise interact with us (collectively, the
                “Services”).
              </p>
            </header>

            {/* Table of Contents */}
            <section className="section">
  <div className={styles.forgeContainer}>
    <div className={styles.legalLayout}>
      {/* Desktop sticky TOC */}
      <aside className={styles.tocDesktop} aria-label="Table of contents">
        <h4>On this page</h4>
        <ol className={styles.tocList}>
          <li><a href="#scope">1. Scope</a></li>
          <li><a href="#info-we-collect">2. Information We Collect</a></li>
          <li><a href="#how-we-use">3. How We Use Information</a></li>
          <li><a href="#legal-bases">4. Legal Bases (EEA/UK)</a></li>
          <li><a href="#sharing">5. Sharing & Service Providers</a></li>
          <li><a href="#cookies">6. Cookies & Analytics</a></li>
          <li><a href="#retention">7. Data Retention</a></li>
          <li><a href="#your-rights">8. Your Choices & Rights</a></li>
          <li><a href="#security">9. Security</a></li>
          <li><a href="#children">10. Children’s Privacy</a></li>
          <li><a href="#transfers">11. International Transfers</a></li>
          <li><a href="#third-party-links">12. Third-Party Links</a></li>
          <li><a href="#changes">13. Changes to this Policy</a></li>
          <li><a href="#contact">14. Contact</a></li>
        </ol>
      </aside>

      {/* Content column */}
      <div className={styles.legalContent}>
        {/* Mobile collapsible TOC */}
        <details className={styles.tocMobile}>
          <summary>Table of Contents</summary>
          <ol>
            <li><a href="#scope">1. Scope</a></li>
            <li><a href="#info-we-collect">2. Information We Collect</a></li>
            <li><a href="#how-we-use">3. How We Use Information</a></li>
            <li><a href="#legal-bases">4. Legal Bases (EEA/UK)</a></li>
            <li><a href="#sharing">5. Sharing & Service Providers</a></li>
            <li><a href="#cookies">6. Cookies & Analytics</a></li>
            <li><a href="#retention">7. Data Retention</a></li>
            <li><a href="#your-rights">8. Your Choices & Rights</a></li>
            <li><a href="#security">9. Security</a></li>
            <li><a href="#children">10. Children’s Privacy</a></li>
            <li><a href="#transfers">11. International Transfers</a></li>
            <li><a href="#third-party-links">12. Third-Party Links</a></li>
            <li><a href="#changes">13. Changes to this Policy</a></li>
            <li><a href="#contact">14. Contact</a></li>
          </ol>
        </details>

        {/* Your existing content card */}
        <article className={styles.padd15}>
          {/* …your sections with matching ids go here… */}
          {/* <header><h1>Privacy Policy</h1> ... </header> */}
        </article>
      </div>
    </div>
  </div>
</section>


            <section id="scope">
              <h3>1. Scope</h3>
              <p>
                This Policy applies to information collected through our website, client portal,
                shop, and direct communications related to our Services.
              </p>
            </section>

            <section id="info-we-collect">
              <h3>2. Information We Collect</h3>
              <ul>
                <li>
                  <strong>Information you provide:</strong> name, email, messages, project details,
                  brand assets, billing/shipping info (for shop orders), and client-portal
                  credentials.
                </li>
                <li>
                  <strong>Automatic data:</strong> IP address, device/browser, referral URLs,
                  pages viewed, and basic usage analytics collected via cookies or similar tech.
                </li>
                <li>
                  <strong>Payments:</strong> processed by third parties (e.g., Stripe, PayPal, or
                  Fourthwall). We receive limited payment metadata, not full card numbers.
                </li>
              </ul>
            </section>

            <section id="how-we-use">
              <h3>3. How We Use Information</h3>
              <ul>
                <li>Provide, maintain, and improve the site, client portal, shop, and studio services.</li>
                <li>Respond to inquiries, prepare quotes/SOWs, fulfill projects, and manage invoices.</li>
                <li>Security, fraud prevention, debugging, and legal/compliance purposes.</li>
                <li>Optional marketing with your consent (you can opt out anytime).</li>
              </ul>
            </section>

            <section id="legal-bases">
              <h3>4. Legal Bases (EEA/UK)</h3>
              <p>
                Where applicable, we rely on: (a) performance of a contract; (b) our legitimate
                interests (e.g., site security, basic analytics); (c) consent (e.g., certain
                marketing/cookies); and (d) compliance with legal obligations.
              </p>
            </section>

            <section id="sharing">
              <h3>5. Sharing &amp; Service Providers</h3>
              <p>We share information with trusted providers who process data for us under agreements, such as:</p>
              <ul>
                <li>Hosting, email, client portal, analytics, and error monitoring.</li>
                <li>Payment processors and e-commerce/fulfillment (e.g., Fourthwall).</li>
                <li>Legal or governmental authorities when required by law.</li>
              </ul>
              <p>
                We do <strong>not</strong> sell personal information. We do not “share” personal
                information for cross-context behavioral advertising as defined by the CPRA.
              </p>
            </section>

            <section id="cookies">
              <h3>6. Cookies &amp; Analytics</h3>
              <p>
                We use cookies and similar technologies for core site functions and basic analytics.
                You can manage cookies in your browser settings and, where available, via our cookie
                banner/preferences.
              </p>
            </section>

            <section id="retention">
              <h3>7. Data Retention</h3>
              <ul>
                <li>Contact and project records: typically up to <strong>24 months</strong> after last activity.</li>
                <li>Invoices, contracts, and tax records: <strong>7 years</strong> or as required by law.</li>
                <li>Shop orders: retained per fulfillment and accounting needs.</li>
              </ul>
              <p>When no longer needed, we delete or de-identify data.</p>
            </section>

            <section id="your-rights">
              <h3>8. Your Choices &amp; Rights</h3>
              <ul>
                <li>Opt out of marketing emails via unsubscribe links or by contacting us.</li>
                <li>
                  Request access, correction, or deletion of your information by emailing{" "}
                  <a href="mailto:umbrahq@shdwfanglabs.com">umbrahq@shdwfanglabs.com</a>.
                </li>
                <li>
                  If your jurisdiction provides specific rights (e.g., GDPR/UK or certain U.S. states),
                  we will honor applicable requests.
                </li>
              </ul>
            </section>

            <section id="security">
              <h3>9. Security</h3>
              <p>
                We use reasonable technical and organizational measures to protect information. However,
                no method of transmission or storage is 100% secure.
              </p>
            </section>

            <section id="children">
              <h3>10. Children’s Privacy</h3>
              <p>
                Our Services are not directed to children under 13. We do not knowingly collect personal
                information from children. If we learn we have collected such information, we will delete it.
              </p>
            </section>

            <section id="transfers">
              <h3>11. International Transfers</h3>
              <p>
                If you access the Services from outside the United States, your information may be processed
                in the U.S., where laws may differ from those in your jurisdiction.
              </p>
            </section>

            <section id="third-party-links">
              <h3>12. Third-Party Links</h3>
              <p>
                Our site may contain links to third-party websites. Their practices are governed by their own
                policies, which we do not control.
              </p>
            </section>

            <section id="changes">
              <h3>13. Changes to this Policy</h3>
              <p>
                We may update this Policy. The “Last updated” date reflects the latest changes. Your continued
                use of the Services after changes means you accept the revised Policy.
              </p>
            </section>

            <section id="contact">
              <h3>14. Contact</h3>
              <p>
                For questions or privacy requests, email{" "}
                <a href="mailto:umbrahq@shdwfanglabs.com">umbrahq@shdwfanglabs.com</a> or use the{" "}
                <a href="/contact">contact form</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
