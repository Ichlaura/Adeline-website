import type { CountryCode } from "../data/countries";
import "../styles/LiveDemo.css";

const DEMO_URL =
  "https://wedding-invitation-app-rho.vercel.app/invitation/demo";

const content = {
  co: {
    tag: "DESCUBRE LA EXPERIENCIA",
    title: "Mucho más que una invitación.",
    accent: "Una experiencia completa.",
    description:
      "Tus invitados reciben una experiencia digital elegante e interactiva, mientras tú administras confirmaciones, invitados, mesas y mucho más.",
    button: "Explorar invitación real",
    note: "Demo interactivo · Se abrirá en una nueva pestaña",
    guest: "PARA TUS INVITADOS",
    admin: "PARA TI",
   
  },

  pe: {
    tag: "DESCUBRE LA EXPERIENCIA",
    title: "Mucho más que una invitación.",
    accent: "Una experiencia completa.",
    description:
      "Tus invitados reciben una experiencia digital elegante e interactiva, mientras tú administras confirmaciones, invitados, mesas y mucho más.",
    button: "Explorar invitación real",
    note: "Demo interactivo · Se abrirá en una nueva pestaña",
    guest: "PARA TUS INVITADOS",
    admin: "PARA TI",
  
  },

  mx: {
    tag: "DESCUBRE LA EXPERIENCIA",
    title: "Mucho más que una invitación.",
    accent: "Una experiencia completa.",
    description:
      "Tus invitados reciben una experiencia digital elegante e interactiva, mientras tú administras confirmaciones, invitados, mesas y mucho más.",
    button: "Explorar invitación real",
    note: "Demo interactivo · Se abrirá en una nueva pestaña",
    guest: "PARA TUS INVITADOS",
    admin: "PARA TI",
  
  },

  us: {
    tag: "DISCOVER THE EXPERIENCE",
    title: "More than an invitation.",
    accent: "A complete experience.",
    description:
      "Your guests receive an elegant interactive digital experience while you manage confirmations, guests, tables and much more.",
    button: "Explore the real invitation",
    note: "Interactive demo · Opens in a new tab",
    guest: "FOR YOUR GUESTS",
    admin: "FOR YOU",
   
  },

  jp: {
    tag: "ADElINAを体験",
    title: "招待状だけではありません。",
    accent: "特別なデジタル体験を。",
    description:
      "ゲストには美しくインタラクティブな体験を。主催者は出欠確認、ゲスト、テーブルなどを簡単に管理できます。",
    button: "実際の招待状を見る",
    note: "インタラクティブデモ · 新しいタブで開きます",
    guest: "ゲスト向け",
    admin: "主催者向け",

  },
};

function LiveDemo() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const t = content[currentCountry];

  return (
    <section className="live-demo-section">
      <div className="live-demo-shell">

        <div className="live-demo-intro">
          <div className="live-demo-copy">
            <span className="live-demo-eyebrow">{t.tag}</span>

            <h2>
              {t.title}
              <span>{t.accent}</span>
            </h2>

            <p className="live-demo-description">
              {t.description}
            </p>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-button"
            >
              {t.button}
              <span className="live-demo-arrow">↗</span>
            </a>

            <p className="live-demo-note">{t.note}</p>
          </div>

          <div className="live-demo-showcase">

            <div className="live-demo-glow" />

            <span className="live-demo-label live-demo-label-guest">
              {t.guest}
            </span>

            <div className="demo-phone demo-phone-left">
              <div className="demo-phone-speaker" />
              <img
                src="/demo/event-info.jpeg"
                alt="Adelina event information"
              />
            </div>

            <div className="demo-phone demo-phone-main">
              <div className="demo-phone-speaker" />
              <img
                src="/demo/invitation.jpeg"
                alt="Adelina digital invitation"
              />
            </div>

            <div className="demo-phone demo-phone-right">
              <div className="demo-phone-speaker" />
              <img
                src="/demo/rsvp.jpeg"
                alt="Adelina RSVP"
              />
            </div>

            <div className="demo-admin-card">
              <span>{t.admin}</span>

              <img
                src="/demo/dashboard.jpeg"
                alt="Adelina private dashboard"
              />
            </div>

          </div>
        </div>


{/*
        <div className="live-demo-features">
          {t.features.map(([icon, title, description]) => (
            <div className="live-demo-feature" key={title}>
              <div className="feature-icon">{icon}</div>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>



          ))}
        </div>
*/}



      </div>
    </section>
  );
}

export default LiveDemo;