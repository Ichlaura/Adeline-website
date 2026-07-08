import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [sent, setSent] = useState(false);
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
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2>Contact us</h2>
        <p>Have a question ?</p>

        {sent && <div className="contact-success">Message sent successfully.</div>}

        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />

          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;