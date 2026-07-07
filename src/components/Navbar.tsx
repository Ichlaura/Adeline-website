function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
  <img src="/adelina-logo-header.png" alt="Adelina" />
</div>

      <div className="nav-links">
        <a>Diseños</a>
        <a>Precios</a>
        <a>Personalizado</a>
        <a>Contacto</a>
      </div>

      <button>Empezar</button>
    </nav>
  );
}

export default Navbar;