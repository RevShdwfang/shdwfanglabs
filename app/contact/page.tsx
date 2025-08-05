"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/modules/contactform.module.css";
import { useSearchParams } from 'next/navigation';


export default function CommandHub() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    subject: "",
    message: "",
    type: "",
    budget: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const searchParams = useSearchParams();

useEffect(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const quote = searchParams.get("quote");
  const subject = searchParams.get("subject");

  if (quote || subject) {
    const decodedQuote = quote ? decodeURIComponent(quote) : "";
    const decodedSubject = subject ? decodeURIComponent(subject) : "";

    setFormData((prev) => ({
      ...prev,
      message: decodedQuote
        ? decodedSubject === "Custom Package Request"
          ? `Hey! I’m interested in a custom package with the following services:\n\n${decodedQuote}`
          : `I’d like to move forward with this package:\n\n${decodedQuote}`
        : prev.message,
      subject: decodedSubject || prev.subject,
    }));
  }
}, []);





  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("transmitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/contact/confirmation");
      } else {
        setStatus("error");
        setFeedbackMsg(data.error || "Transmission failed.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("An error occurred during transmission.");
    }
  };

  return (
    <section className="section" id="command">
      <div className={styles.forgeContainer}>

        <div className={styles.row}>
          <form className={`${styles.contactForm} ${styles.padd15}`} onSubmit={handleSubmit} aria-label="Contact Command Form">
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              onChange={handleChange}
              value={formData.honeypot || ""}
              aria-hidden="true"
            />

            {/* Type */}
            <div className={styles.row}>
              <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                <div className={styles.formGroup}>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={styles.formControl}
                    required
                    aria-label="Select project type"
                  >
                    <option value="">Select Domain</option>
                    <option value="streamer">Streamer Operations</option>
                    <option value="business">Small Business Command</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Name + Email */}
            <div className={styles.row}>
              <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Name"
                    required
                    aria-label="Your name"
                  />
                </div>
              </div>
              <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Email"
                    required
                    aria-label="Your email address"
                  />
                </div>
              </div>
            </div>

            {/* Brand */}
            <div className={styles.row}>
              <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Brand / Company"
                    required
                    aria-label="Brand or company name"
                  />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className={styles.row}>
              <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Resource Allocation"
                    required
                    aria-label="Project budget"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className={styles.row}>
              <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                <div className={styles.formGroup}>
                  <select
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  className={styles.formControl}
  required
  aria-label="Select inquiry subject"
>
  <option value="">Select Mission Objective</option>
  <option value="Stream Forge">Stream Forge Inquiry</option>
  <option value="Web Design">Web Design Inquiry</option>
  <option value="Web Development">Web Development Inquiry</option>
  <option value="Brand Identity">Brand Identity Inquiry</option>
  <option value="Custom Package Request">Custom Package Inquiry</option>
</select>

                </div>
              </div>
            </div>

            {/* Message */}
            <div className={styles.row}>
              <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Mission Details"
                    required
                    aria-label="Your message"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className={styles.row}>
              <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                <button
                  type="submit"
                  className={styles.btn}
                  disabled={status === "transmitting"}
                  aria-label={status === "transmitting" ? "Transmitting message" : "Transmit message"}
                >
                  {status === "transmitting" ? "Transmitting..." : "Transmit Mission"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {status === "error" && (
          <p className={styles.errorMessage} role="alert">
            {feedbackMsg}
          </p>
        )}
        </div>
    </section>
  );
}