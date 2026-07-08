import type { CountryCode } from "../data/countries";

function Showcase() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";
const text = {
  co: {
    tag: "Experiencia completa",
    title: "Una invitación que también organiza tu evento.",
    description:
      "Tus invitados abren un sobre interactivo, escuchan tu música, confirman asistencia, agregan el evento a Google Calendar, abren la ubicación en Google Maps, suben fotos y participan en el concurso de foto ganadora. Además, desde el panel administrativo puedes crear links personalizados, manejar invitados, mesas, respuestas, fotos y música.",
    card: "RSVP",
  },

  pe: {
    tag: "Experiencia completa",
    title: "Una invitación que también organiza tu evento.",
    description:
      "Tus invitados abren un sobre interactivo, escuchan tu música, confirman asistencia, agregan el evento a Google Calendar, abren la ubicación en Google Maps, suben fotos y participan en el concurso de foto ganadora. Además, desde el panel administrativo puedes crear links personalizados, manejar invitados, mesas, respuestas, fotos y música.",
    card: "RSVP",
  },

  us: {
    tag: "Complete Experience",
    title: "An invitation that also helps organize your event.",
    description:
      "Your guests open an interactive envelope, listen to your music, RSVP, add the event to Google Calendar, open the location in Google Maps, upload photos, and join the winning-photo contest. From the admin panel, you can create personalized links, manage guests, tables, responses, photos, and music.",
    card: "RSVP",
  },

  jp: {
    tag: "完全な体験",
    title: "イベント管理もできるデジタル招待状。",
    description:
      "ゲストはインタラクティブな封筒を開き、音楽を聴き、出欠を回答し、Googleカレンダーに追加し、Googleマップで場所を確認し、写真をアップロードできます。管理パネルでは、個別リンク、ゲスト、席、回答、写真、音楽を管理できます。",
    card: "出欠確認",
  },
};
  const t = text[currentCountry];

  return (
    <section className="showcase">
      <div className="showcase-text">
        <span>{t.tag}</span>

        <h2>{t.title}</h2>

        <p>{t.description}</p>
      </div>

      <div className="showcase-stage">
        <div className="showcase-envelope">
          <div className="showcase-card">
            {t.card}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;