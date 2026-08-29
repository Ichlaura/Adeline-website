
import royalQuinceanera from "../assets/collections/royal-quinceanera.png";
import type { CountryCode } from "../data/countries";



const content = {
  co: {
    tag: "NUESTRA COLECCIÓN",
    title: "Encuentra una invitación",
    accent: "para cada momento especial.",
    description:
      "Explora diseños creados para convertir cada celebración en una experiencia única.",
  },

  pe: {
    tag: "NUESTRA COLECCIÓN",
    title: "Encuentra una invitación",
    accent: "para cada momento especial.",
    description:
      "Explora diseños creados para convertir cada celebración en una experiencia única.",
  },

  mx: {
    tag: "NUESTRA COLECCIÓN",
    title: "Encuentra una invitación",
    accent: "para cada momento especial.",
    description:
      "Explora diseños creados para convertir cada celebración en una experiencia única.",
  },

  us: {
    tag: "OUR COLLECTION",
    title: "Find an invitation",
    accent: "for every special moment.",
    description:
      "Explore designs created to turn every celebration into a unique experience.",
  },

  jp: {
    tag: "コレクション",
    title: "大切な瞬間にぴったりの",
    accent: "招待状を見つけて。",
    description:
      "特別な一日を、より心に残る体験にするためのデザインをご覧ください。",
  },
};

function FeaturedInvitations() {



const currentCountry =
  (localStorage.getItem("adelina-country") as CountryCode) || "co";

const t = content[currentCountry];


   const items = [
    /*{
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
    },*/
    {
      title: "Royal Quinceañera",
      price: "$49",
      image: royalQuinceanera,
    },
 
  ];

  return (
    <section className="featured-section">
      <div className="featured-header">
  <span className="featured-eyebrow">
    {t.tag}
  </span>

  <h2>
    {t.title}
    <span>{t.accent}</span>
  </h2>

  <p>
    {t.description}
  </p>
</div>

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