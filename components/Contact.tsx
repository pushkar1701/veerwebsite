"use client";

import { FormEvent, useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <FadeIn className="section-header">
          <span className="section-tag">{"// contact"}</span>
          <h2>Let&apos;s Connect</h2>
        </FadeIn>
        <FadeIn className="contact-wrapper">
          <p className="contact-intro">
            Want to collaborate on a Python project, need a cricket partner, or
            just want to say hi? Drop a message!
          </p>
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hey Veer! I'd love to..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message 🚀
              </button>
            </form>
          ) : (
            <div className="contact-success">
              <span className="success-icon">🏏</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. Veer will get back to you soon!</p>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
