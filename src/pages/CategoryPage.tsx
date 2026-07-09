import "../styles/CategoryPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { invitations } from "../data/invitations";
import type { CountryCode } from "../data/countries";

function CategoryPage() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const categoryName = decodeURIComponent(
    window.location.pathname.replace("/category/", "")
  );

  const categoryCards = invitations.filter(
    (item) => item.category === categoryName && item.country === currentCountry
  );

  return (
    <main className="category-page">
      <Navbar onContactClick={() => {}} />

      <section className="category-hero">
        <button
          className="back-button"
          onClick={() => {
            sessionStorage.setItem("fromCategory", "true");
            window.location.href = "/";
          }}
        >
          ← Volver
        </button>

        <span className="category-kicker">Adelina Collection</span>
        <h1>{categoryName}</h1>
        <p>Elige el diseño que mejor combina con tu celebración.</p>
      </section>

      <section className="category-page-grid">
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
              <p>Desde {card.price}</p>
              <button>Ver diseño</button>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}

export default CategoryPage;