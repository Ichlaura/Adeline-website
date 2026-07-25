import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CategoryPage.css";

function Contact({ settings }: any) {  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_d2gty3k",
        "template_f8f4zkj",
        e.currentTarget,
        "CNh76JKEWBLXTonK7"
      )
      .then(() => {
        setSent(true);
        setSending(false);
        e.currentTarget.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
        setSending(false);
      });
  }




return (
  <>
    <Navbar />

<main className="contact-page">
        <section className="category-hero">
       
       <button
  className="back-button"
  onClick={() => {
    sessionStorage.setItem("fromCategory", "true");
    window.location.href = "/";
  }}
>
  ← Home
</button>
        <span className="category-kicker">Adelina Invitations</span>

        <h1>{settings.contact.title}</h1>

        <p>{settings.contact.description}</p>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          {sent && (
            <div className="contact-success">
              {settings.contact.success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              type="text"
              placeholder={settings.contact.name}
              required
            />

            <input
              name="email"
              type="email"
              placeholder={settings.contact.email}
              required
            />

            <textarea
              name="message"
              placeholder={settings.contact.message}
              rows={6}
              required
            />

            <button type="submit" disabled={sending}>
              {sending ? settings.contact.sending : settings.contact.send}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  </>
);


}

export default Contact;