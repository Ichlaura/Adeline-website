const sampleCards = [
  "Emerald Wedding",
  "Golden Romance",
  "Black Tie",
  "Blush Garden",
  "Royal Night",
];

function CategoryRow({ title }: { title: string }) {
  return (
    <section className="category-row">
      <div className="category-header">
        <h2>{title}</h2>
        <button>Ver todo</button>
      </div>

      <div className="cards-row">
        {sampleCards.map((card) => (
          <article className="invite-card" key={card}>
            <div className="card-glow"></div>

            <div className="card-content">
              <span>Adelina</span>
              <h3>{card}</h3>
              <p>Ver diseño</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryRow;