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

        <span className="category-kicker">Adelina Invitations</span>
        <h1>{categoryName}</h1>
        <p>Explora todos los diseños disponibles para esta categoría.</p>
      </section>

      <section className="category-page-grid">
        {categoryCards.map((card) => (
          <article className="invite-card" key={card.title}>
            <img
              src={card.openImage}
              alt={card.title}
              className="invite-card-image"
            />

            <div className="card-content">
              <span>Adelina</span>
              <h3>{card.title}</h3>
              <p>{card.price}</p>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}

export default CategoryPage;