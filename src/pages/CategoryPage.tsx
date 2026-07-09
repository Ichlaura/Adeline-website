import { invitations } from "../data/invitations";
import type { CountryCode } from "../data/countries";

function CategoryPage() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const categoryName = decodeURIComponent(
    window.location.pathname.replace("/category/", "")
  );

  const categoryCards = invitations.filter(
    (item) =>
      item.category === categoryName &&
      item.country === currentCountry
  );

  return (
    <main className="category-page">
        <header className="category-header">

  <img
    src="/adelina-logo-header.png"
    alt="Adelina"
    className="category-logo"
  />

 

</header>
<button
  onClick={() => {
    sessionStorage.setItem("fromCategory", "true");
    window.location.href = "/";
  }}
>
  ← Volver
</button>

      <h1>{categoryName}</h1>

      <div className="category-page-grid">
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
      </div>
    </main>
  );
}

export default CategoryPage;