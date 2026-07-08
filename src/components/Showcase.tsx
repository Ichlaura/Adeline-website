import type { CountryCode } from "../data/countries";

function Showcase() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";
const text = {
  co: {
    tag: "Experiencia premium",
    title: "La primera impresión de tu gran día.",
    description:
      "Antes de que llegue el evento, tus invitados ya estarán viviendo una experiencia inolvidable.",
    card: "RSVP",
  },

  pe: {
    tag: "Experiencia premium",
    title: "La primera impresión de tu gran día.",
    description:
      "Antes de que llegue el evento, tus invitados ya estarán viviendo una experiencia inolvidable.",
    card: "RSVP",
  },

  us: {
    tag: "Premium Experience",
    title: "The first impression of your special day.",
    description:
      "Before your event even begins, your guests will already be enjoying an unforgettable experience.",
    card: "RSVP",
  },

  jp: {
    tag: "プレミアム体験",
    title: "大切な一日の、最初の感動。",
    description:
      "イベントが始まる前から、ゲストに忘れられない特別な体験を届けます。",
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