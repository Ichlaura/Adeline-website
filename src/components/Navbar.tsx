import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/adelina-logo-header.png" alt="Adelina" />
      </div>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <div className={open ? "nav-links nav-open" : "nav-links"}>
        <a>Diseños</a>
        <a>Precios</a>
        <a>Personalizado</a>
        <a>Contacto</a>
      </div>

      <button className="nav-cta">Empezar</button>
    </nav>
  );
}

export default Navbar;