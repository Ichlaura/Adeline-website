import emeraldWedding from "../assets/collections/emerald-wedding.png";
import goldenRomance from "../assets/collections/golden-romance.png";
import blackTieLuxury from "../assets/collections/black-tie-luxury.png";
import royalQuinceanera from "../assets/collections/royal-quinceanera.png";

function FeaturedInvitations() {
  const items = [
    {
      title: "Emerald Luxury Wedding",
      price: "$49",
      image: emeraldWedding,
    },
    {
      title: "Golden Romance",
      price: "$49",
      image: goldenRomance,
    },
    {
      title: "Black Tie Luxury",
      price: "$59",
      image: blackTieLuxury,
    },
    {
      title: "Royal Quinceañera",
      price: "$49",
      image: royalQuinceanera,
    },
  
  ];

  return (
    <section className="featured-section">
      <h2>Featured Invitations</h2>

      <div className="featured-grid">
        {items.map((item) => (
          <article className="featured-card" key={item.title}>
            <div
              className="featured-image"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />

            <div className="featured-content">
              <h3>{item.title}</h3>

              <span>Starting at {item.price}</span>

              <button>View Design</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedInvitations;