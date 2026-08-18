import type { CountryCode } from "../data/countries";

function ExperienceCarousel() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = {
    co: {
      tag: "TODO EN UNA SOLA EXPERIENCIA",
      title: "Mucho más que una invitación",
      items: [
        "Invitación",
        "Cuenta regresiva",
        "RSVP",
        "Ubicación",
        "Cronograma",
        "Fotos",
        "Mesas",
      ],
    },

    pe: {
      tag: "TODO EN UNA SOLA EXPERIENCIA",
      title: "Mucho más que una invitación",
      items: [
        "Invitación",
        "Cuenta regresiva",
        "RSVP",
        "Ubicación",
        "Cronograma",
        "Fotos",
        "Mesas",
      ],
    },

    mx: {
      tag: "TODO EN UNA SOLA EXPERIENCIA",
      title: "Mucho más que una invitación",
      items: [
        "Invitación",
        "Cuenta regresiva",
        "RSVP",
        "Ubicación",
        "Cronograma",
        "Fotos",
        "Mesas",
      ],
    },

    us: {
      tag: "EVERYTHING IN ONE EXPERIENCE",
      title: "More than an invitation",
      items: [
        "Invitation",
        "Countdown",
        "RSVP",
        "Location",
        "Timeline",
        "Photos",
        "Seating",
      ],
    },

    jp: {
      tag: "すべてをひとつの体験に",
      title: "招待状以上の特別な体験",
      items: [
        "招待状",
        "カウントダウン",
        "出欠確認",
        "アクセス",
        "スケジュール",
        "写真",
        "座席",
      ],
    },
  };

  const t = text[currentCountry];

  const icons = ["💌", "⏳", "✓", "📍", "✦", "📸", "♡"];

  return (
    <section className="experience-carousel">
      <div className="experience-carousel-heading">
        <span>{t.tag}</span>
        <h3>{t.title}</h3>
      </div>

      <div className="experience-stand">
        <div className="experience-rotator">
          {t.items.map((item, index) => {
            const angle = (360 / t.items.length) * index;

            return (
              <div
                className="experience-item"
                key={item}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(250px)`,
                }}
              >
                <div className="experience-icon">
                  {icons[index]}
                </div>

                <strong>{item}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceCarousel;