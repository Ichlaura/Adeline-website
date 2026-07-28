import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Pricing() {
  return (
    <>
      <Navbar />

      <main className="pricing-page">
        <section className="category-hero">
          <span className="category-kicker">
            Adelina Invitations
          </span>

          <h1>Pricing</h1>

          <p>
            Choose the perfect plan for your event.
          </p>
        </section>

        <section className="pricing-section">
          Pricing table coming soon...
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Pricing;