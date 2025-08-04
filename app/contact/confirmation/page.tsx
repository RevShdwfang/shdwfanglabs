"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "@/components/modules/contactconfirm.module.css";

export default function TransmissionConfirm() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.confirmationSection} aria-label="Transmission Confirmation">
      <div className={styles.container}>
        <h1 className={styles.heading}>Transmission Secured</h1>
        <p className={styles.subtext}>
          Your mission details have been received at Shadowfang Labs. Expect a response from the command center soon.
        </p>
        <p className={styles.redirectNote}>
          Returning to base domain in 5 seconds...
        </p>
        <Link href="/" className={styles.homeButton} aria-label="Return to base domain immediately">
          Return to Base Now
        </Link>
      </div>
    </section>
  );
}