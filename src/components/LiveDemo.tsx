import type { CountryCode } from "../data/countries";
import "../styles/LiveDemo.css";

const DEMO_URL =
  "https://wedding-invitation-app-rho.vercel.app/invitation/demo";

const content = {
  co: {
    tag: "PRUÉBALA TÚ MISMO",
    title: "Vive la experiencia Adelina",
    description:
      "Descubre cómo se siente recibir una invitación Adelina. Abre una invitación real, explora sus funciones y vive la experiencia que recibirán tus invitados.",
    button: "Abrir invitación demo",
    note: "Demo interactivo · Se abrirá en una nueva pestaña",
  },

  pe: {
    tag: "PRUÉBALA TÚ MISMO",
    title: "Vive la experiencia Adelina",
    description:
      "Descubre cómo se siente recibir una invitación Adelina. Abre una invitación real, explora sus funciones y vive la experiencia que recibirán tus invitados.",
    button: "Abrir invitación demo",
    note: "Demo interactivo · Se abrirá en una nueva pestaña",
  },

  mx: {
    tag: "PRUÉBALA TÚ MISMO",
    title: "Vive la experiencia Adelina",
    description:
      "Descubre cómo se siente recibir una invitación Adelina. Abre una invitación real, explora sus funciones y vive la experiencia que recibirán tus invitados.",
    button: "Abrir invitación demo",
    note: "Demo interactivo · Se abrirá en una nueva pestaña",
  },

  us: {
    tag: "TRY IT YOURSELF",
    title: "Experience Adelina",
    description:
      "Discover what it feels like to receive an Adelina invitation. Open a real invitation, explore its features and experience exactly what your guests will receive.",
    button: "Open invitation demo",
    note: "Interactive demo · Opens in a new tab",
  },

  jp: {
    tag: "実際に体験してみる",
    title: "Adelinaを体験",
    description:
      "Adelinaの招待状を実際に開いて、ゲストが体験するデザインや機能をご覧ください。",
    button: "デモ招待状を見る",
    note: "インタラクティブデモ · 新しいタブで開きます",
  },
};

function LiveDemo() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const t = content[currentCountry];

  return (
    <section className="live-demo-section">
      <div className="live-demo-container">

        <div className="live-demo-icon">
          💌
        </div>

        <span className="live-demo-tag">
          {t.tag}
        </span>

        <h2>
          {t.title}
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
          <span>→</span>
        </a>

        <p className="live-demo-note">
          {t.note}
        </p>

      </div>
    </section>
  );
}

export default LiveDemo;