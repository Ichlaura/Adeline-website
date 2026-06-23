import CategoryRow from "../components/CategoryRow";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import HowItWorks from "../components/HowItWorks";
import FeaturedInvitations from "../components/FeaturedInvitations";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="home">
        <Navbar />
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Adelina Invitations</span>

          <h1>
            Digital invitations
            <br />
            with luxury feeling.
          </h1>

          <p>
            Bodas, quince años, cumpleaños, baby showers y eventos especiales.
          </p>

          <div className="hero-buttons">
            <button>Ver diseños</button>
            <button className="secondary">Crear personalizado</button>
          </div>
        </div>
      </section>

<Features />
<Showcase />
<HowItWorks />
<FeaturedInvitations />
      <CategoryRow title="Bodas" />
      <CategoryRow title="Quince Años" />
      <CategoryRow title="Cumpleaños" />
      <CategoryRow title="Baby Shower" />
      <CategoryRow title="Eventos Corporativos" />
    
    
<Footer />
    </main>
  );
}

export default Home;
