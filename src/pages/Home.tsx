import CategoryRow from "../components/CategoryRow";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
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
           for your special events
           </h1>

          <p>
            Bodas, quince años, cumpleaños, baby showers y eventos especiales.
          </p>

          <div className="hero-buttons">
            <button>Ver diseños</button>
           
          </div>
        </div>
      </section>




{/* <Features /> */}
<Showcase />
{/* <HowItWorks /> */}

 <FeaturedInvitations /> 
      

<CategoryRow title="Matrimonio" />
<CategoryRow title="Quince Años" />
<CategoryRow title="Cumpleaños y fiestas infantiles" />
<CategoryRow title="Baby Shower" />
<CategoryRow title="Primera comunión y bautismo" />
<CategoryRow title="Corporativo" />
<CategoryRow title="Celebraciones y fiestas" />
    
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
