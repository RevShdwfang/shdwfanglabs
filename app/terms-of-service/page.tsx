
import styles from "@/components/modules/terms.module.css";
import "@/app/globals.css";
import PageHeader from '@/components/shared/PageHeader/PageHeader';


export default function TermsPage() {
  return (
    <section className="section">
      <div className={styles.forgeContainer}>
        <PageHeader/>

        <div className={styles.row}>
          <div className={styles.padd15}>
            <p>
              Welcome to Shadowfang Labs! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms. Please read them carefully.
            </p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using our website or services, you confirm that you have read, understood, and agree to be bound by these Terms.
            </p>

            <h3>2. Description of Services</h3>
            <p>
              Shadowfang Labs provides graphic design services, including but not limited to logo design, web design, social media graphics, and visual identity development. The specifics of these services will be outlined in individual project proposals or agreements.
            </p>

            <h3>3. Client Responsibilities</h3>
            <p>
              As a client, you are responsible for providing timely and accurate information, feedback, and approvals necessary for the completion of the services. You agree to adhere to the timelines outlined in project agreements.
            </p>

            <h3>4. Payment Terms</h3>
            <p>
              Payment terms, including fees, payment schedules, and accepted payment methods, will be specified in individual project proposals or agreements. You agree to pay Shadowfang Labs according to these terms. Late payments may be subject to interest charges.
            </p>

            <h3>5. Intellectual Property</h3>
            <p>
              Unless otherwise agreed in writing, Shadowfang Labs retains ownership of all initial design concepts and drafts. Upon full payment, the client will typically receive a license or transfer of ownership for the final approved deliverables, as specified in the project agreement. Shadowfang Labs reserves the right to showcase completed work in its portfolio.
            </p>

            <h3>6. Revisions and Changes</h3>
            <p>
              The number of revisions included in the project fee will be outlined in the project agreement. Additional revisions or changes may be subject to additional charges.
            </p>

            <h3>7. Project Timeline and Delays</h3>
            <p>
              Estimated project timelines will be provided, but these are estimates and may vary based on project complexity and client responsiveness. Shadowfang Labs is not liable for delays caused by the client's failure to provide necessary information or approvals.
            </p>

            <h3>8. Termination</h3>
            <p>
              Either party may terminate a project agreement under the conditions specified in that agreement or if there is a material breach of these Terms. Upon termination, any outstanding payments will become immediately due.
            </p>

            <h3>9. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Shadowfang Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to our services or these Terms.
            </p>

            <h3>10. Warranty and Disclaimer</h3>
            <p>
              Shadowfang Labs provides its services on an “as is” basis without any warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.
            </p>

            <h3>11. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Indiana, without regard to its conflict of law provisions.
            </p>

            <h3>12. Entire Agreement</h3>
            <p>
              These Terms constitute the entire agreement between you and Shadowfang Labs regarding the use of our website and services and supersede all prior or contemporaneous communications and proposals, whether oral or written.
            </p>

            <h3>13. Modifications to Terms</h3>
            <p>
              Shadowfang Labs reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website or services after the posting of changes constitutes your acceptance of such changes.
            </p>

            <h3>14. Contact Information</h3>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
