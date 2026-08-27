function Features() {
  return (
    <section className="features">
      <h2>Why Adelina?</h2>

      <div className="features-grid">
        <article className="feature-card">
          <span>✨</span>
          <h3>Animated Invitations</h3>
          <p>
            Elegant envelopes and immersive experiences.
          </p>
        </article>

        <article className="feature-card">
          <span>🎵</span>
          <h3>Custom Music</h3>
          <p>
            Upload your favorite song and make it yours.
          </p>
        </article>

        <article className="feature-card">
          <span>📱</span>
          <h3>Digital RSVP</h3>
          <p>
            Guests confirm attendance instantly.
          </p>
        </article>

        <article className="feature-card">
          <span>🎨</span>
          <h3>Custom Designs</h3>
          <p>
            Create a completely unique invitation.
          </p>
        </article>

        <article className="feature-card demo-card">
          <span>💌</span>

          <h3>Try a Live Invitation</h3>

          <p>
            Experience an Adelina invitation just like your guests will.
          </p>

          <a
            href="AQUI-VA-LA-URL-DE-TU-APP/invitation/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-button"
          >
            View Live Demo
          </a>
        </article>
      </div>
    </section>
  );
}

export default Features;