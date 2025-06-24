"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/modules/contactform.module.css";

export default function Contact() {
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

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

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
        setFeedbackMsg(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("An error occurred while sending.");
    }
  };

  return (
    <section className="contact active section" id="contact">
      <div className="container">
        <div className="titlerow">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className={styles.row}>
          <form
            className={`${styles.contactForm} ${styles.padd15}`}
            onSubmit={handleSubmit}
          >
            {/* 🛡️ Honeypot Field to Catch Bots */}
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              onChange={handleChange}
              value={formData.honeypot || ""}
            />

            {/* Type */}
            <div className={styles.row}>
              <div
                className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}
              >
                <div className={styles.formGroup}>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={styles.formControl}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="streamer">Streamer</option>
                    <option value="business">Small Business</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Name + Email */}
            <div className={styles.row}>
              <div
                className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}
              >
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div
                className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}
              >
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Brand */}
            <div className={styles.row}>
              <div
                className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}
              >
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Brand Name / Company Name"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className={styles.row}>
              <div
                className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}
              >
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Budget"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className={styles.row}>
              <div
                className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}
              >
                <div className={styles.formGroup}>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.formControl}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="Stream Assets">Stream Assets Inquiry</option>
                    <option value="Brand Identity">Brand Identity Inquiry</option>
                    <option value="Website UI/UX">Website UI/UX Inquiry</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className={styles.row}>
              <div
                className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}
              >
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formControl}
                    placeholder="Message"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className={styles.row}>
              <div
                className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}
              >
                <button
                  type="submit"
                  className={styles.btn}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {status === "error" && (
          <p className={styles.errorMessage}>{feedbackMsg}</p>
        )}
      </div>
    </section>
  );
}
