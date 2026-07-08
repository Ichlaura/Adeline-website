import { useRef, useState } from "react";
import { invitations } from "../data/invitations";
import type { CountryCode } from "../data/countries";

function CategoryRow({ title }: { title: string }) {
  const [openedCard, setOpenedCard] = useState<string | null>(null);
const rowRef = useRef<HTMLDivElement>(null);
  
const currentCountry =
  (localStorage.getItem("adelina-country") as CountryCode) || "co";

const categoryCards = invitations.filter(
  (item) =>
    item.category === title &&
    item.country === currentCountry
);
  if (categoryCards.length === 0) return null;

  return (
    <section className="category-row">
      <div className="category-header">
        <h2>{title}</h2>
        <button
  onClick={() => {
    window.location.href = `/category/${encodeURIComponent(title)}`;
  }}
>
  Ver todo
</button>
      </div>



<div className="cards-container">

  <div className="cards-row" ref={rowRef}>
    {categoryCards.map((card) => {
      const isOpen = openedCard === card.title;

      return (
        <article
          className="invite-card"
          key={card.title}
          onMouseEnter={() => setOpenedCard(card.title)}
onMouseLeave={() => setOpenedCard(null)}
onClick={() => setOpenedCard(isOpen ? null : card.title)}
        >
          <img
            src={isOpen ? card.openImage : card.closedImage}
            alt={card.title}
            className="invite-card-image"
            loading="lazy"
            decoding="async"
          />




              <div className="card-content">
                <span>Adelina</span>
                <h3>{card.title}</h3>
                <p>{isOpen ? "Cerrar sobre" : "Ver diseño"}</p>
              </div>
            </article>
          );
        })}

</div>


<button
  className="scroll-arrow-left"
  onClick={() =>
    rowRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    })
  }
>
  ❮
</button>

<button
  className="scroll-arrow"
  onClick={() =>
    rowRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    })
  }
>
  ❯
</button>


      </div>
    </section>
  );
}

export default CategoryRow;