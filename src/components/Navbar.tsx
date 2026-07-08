import { useState } from "react";
import { countries, type CountryCode } from "../data/countries";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const selectedCountry = countries.find((c) => c.code === currentCountry);

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
        <a onClick={() => document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" })}>
  Diseños
</a>





<a onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
  Contacto
</a>

        <div className="country-switcher">
          <button
            className="nav-cta"
            onClick={() => setCountryOpen(!countryOpen)}
          >
            <img
              src={selectedCountry?.flag}
              alt={selectedCountry?.name}
              className="country-flag-small"
            />
            {selectedCountry?.name} ▼
          </button>

          <div className={countryOpen ? "country-menu show" : "country-menu"}>
            <button
  className="change-country"
  onClick={() => {
    localStorage.removeItem("adelina-country");
    window.location.href = "/";
  }}
>
  🌎 Select another country
</button>
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => {
                  localStorage.setItem("adelina-country", country.code);
                  window.location.href = "/";
                }}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="country-flag-small"
                />
                {country.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;