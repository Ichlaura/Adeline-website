import { useEffect, useRef, useState } from "react";
import { invitations } from "../data/invitations";
import type { CountryCode } from "../data/countries";

const rowText = {
  co: {
    seeAll: "Ver todo",
    viewDesign: "Ver diseño",
    closeEnvelope: "Cerrar sobre",
    tapToOpen: "Toca para abrir",
  },

  pe: {
    seeAll: "Ver todo",
    viewDesign: "Ver diseño",
    closeEnvelope: "Cerrar sobre",
    tapToOpen: "Toca para abrir",
  },

  mx: {
    seeAll: "Ver todo",
    viewDesign: "Ver diseño",
    closeEnvelope: "Cerrar sobre",
    tapToOpen: "Toca para abrir",
  },

  us: {
    seeAll: "View all",
    viewDesign: "View design",
    closeEnvelope: "Close envelope",
    tapToOpen: "Tap to open",
  },

  jp: {
    seeAll: "すべて見る",
    viewDesign: "デザインを見る",
    closeEnvelope: "封筒を閉じる",
    tapToOpen: "タップして開く",
  },
};

function CategoryRow({ title }: { title: string }) {
  const [openedCard, setOpenedCard] = useState<string | null>(null);
const [autoOpenedCard, setAutoOpenedCard] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = rowText[currentCountry];

  const categoryCards = invitations.filter(
    (item) =>
      item.category === title &&
      item.country === currentCountry
  );



useEffect(() => {
  if (categoryCards.length === 0) return;

  let index = 0;
  let closeTimer: ReturnType<typeof setTimeout>;

  const openNext = () => {
    const card = categoryCards[index];

    setAutoOpenedCard(card.openImage);

    closeTimer = setTimeout(() => {
      setAutoOpenedCard(null);

      index = (index + 1) % categoryCards.length;
    }, 3000);
  };

  openNext();

  const interval = setInterval(() => {
    openNext();
  }, 8000);

  return () => {
    clearInterval(interval);
    clearTimeout(closeTimer);
  };
}, [title, currentCountry]);




  useEffect(() => {
    categoryCards.forEach((card) => {
      const closed = new Image();
      closed.src = card.closedImage;

      const open = new Image();
      open.src = card.openImage;
    });
  }, [categoryCards]);

useEffect(() => {
  const row = rowRef.current;

  if (!row) return;

  const updateArrows = () => {
    const maxScroll = row.scrollWidth - row.clientWidth;

    setCanScrollLeft(row.scrollLeft > 5);
    setCanScrollRight(row.scrollLeft < maxScroll - 5);
  };

  updateArrows();

  row.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);

  return () => {
    row.removeEventListener("scroll", updateArrows);
    window.removeEventListener("resize", updateArrows);
  };
}, [categoryCards]);


  if (categoryCards.length === 0) {
    return null;
  }

  return (
    <section className="category-row">

      {/* TÍTULO DE LA CATEGORÍA */}
      <div className="category-header">
        <h2>{title}</h2>

        <button
          type="button"
          onClick={() => {
            window.location.href =
              `/category/${encodeURIComponent(title)}`;
          }}
        >
          {text.seeAll}
        </button>
      </div>

      {/* TARJETAS */}
      <div className="cards-container">

        <div className="cards-row" ref={rowRef}>

          {categoryCards.map((card) => {
        const isOpen =
  openedCard === card.openImage ||
  autoOpenedCard === card.openImage;

            return (
              <article
                className={`invite-card ${
                  isOpen ? "invite-card-open" : ""
                }`}
                key={`${card.country}-${card.openImage}`}
                role="button"
                tabIndex={0}

                /* COMPUTADORA:
                   pasar mouse abre el sobre */
                onMouseEnter={() => {
                  if (canHover) {
                    setOpenedCard(card.openImage);
                  }
                }}

                onMouseLeave={() => {
                  if (canHover) {
                    setOpenedCard(null);
                  }
                }}

                /* CELULAR:
                   tocar tarjeta abre/cierra */
                onClick={() => {
                  if (!canHover) {
                    setOpenedCard((current) =>
                      current === card.openImage
                        ? null
                        : card.openImage
                    );
                  }
                }}

                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();

                    setOpenedCard((current) =>
                      current === card.openImage
                        ? null
                        : card.openImage
                    );
                  }
                }}
              >

                {/* IMAGEN */}
                <img
                  src={
                    isOpen
                      ? card.openImage
                      : card.closedImage
                  }
                  alt={card.title}
                  className="invite-card-image"
                  loading="lazy"
                  decoding="async"
                />

                {/* INFORMACIÓN */}
                <div className="card-content">

                  <span>Adelina</span>

                  <h3>{card.title}</h3>

                  {/* SOLO CELULAR */}
                  {!canHover && (
                    <p>
                      {isOpen
                        ? text.closeEnvelope
                        : text.tapToOpen}
                    </p>
                  )}

                  {/* BOTÓN REAL VER DISEÑO */}
                  <button
                    type="button"
                    className="view-design-button"
                    onClick={(event) => {
                      event.stopPropagation();

                      window.location.href =
                        `/design?title=${encodeURIComponent(
                          card.title
                        )}` +
                        `&image=${encodeURIComponent(
                          card.openImage
                        )}`;
                    }}
                  >
                    {text.viewDesign}
                  </button>

                </div>
              </article>
            );
          })}

        </div>




{/* FLECHA IZQUIERDA - solo aparece si hay tarjetas antes */}
{canScrollLeft && (
  <button
    type="button"
    className="scroll-arrow-left"
    onClick={() =>
      rowRef.current?.scrollBy({
        left: -350,
        behavior: "smooth",
      })
    }
    aria-label="Anterior"
  >
    ❮
  </button>
)}

{/* FLECHA DERECHA - solo aparece si hay tarjetas después */}
{canScrollRight && (
  <button
    type="button"
    className="scroll-arrow"
    onClick={() =>
      rowRef.current?.scrollBy({
        left: 350,
        behavior: "smooth",
      })
    }
    aria-label="Siguiente"
  >
    ❯
  </button>
)}



      </div>
    </section>
  );
}

export default CategoryRow;