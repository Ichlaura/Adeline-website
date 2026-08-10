import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CategoryPage.css";
import "../styles/Pricing.css";

type Props = {
  settings: any;
};

function Pricing({ settings }: Props) {
  return (
    <>
      <Navbar />

      <main className="pricing-page">
        <section className="category-hero">
          <button
            className="back-button"
            onClick={() => {
              sessionStorage.setItem("fromCategory", "true");
              window.location.href = "/";
            }}
          >
           ← {settings.pricing.back}
          </button>

          <span className="category-kicker">
           {settings.heroTag}
          </span>

          <h1>{settings.pricing.title}</h1>

        
            <p>{settings.pricing.description}</p>
        
        </section>





        <section className="pricing-section">





<table className="pricing-table">
  <thead>
    <tr>
      <th>{settings.pricing.features}</th>
      <th>{settings.pricing.basicPlan}</th>

      <th>{settings.pricing.standardPlan}</th>

      <th>{settings.pricing.premiumPlan}</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{settings.pricing.price}</td>
      <td>{settings.pricing.basic}</td>
      <td>{settings.pricing.standard}</td>
      <td>{settings.pricing.premium}</td>
    </tr>

<tr>
  <td>{settings.pricing.multilingualInvitations}</td>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
</tr>


    <tr>
      <td>{settings.pricing.interactiveEnvelope}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.eventWebsite}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.maps}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.calendar}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>


<tr>
  <td>{settings.pricing.eventProgram}</td>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
</tr>

    <tr>
      <td>{settings.pricing.rsvp}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.adminPanel}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.music}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.qrCode}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.giftSectionText}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.unlimitedSharing}</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.countdown}</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.photoAlbum}</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.photoVoting}</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.customPhoto}</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.personalizedInvitations}</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.tableAssignment}</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
    </tr>

    <tr>
      <td>{settings.pricing.advancedGiftSection}</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>




</section>


      </main>

      <Footer />
    </>
  );
}

export default Pricing;