import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { invitations } from "../data/invitations";
import {
  countrySettings,
  type CountryCode,
} from "../data/countries";
import "../styles/OrderPage.css";

type Plan = "basic" | "standard" | "premium";

const orderText = {
  co: {
    selectedDesign: "Has elegido este diseño",
    choosePlan: "Elige tu paquete",
    choosePlanText:
      "Selecciona el paquete que mejor se adapte a tu evento.",
    basic: "Basic",
    standard: "Standard",
    premium: "Premium",
    select: "Elegir",
    selected: "Seleccionado",
    continue: "Continuar con este paquete",
    notFound: "Diseño no encontrado.",
    back: "← Volver",
  },

  pe: {
    selectedDesign: "Has elegido este diseño",
    choosePlan: "Elige tu paquete",
    choosePlanText:
      "Selecciona el paquete que mejor se adapte a tu evento.",
    basic: "Basic",
    standard: "Standard",
    premium: "Premium",
    select: "Elegir",
    selected: "Seleccionado",
    continue: "Continuar con este paquete",
    notFound: "Diseño no encontrado.",
    back: "← Volver",
  },

  mx: {
    selectedDesign: "Has elegido este diseño",
    choosePlan: "Elige tu paquete",
    choosePlanText:
      "Selecciona el paquete que mejor se adapte a tu evento.",
    basic: "Basic",
    standard: "Standard",
    premium: "Premium",
    select: "Elegir",
    selected: "Seleccionado",
    continue: "Continuar con este paquete",
    notFound: "Diseño no encontrado.",
    back: "← Volver",
  },

  us: {
    selectedDesign: "You selected this design",
    choosePlan: "Choose your package",
    choosePlanText:
      "Select the package that best fits your event.",
    basic: "Basic",
    standard: "Standard",
    premium: "Premium",
    select: "Select",
    selected: "Selected",
    continue: "Continue with this package",
    notFound: "Design not found.",
    back: "← Back",
  },

  jp: {
    selectedDesign: "このデザインを選択しました",
    choosePlan: "プランを選択",
    choosePlanText:
      "イベントに合ったプランをお選びください。",
    basic: "ベーシック",
    standard: "スタンダード",
    premium: "プレミアム",
    select: "選択する",
    selected: "選択済み",
    continue: "このプランで続ける",
    notFound: "デザインが見つかりません。",
    back: "← 戻る",
  },
};

function OrderPage() {
  const params = new URLSearchParams(window.location.search);

  const title = params.get("title");
  const image = params.get("image");

  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = orderText[currentCountry];
  const settings = countrySettings[currentCountry];

  const [selectedPlan, setSelectedPlan] =
    useState<Plan | null>(null);

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

        <main className="order-page">
          <p>{text.notFound}</p>
        </main>

        <Footer />
      </>
    );
  }

  const plans = [
    {
      id: "basic" as Plan,
      name: text.basic,
      price: settings.pricing.basic,
    },
    {
      id: "standard" as Plan,
      name: text.standard,
      price: settings.pricing.standard,
    },
    {
      id: "premium" as Plan,
      name: text.premium,
      price: settings.pricing.premium,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="order-page">

        <button
          type="button"
          className="order-back-button"
          onClick={() => window.history.back()}
        >
          {text.back}
        </button>

        {/* DISEÑO ELEGIDO */}
        <section className="order-selected-design">

          <div className="order-design-image">
            <img
              src={design.openImage}
              alt={design.title}
            />
          </div>

          <div className="order-design-info">
            <span>ADELINA</span>

            <h1>{design.title}</h1>

            <p>{design.category}</p>

            <h2>{text.selectedDesign}</h2>
          </div>

        </section>

        {/* PAQUETES */}
        <section className="order-plans-section">

          <div className="order-plans-header">
            <span>ADELINA</span>

            <h2>{text.choosePlan}</h2>

            <p>{text.choosePlanText}</p>
          </div>

          <div className="order-plans-grid">

            {plans.map((plan) => {
              const isSelected =
                selectedPlan === plan.id;

              return (
                <article
                  key={plan.id}
                  className={`order-plan-card ${
                    isSelected
                      ? "order-plan-card-selected"
                      : ""
                  }`}
                >
                  <h3>{plan.name}</h3>

                  <p className="order-plan-price">
                    {plan.price}
                  </p>

                  <button
                    type="button"
                    className="order-plan-button"
                    onClick={() =>
                      setSelectedPlan(plan.id)
                    }
                  >
                    {isSelected
                      ? text.selected
                      : text.select}
                  </button>
                </article>
              );
            })}

          </div>

          {selectedPlan && (
            <div className="order-continue-container">

              <button
                type="button"
                className="order-continue-button"
              >
                {text.continue}
              </button>

            </div>
          )}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default OrderPage;