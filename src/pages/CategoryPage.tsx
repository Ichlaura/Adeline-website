import { useState } from "react";
import "../styles/CategoryPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { invitations } from "../data/invitations";
import type { CountryCode } from "../data/countries";

const categoryText = {
  co: {
    back: "← Home",
    kicker: "Colección Adelina",
    subtitle: "Elige el diseño que mejor combina con tu celebración.",
  
    button: "Ver diseño",
    search: "Buscar por tema: sirena, animales, vaquero...",
  },
  pe: {
    back: "← Home",
    kicker: "Colección Adelina",
    subtitle: "Elige el diseño que mejor combina con tu celebración.",
    
    button: "Ver diseño",
    search: "Buscar por tema: sirena, animales, vaquero...",
  },
    mx: {
    back: "← Home",
    kicker: "Colección Adelina",
    subtitle: "Elige el diseño que mejor combina con tu celebración.",
    
    button: "Ver diseño",
    search: "Buscar por tema: sirena, animales, vaquero...",
  },
  us: {
    back: "← Home",
    kicker: "Adelina Collection",
    subtitle: "Choose the design that best matches your celebration.",
    
    button: "View design",
    search: "Search by theme: mermaid, animals, cowboy...",
  },
  jp: {
    back: "← ホーム",
    kicker: "Adelina コレクション",
    subtitle: "お祝いにぴったりのデザインをお選びください。",
    
    button: "デザインを見る",
    search: "テーマで検索: 人魚, 動物, カウボーイ...",
  },
};

function CategoryPage() {
  const [search, setSearch] = useState("");

const [searchOpen, setSearchOpen] = useState(false);
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = categoryText[currentCountry];

  const categoryName = decodeURIComponent(
    window.location.pathname.replace("/category/", "")
  );

  const categoryCards = invitations.filter(
    (item) => item.category === categoryName && item.country === currentCountry
  );




const filteredCards = categoryCards.filter((card) => {
  const term = search.toLowerCase().trim();

  if (!term) return true;

  const searchableCard = card as typeof card & {
    keywords?: string[];
  };

  const titleMatches = card.title
    .toLowerCase()
    .includes(term);

  const keywordMatches =
    searchableCard.keywords?.some((keyword) =>
      keyword.toLowerCase().includes(term)
    ) ?? false;

  return titleMatches || keywordMatches;
});







return (
  <main className="category-page">
    <Navbar />

    {/* CABECERA DE LA CATEGORÍA */}
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

    



{/* BUSCADOR */}
<div className={`category-search ${searchOpen ? "open" : ""}`}>
  <button
    type="button"
    className="category-search-button"
    onClick={() => setSearchOpen((prev) => !prev)}
    aria-label={text.search}
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="category-search-icon"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  </button>

  {searchOpen && (
    <input
      autoFocus
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder=""
      aria-label={text.search}
    />
  )}
</div>




    </section>

    {/* TARJETAS */}
    <section id="designs" className="category-page-grid">
      {filteredCards.map((card) => (
        <article
          className="category-invite-card"
          key={card.title}
        >
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

            <button>{text.button}</button>
          </div>
        </article>
      ))}
    </section>

    <Footer />
  </main>
);
}

export default CategoryPage;