import type { CountryCode } from "../data/countries";

const content = {
  co: {
    title: "Todo incluido",
    subtitle: "Tu invitación digital incluye estas funciones:",
    price: "Desde $150.000 COP",
    items: [
      ["👥", "Nombres de invitados", "Crea invitaciones con nombres personalizados."],
      ["♾️", "Envío ilimitado", "Comparte por WhatsApp, correo y redes sociales."],
      ["🎵", "Música de fondo", "El tema musical que desees sonará en tu invitación."],
      ["⏳", "Cuenta regresiva", "Conteo en tiempo real hasta la fecha del evento."],
      ["📍", "Ubicación e indicaciones", "Mapa interactivo para que tus invitados lleguen fácil."],
      ["📸", "Álbum de fotos", "Los invitados pueden subir fotos y dar me gusta."],
      ["✅", "Lista de asistentes RSVP", "Confirma asistencia y organiza tus invitados."],
      ["🎁", "Regalos", "Sección para lluvia de sobres o información de regalos."],
      ["🖥️", "Panel de propietario", "Administra invitados, fotos, mesas y respuestas."],
      ["🪑", "Mesas", "Organiza invitados por mesa."],
      ["🍽️", "Menú", "Muestra las opciones del menú del evento."],
      ["✉️", "Sobre interactivo", "Tus invitados abren la invitación de forma elegante."],
    ],
  },
  pe: {
    title: "Todo incluido",
    subtitle: "Tu invitación digital incluye estas funciones:",
    price: "Desde S/ 110",
    items: [
      ["👥", "Nombres de invitados", "Crea invitaciones con nombres personalizados."],
      ["♾️", "Envío ilimitado", "Comparte por WhatsApp, correo y redes sociales."],
      ["🎵", "Música de fondo", "El tema musical que desees sonará en tu invitación."],
      ["⏳", "Cuenta regresiva", "Conteo en tiempo real hasta la fecha del evento."],
      ["📍", "Ubicación e indicaciones", "Mapa interactivo para que tus invitados lleguen fácil."],
      ["📸", "Álbum de fotos", "Los invitados pueden subir fotos y dar me gusta."],
      ["✅", "Lista de asistentes RSVP", "Confirma asistencia y organiza tus invitados."],
      ["🎁", "Regalos", "Sección para lluvia de sobres o información de regalos."],
      ["🖥️", "Panel de propietario", "Administra invitados, fotos, mesas y respuestas."],
      ["🪑", "Mesas", "Organiza invitados por mesa."],
      ["🍽️", "Menú", "Muestra las opciones del menú del evento."],
      ["✉️", "Sobre interactivo", "Tus invitados abren la invitación de forma elegante."],
    ],
  },
  us: {
    title: "Everything included",
    subtitle: "Your digital invitation includes these features:",
    price: "From $99 USD",
    items: [
      ["👥", "Guest names", "Create personalized invitations with each guest’s name."],
      ["♾️", "Unlimited sharing", "Share by WhatsApp, email and social media."],
      ["🎵", "Background music", "Your chosen song plays in the invitation."],
      ["⏳", "Countdown", "Live countdown to your event date."],
      ["📍", "Location and directions", "Interactive map so guests arrive easily."],
      ["📸", "Photo album", "Guests can upload photos and like them."],
      ["✅", "RSVP list", "Guests confirm attendance and you stay organized."],
      ["🎁", "Gift section", "Add registry, cash gifts or gift information."],
      ["🖥️", "Owner panel", "Manage guests, photos, tables and responses."],
      ["🪑", "Tables", "Organize guests by table."],
      ["🍽️", "Menu", "Show the event menu options."],
      ["✉️", "Interactive envelope", "Guests open the invitation beautifully."],
    ],
  },
  jp: {
    title: "すべて込み",
    subtitle: "デジタル招待状に含まれる機能：",
    price: "¥15,000〜",
    items: [
      ["👥", "ゲスト名", "ゲストごとに名前入り招待状を作成できます。"],
      ["♾️", "無制限共有", "WhatsApp、メール、SNSで共有できます。"],
      ["🎵", "BGM", "選んだ音楽を招待状で再生できます。"],
      ["⏳", "カウントダウン", "イベント当日までのカウントダウン。"],
      ["📍", "地図・アクセス", "ゲストが簡単に到着できる地図機能。"],
      ["📸", "写真アルバム", "ゲストが写真をアップロードできます。"],
      ["✅", "出欠確認", "出席確認を管理できます。"],
      ["🎁", "ギフト案内", "ギフトやお祝い金の案内を掲載できます。"],
      ["🖥️", "管理パネル", "ゲスト、写真、席、回答を管理できます。"],
      ["🪑", "席・テーブル", "ゲストをテーブルごとに整理できます。"],
      ["🍽️", "メニュー", "イベントのメニューを表示できます。"],
      ["✉️", "インタラクティブ封筒", "美しく招待状を開く演出。"],
    ],
  },
};

function Pricing() {
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";

  const text = content[currentCountry];

  return (
    <section className="features-pricing-section" id="prices">
      <div className="features-pricing-header">
        
        <h2>{text.title}</h2>
        <p>{text.subtitle}</p>
        <strong>{text.price}</strong>
      </div>

      <div className="features-list-grid">
        {text.items.map(([icon, title, description]) => (
          <article className="feature-list-item" key={title}>
            <div className="feature-icon">{icon}</div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;