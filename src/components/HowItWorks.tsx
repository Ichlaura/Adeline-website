function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Design",
      text: "Browse our luxury invitation collections.",
    },
    {
      number: "02",
      title: "Personalize",
      text: "Add your event details, images and music.",
    },
    {
      number: "03",
      title: "Share",
      text: "Send your private invitation link to guests.",
    },
    {
      number: "04",
      title: "Track RSVPs",
      text: "Receive confirmations instantly.",
    },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;