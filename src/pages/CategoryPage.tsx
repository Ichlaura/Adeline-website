import "../styles/CategoryPage.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { invitations } from "../data/invitations";
import type { CountryCode } from "../data/countries";

const categoryText = {
  co: {
    back: "← Home",
    kicker: "Colección Adelina",
    subtitle: "Elige el diseño que mejor combina con tu celebración.",
    from: "Desde",
    button: "Ver diseño",
  },
  pe: {
    back: "← Home",
    kicker: "Colección Adelina",
    subtitle: "Elige el diseño que mejor combina con tu celebración.",
    from: "Desde",
    button: "Ver diseño",
  },
    mx: {
    back: "← Home",
    kicker: "Colección Adelina",
    subtitle: "Elige el diseño que mejor combina con tu celebración.",
    from: "Desde",
    button: "Ver diseño",
  },
  us: {
    back: "← Home",
    kicker: "Adelina Collection",
    subtitle: "Choose the design that best matches your celebration.",
    from: "From",
    button: "View design",
  },
  jp: {
    back: "← ホーム",
    kicker: "Adelina コレクション",
    subtitle: "お祝いにぴったりのデザインをお選びください。",
    from: "価格",
    button: "デザインを見る",
  },
};

function CategoryPage() {
  const [showContact, setShowContact] = useState(false);

  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = categoryText[currentCountry];

  const categoryName = decodeURIComponent(
    window.location.pathname.replace("/category/", "")
  );

  const categoryCards = invitations.filter(
    (item) => item.category === categoryName && item.country === currentCountry
  );

  return (
    <main className="category-page">
      <Navbar onContactClick={() => setShowContact(true)} />

      <section className="category-hero">
        <button
          className="back-button"
          onClick={() => {
            sessionStorage.setItem("fromCategory", "true");
            window.location.href = "/";
          }}
        >
          {text.back}
        </button>

        <span className="category-kicker">{text.kicker}</span>
        <h1>{categoryName}</h1>
        <p>{text.subtitle}</p>
      </section>

      <section id="designs" className="category-page-grid">
        {categoryCards.map((card) => (
          <article className="category-invite-card" key={card.title}>
            <div className="category-image-wrap">
              <img
                src={card.openImage}
                alt={card.title}
                className="category-invite-image"
              />
            </div>

            <div className="category-card-content">
              <span>Adelina</span>
              <h3>{card.title}</h3>
              <p>
                {text.from} {card.price}
              </p>
              <button>{text.button}</button>
            </div>
          </article>
        ))}
      </section>

      {showContact && <Contact />}

      <Footer />
    </main>
  );
}

export default CategoryPage;