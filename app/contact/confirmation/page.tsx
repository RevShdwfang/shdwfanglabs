"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "@/components/modules/contactconfirm.module.css";

export default function ConfirmationPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.confirmationSection}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Message Sent</h1>
        <p className={styles.subtext}>
          Your message has been received. I’ll review it and get back to you soon.
        </p>
        <p className={styles.redirectNote}>
          Redirecting to homepage in 5 seconds...
        </p>
        <Link href="/" className={styles.homeButton}>
          Return Home Now
        </Link>
      </div>
    </section>
  );
}
