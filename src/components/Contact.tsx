import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { CountryCode } from "../data/countries";

const contactText = {
  co: {
    title: "Contáctanos",
    subtitle: "¿Tienes una pregunta o necesitas una invitación personalizada?",
    success: "Mensaje enviado correctamente.",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    sending: "Enviando...",
    send: "Enviar mensaje",
    error: "Hubo un error. Intenta otra vez.",
  },
  pe: {
    title: "Contáctanos",
    subtitle: "¿Tienes una pregunta o necesitas una invitación personalizada?",
    success: "Mensaje enviado correctamente.",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    sending: "Enviando...",
    send: "Enviar mensaje",
    error: "Hubo un error. Intenta otra vez.",
  },
  us: {
    title: "Contact us",
    subtitle: "Have a question or need a custom invitation?",
    success: "Message sent successfully.",
    name: "Name",
    email: "Email",
    message: "Message",
    sending: "Sending...",
    send: "Send message",
    error: "Something went wrong. Please try again.",
  },
  jp: {
    title: "お問い合わせ",
    subtitle: "ご質問やカスタム招待状のご相談はこちらから。",
    success: "メッセージを送信しました。",
    name: "お名前",
    email: "メールアドレス",
    message: "メッセージ",
    sending: "送信中...",
    send: "送信する",
    error: "エラーが発生しました。もう一度お試しください。",
  },
};

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = contactText[currentCountry];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_d2gty3k",
        "template_f8f4zkj",
        form,
        "CNh76JKEWBLXTonK7"
      )
      .then(() => {
        setSent(true);
        setSending(false);
        form.reset();
      })
      .catch(() => {
        alert(text.error);
        setSending(false);
      });
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2>{text.title}</h2>
        <p>{text.subtitle}</p>

        {sent && <div className="contact-success">{text.success}</div>}

        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" type="text" placeholder={text.name} required />
          <input name="email" type="email" placeholder={text.email} required />
          <textarea name="message" placeholder={text.message} required />

          <button type="submit" disabled={sending}>
            {sending ? text.sending : text.send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;