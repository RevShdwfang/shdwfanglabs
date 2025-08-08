import styles from "@/styles/modules/terms.module.css";
import "@/app/globals.css";

const LAST_UPDATED = "August 8, 2025";

export default function TermsPage() {
  return (
  <div className={styles.forgeContainer}>
    <section className="section">
      
        <div className={styles.row}>
          <div className={styles.padd15}>
            <header aria-label="Terms header">
              <p><strong>Last updated:</strong> <time dateTime="2025-08-08">{LAST_UPDATED}</time></p>
              <p>
                Welcome to Shadowfang Labs! These Terms of Service (“Terms”) govern your use of our website,
                client portal, shop, and services. By accessing or using them, you agree to these Terms.
              </p>
            </header>

            <h3 id="who-we-are">1) Who we are</h3>
            <p>
              Shadowfang Labs (“Shadowfang,” “we,” “us,” or “our”) is a creative studio providing brand identity,
              design, web, stream assets, and related consulting.
              <br />
              <strong>Contact:</strong>{" "}
              <a href="mailto:umbrahq@shdwfanglabs.com">umbrahq@shdwfanglabs.com</a>
            </p>

            <h3 id="using-site">2) Using the Site &amp; Client Portal</h3>
            <ul>
              <li>You must provide accurate information and keep your account secure.</li>
              <li>Don’t misuse the Services (no unlawful, infringing, harassing, or harmful activity).</li>
              <li>We may modify, suspend, or terminate access for any misuse.</li>
            </ul>

            <h3 id="scope-revisions">3) Proposals, Scope &amp; Revisions</h3>
            <ul>
              <li>Work begins after written approval of a quote/proposal or Statement of Work (SOW).</li>
              <li>The SOW defines deliverables, file formats, timeline, and the number of included revisions.</li>
              <li>Out-of-scope changes require a written change order and may affect price/timeline.</li>
            </ul>

            <h3 id="client-responsibilities">4) Client Responsibilities</h3>
            <ul>
              <li>Provide timely feedback, content, brand assets, and approvals.</li>
              <li>
                You represent you have rights to all materials you supply and that they don’t infringe others.
              </li>
            </ul>

            <h3 id="payments">5) Payments, Deposits &amp; Late Fees</h3>
            <ul>
              <li>
                Unless stated otherwise in the SOW: <strong>50% non-refundable deposit</strong> to start; balance
                due at final delivery or the milestone stated in the SOW.
              </li>
              <li>
                Invoices are due upon receipt. Past-due balances may accrue <strong>1.5% per month</strong> (or the
                maximum permitted by law), plus collection costs.
              </li>
              <li>We may pause work for non-payment.</li>
            </ul>

            <h3 id="cancellations">6) Cancellations &amp; Kill Fees</h3>
            <p>
              If you cancel after kickoff, you owe for all work completed to date (at the agreed rates) plus any
              non-recoverable expenses, less deposits already paid.
            </p>

            <h3 id="ownership">7) Ownership, Licenses &amp; Working Files</h3>
            <p>
              <strong>Final Deliverables.</strong> Upon full payment, you receive ownership of the final, exported
              deliverables identified in the SOW (e.g., logo exports, brand guide PDF, compiled site files).
            </p>
            <p>
              <strong>Working Files.</strong> Native/editable files (e.g., layered PSD/AI/FIG/AE, raw project files,
              code repos beyond compiled build) remain our property unless the SOW grants them or you purchase them
              separately.
            </p>
            <p>
              <strong>Portfolio Use.</strong> You grant us permission to display finished work in our portfolio and
              marketing (site, social, creds), unless an NDA or written restriction says otherwise.
            </p>
            <p>
              <strong>Third-Party Materials.</strong> Fonts, stock, plugins, and code libraries remain subject to
              their own licenses. You may need to acquire licenses for your ongoing use.
            </p>

            <h3 id="third-parties">8) Web, Hosting &amp; Third Parties</h3>
            <p>
              Hosting, domains, and e-commerce (e.g., Fourthwall, payment processors) are provided by third parties
              under their terms. We’re not responsible for their uptime, security, or policies.
            </p>

            <h3 id="disclaimers">9) Warranties &amp; Disclaimers</h3>
            <p>
              Services are provided “as is.” We disclaim all warranties to the extent permitted by law, including
              merchantability, fitness for a particular purpose, and non-infringement. We don’t guarantee specific
              business outcomes (traffic, sales, rankings, etc.).
            </p>

            <h3 id="limitation">10) Limitation of Liability</h3>
            <p>
              To the extent permitted by law, our total liability arising out of or related to the Services is
              limited to the amount you paid us for the specific project giving rise to the claim. We will not be
              liable for lost profits, lost data, or indirect, special, incidental, or consequential damages.
            </p>

            <h3 id="indemnification">11) Indemnification</h3>
            <p>
              You agree to defend and indemnify us from claims arising out of content or materials you provide, your
              misuse of the Services, or your breach of these Terms.
            </p>

            <h3 id="termination">12) Termination</h3>
            <p>
              Either party may terminate a project for material breach after written notice and a reasonable
              opportunity to cure. Sections that by nature should survive (e.g., payments due, IP, portfolio rights,
              limitations) will survive.
            </p>

            <h3 id="shop">13) Online Shop (if applicable)</h3>
            <ul>
              <li>
                Physical and print-on-demand items are fulfilled by third parties (e.g., Fourthwall) under their
                shipping/returns policies.
              </li>
              <li>Digital goods are generally <strong>non-refundable</strong> once delivered/downloaded.</li>
            </ul>

            <h3 id="changes">14) Changes to Terms</h3>
            <p>
              We may update these Terms. The “Last updated” date tells you when they changed. Continued use means you
              accept the new Terms.
            </p>

            <h3 id="law">15) Governing Law &amp; Venue</h3>
            <p>
              These Terms are governed by the laws of the State of Indiana, without regard to conflicts of law. Venue
              and jurisdiction lie in the state or federal courts located in <strong>Adams County, Indiana</strong>.
            </p>
          </div>
        </div>
      
    </section>
    </div>
  );
}
