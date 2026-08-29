
import CategoryRow from "../components/CategoryRow";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import type { CountryCode } from "../data/countries";
import LiveDemo from "../components/LiveDemo";

type HomeProps = {
  settings: {
    heroTag: string;
    heroTitle: string;
    heroText: string;
    viewDesigns: string;
    categories: string[];
  };
};

function Home({ settings }: HomeProps) {

  const currentCountry =
  (localStorage.getItem("adelina-country") as CountryCode) || "co";
  return (
    <main className="home">
<Navbar />      
<section className="hero">
        <div className="hero-content">
          <span className="hero-tag">{settings.heroTag}</span>
          
          <h1>
  {settings.heroTitle.split("\n").map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ))}
</h1>

        <p>{settings.heroText}</p>

          <div className="hero-buttons">


<button
  onClick={() =>
    document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" })
  }
>
  {settings.viewDesigns}
</button>

          </div>
        </div>
      </section>




{/* <Features /> */}
<Showcase />

<LiveDemo />



  <Pricing />




<section className="designs-intro">
  <span className="designs-eyebrow">
    {currentCountry === "us"
      ? "OUR COLLECTION"
      : currentCountry === "jp"
      ? "コレクション"
      : "NUESTRA COLECCIÓN"}
  </span>

  <h2>
    {currentCountry === "us"
      ? "Find the perfect invitation"
      : currentCountry === "jp"
      ? "特別な日にぴったりの招待状"
      : "Encuentra la invitación perfecta"}

    <span>
      {currentCountry === "us"
        ? " for every celebration."
        : currentCountry === "jp"
        ? "を見つけて。"
        : " para cada celebración."}
    </span>
  </h2>

  <p>
    {currentCountry === "us"
      ? "Explore our collection and discover a design made for your special moment."
      : currentCountry === "jp"
      ? "さまざまなデザインから、大切な一日にぴったりの招待状をお選びください。"
      : "Explora nuestra colección y descubre un diseño creado para tu momento especial."}
  </p>
</section>

<section id="designs"></section>




<section id="designs">
  {settings.categories.map((category) => (
    <CategoryRow key={category} title={category} />
  ))}
</section>







<Footer />


{currentCountry === "jp" ? (
  <a
    href="https://line.me/ti/p/TU_LINE_ID"
    className="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/line.webp" alt="LINE" />
  </a>
) : (
  <a
    href="https://wa.me/573124182741?text=Hola%20quiero%20información%20sobre%20las%20invitaciones."
    className="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/whatsapp.webp" alt="WhatsApp" />
  </a>
)}



    </main>
  );
}




     
      
  
export default Home;
