import { countries, type CountryCode } from "../data/countries";

type Props = {
  onSelect: (country: CountryCode) => void;
};

function CountrySelector({ onSelect }: Props) {
  return (
    <main className="country-page">
      <div className="country-card">
        <img
          src="/adelina-logo-header.png"
          alt="Adelina"
          className="country-logo"
        />

       <h1>
  Choose your country
  <br />
  Elige tu país
</h1>

        <div className="country-grid">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => onSelect(country.code)}
              className="country-button"
            >
             <span>{country.flag}</span>
<span>{country.name}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CountrySelector;