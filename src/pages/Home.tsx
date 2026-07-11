import { useState } from "react";
import CategoryRow from "../components/CategoryRow";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";

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
  const [showContact, setShowContact] = useState(false);
  return (
    <main className="home">
        <Navbar onContactClick={() => setShowContact(true)} />
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



  <Pricing />

<section id="designs">
  {settings.categories.map((category) => (
    <CategoryRow key={category} title={category} />
  ))}
</section>



{showContact && <Contact />}



<Footer />




<a
  href="https://wa.me/573124182741?text=Hola%20quiero%20información%20sobre%20las%20invitaciones."
  className="whatsapp-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/whatsapp.png" alt="WhatsApp" />
</a>



    </main>
  );
}




     
      
  
export default Home;
