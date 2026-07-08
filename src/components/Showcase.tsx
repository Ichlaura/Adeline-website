import type { CountryCode } from "../data/countries";

function Showcase() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";
const text = {
  co: {
    tag: "Experiencia interactiva",
    title: "Mucho más que una invitación digital.",
    description:
      "Sorprende a tus invitados con una experiencia elegante e interactiva desde el primer clic. Nosotros nos encargamos de la tecnología para que tú solo disfrutes de tu evento.",
    card: "RSVP",
  },

  pe: {
    tag: "Experiencia interactiva",
    title: "Mucho más que una invitación digital.",
    description:
      "Sorprende a tus invitados con una experiencia elegante e interactiva desde el primer clic. Nosotros nos encargamos de la tecnología para que tú solo disfrutes de tu evento.",
    card: "RSVP",
  },

  us: {
    tag: "Interactive Experience",
    title: "Much more than a digital invitation.",
    description:
      "Delight your guests with an elegant interactive experience from the very first click. We handle the technology so you can simply enjoy your special day.",
    card: "RSVP",
  },

  jp: {
    tag: "インタラクティブ体験",
    title: "デジタル招待状を超えた体験。",
    description:
      "ゲストに特別な体験を届けましょう。技術的なことはすべて私たちが担当するので、安心してイベントを楽しめます。",
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