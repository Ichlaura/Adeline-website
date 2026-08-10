import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { invitations } from "../data/invitations";
import type { CountryCode } from "../data/countries";
import "../styles/DesignPage.css";

const designText = {
  co: {
    back: "← Volver",
    choose: "Elegir este diseño",
    notFound: "Diseño no encontrado.",
  },

  pe: {
    back: "← Volver",
    choose: "Elegir este diseño",
    notFound: "Diseño no encontrado.",
  },

  mx: {
    back: "← Volver",
    choose: "Elegir este diseño",
    notFound: "Diseño no encontrado.",
  },

  us: {
    back: "← Back",
    choose: "Choose this design",
    notFound: "Design not found.",
  },

  jp: {
    back: "← 戻る",
    choose: "このデザインを選ぶ",
    notFound: "デザインが見つかりません。",
  },
};

function DesignPage() {
  const params = new URLSearchParams(window.location.search);

  const title = params.get("title");
  const image = params.get("image");

  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = designText[currentCountry];

  const design = invitations.find(
    (item) =>
      item.country === currentCountry &&
      item.title === title &&
      item.openImage === image
  );

  if (!design) {
    return (
      <>
        <Navbar />

        <main className="design-page">
          <p>{text.notFound}</p>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="design-page">

        <button
          type="button"
          className="design-back-button"
          onClick={() => window.history.back()}
        >
          {text.back}
        </button>

        <section className="design-detail">

          <div className="design-detail-image">
            <img
              src={design.openImage}
              alt={design.title}
            />
          </div>

          <div className="design-detail-info">

            <span>ADELINA</span>

            <h1>{design.title}</h1>

            <p className="design-detail-category">
              {design.category}
            </p>

            

<button
  type="button"
  className="design-select-button"
  onClick={() => {
    window.location.href =
      `/order?title=${encodeURIComponent(design.title)}` +
      `&image=${encodeURIComponent(design.openImage)}`;
  }}
>
  {text.choose}
</button>


          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default DesignPage;