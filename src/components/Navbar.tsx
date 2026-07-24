import { useState } from "react";
import { countries, type CountryCode } from "../data/countries";

type NavbarProps = {
  onContactClick: () => void;
};

const navText = {
  co: {
    designs: "Diseños",
    contact: "Contacto",
    changeCountry: "🌎 Cambiar país",
    menu: "Abrir menú",
  },
  pe: {
    designs: "Diseños",
    contact: "Contacto",
    changeCountry: "🌎 Cambiar país",
    menu: "Abrir menú",
  },
    mx: {
    designs: "Diseños",
    contact: "Contacto",
    changeCountry: "🌎 Cambiar país",
    menu: "Abrir menú",
  },
  us: {
    designs: "Designs",
    contact: "Contact",
    changeCountry: "🌎 Change country",
    menu: "Open menu",
  },
  jp: {
    designs: "デザイン",
    contact: "お問い合わせ",
    changeCountry: "🌎 国を変更",
    menu: "メニューを開く",
  },
};

function Navbar({ onContactClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const selectedCountry = countries.find((c) => c.code === currentCountry);
  const text = navText[currentCountry];

  return (
    <nav className="navbar">
      <div
        className="nav-logo"
        onClick={() => {
          sessionStorage.setItem("fromCategory", "true");
          window.location.href = "/";
        }}
      >
        <img src="/adelina-logo-header.png" alt="Adelina" />
      </div>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label={text.menu}
      >
        ☰
      </button>

      <div className={open ? "nav-links nav-open" : "nav-links"}>
        <a
          onClick={() => {
            setOpen(false);
            document
              .getElementById("designs")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {text.designs}
        </a>

        <a
          onClick={() => {
            onContactClick();
            setOpen(false);
            setTimeout(() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
        >
          {text.contact}
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
              {text.changeCountry}
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