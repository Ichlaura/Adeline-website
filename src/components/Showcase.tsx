import type { CountryCode } from "../data/countries";

function Showcase() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = {
    co: {
      tag: "Experiencia interactiva",
      title: "No es solo una invitación. Es una experiencia.",
      description:
        "Tus invitados abrirán un elegante sobre digital, escucharán tu música, confirmarán su asistencia y vivirán tu evento desde el primer momento.",
      card: "RSVP",
    },

    pe: {
      tag: "Experiencia interactiva",
      title: "No es solo una invitación. Es una experiencia.",
      description:
        "Tus invitados abrirán un elegante sobre digital, escucharán tu música, confirmarán su asistencia y vivirán tu evento desde el primer momento.",
      card: "RSVP",
    },

    us: {
      tag: "Interactive Experience",
      title: "More than an invitation. It's an experience.",
      description:
        "Your guests will open a beautiful digital envelope, listen to your music, RSVP, and experience your event before it even begins.",
      card: "RSVP",
    },

    jp: {
      tag: "インタラクティブ体験",
      title: "招待状ではなく、特別な体験。",
      description:
        "ゲストはデジタル封筒を開き、音楽を聴き、出欠を回答し、イベントが始まる前から特別な体験を楽しめます。",
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