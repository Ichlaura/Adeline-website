import type { CountryCode } from "../data/countries";

function Footer() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = {
    co: {
      tagline: "Invitaciones digitales para tus eventos especiales",
      services:
        "Matrimonios • Quince Años • Cumpleaños • Baby Shower • Eventos Corporativos",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      rights: "© 2026 Adelina. Todos los derechos reservados.",
    },

    pe: {
      tagline: "Invitaciones digitales para tus eventos especiales",
      services:
        "Matrimonios • Quince Años • Cumpleaños • Baby Shower • Eventos Corporativos",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      rights: "© 2026 Adelina. Todos los derechos reservados.",
    },
    mx: {
      tagline: "Invitaciones digitales para tus eventos especiales",
      services:
        "Matrimonios • Quince Años • Cumpleaños • Baby Shower • Eventos Corporativos",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      rights: "© 2026 Adelina. Todos los derechos reservados.",
    },
    us: {
      tagline: "Digital invitations for your special events",
      services:
        "Weddings • Quinceañeras • Birthdays • Baby Showers • Corporate Events",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "© 2026 Adelina. All rights reserved.",
    },

    jp: {
      tagline: "特別な日のためのデジタル招待状",
      services:
        "結婚式 • 成人式 • 誕生日 • ベビーシャワー • 法人イベント",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      rights: "© 2026 Adelina. All rights reserved.",
    },
  };

  const t = text[currentCountry];

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/adelina-logo.png" alt="Adelina" />
      </div>

      <p className="footer-tagline">{t.tagline}</p>

      <p className="footer-services">{t.services}</p>

      

<div className="footer-links social-links">

  <a
    href="https://www.instagram.com/adelina_invitations/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/instagram.png" alt="Instagram" />
    <span>Instagram</span>
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61590581594475"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/facebook.png" alt="Facebook" />
    <span>Facebook</span>
  </a>

  <a
    href="https://www.tiktok.com/@adelina_invitations"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/tiktok.png" alt="TikTok" />
    <span>TikTok</span>
  </a>

</div>



      <div className="footer-links">
        <a href="#">{t.privacy}</a>
        <a href="#">{t.terms}</a>
      </div>

      <p className="footer-copy">{t.rights}</p>
    </footer>
  );
}

export default Footer;