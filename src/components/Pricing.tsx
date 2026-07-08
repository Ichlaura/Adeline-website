import type { CountryCode } from "../data/countries";

const content = {
  co: {
    title: "Todo incluido",
    subtitle: "Tu invitación digital incluye estas funciones:",
    price: "Desde $150.000 COP",
    items: [
  ["✉️", "Sobre interactivo", "Tus invitados abren la invitación como una experiencia especial."],
  ["👥", "Invitaciones personalizadas", "Cada invitado puede recibir su propio link con su nombre."],
  ["✅", "Confirmación RSVP", "Tus invitados confirman si asistirán o no."],
  ["🖥️", "Panel administrativo", "Maneja invitados, respuestas, mesas, fotos y música."],
  ["📍", "Google Maps", "Tus invitados abren la ubicación con un solo clic."],
  ["📅", "Google Calendar", "Agregan el evento a su calendario fácilmente."],
  ["⏳", "Cuenta regresiva", "Conteo automático hasta la fecha del evento."],
  ["🎵", "Música personalizada", "Puedes subir tu propio MP3 o canción especial."],
  ["📸", "Álbum de fotos", "Los invitados pueden subir fotos del evento."],
  ["❤️", "Foto ganadora", "Los invitados pueden dar me gusta y elegir la foto favorita."],
  ["🪑", "Mesas", "Organiza invitados por mesa desde el panel."],
  ["🍽️", "Menú", "Muestra las opciones de comida del evento."],
  ["🎁", "Regalos", "Agrega lluvia de sobres, cuenta bancaria o lista de regalos."],
  ["♾️", "Tarjetas ilimitadas", "Comparte tu invitación todas las veces que quieras."],
  ["🌐", "Página web del evento", "Tu evento tendrá su propio enlace digital."],
],
  },
  pe: {
    title: "Todo incluido",
    subtitle: "Tu invitación digital incluye estas funciones:",
    price: "Desde S/ 110",
    items: [
  ["✉️", "Sobre interactivo", "Tus invitados abren la invitación como una experiencia especial."],
  ["👥", "Invitaciones personalizadas", "Cada invitado puede recibir su propio link con su nombre."],
  ["✅", "Confirmación RSVP", "Tus invitados confirman si asistirán o no."],
  ["🖥️", "Panel administrativo", "Maneja invitados, respuestas, mesas, fotos y música."],
  ["📍", "Google Maps", "Tus invitados abren la ubicación con un solo clic."],
  ["📅", "Google Calendar", "Agregan el evento a su calendario fácilmente."],
  ["⏳", "Cuenta regresiva", "Conteo automático hasta la fecha del evento."],
  ["🎵", "Música personalizada", "Puedes subir tu propio MP3 o canción especial."],
  ["📸", "Álbum de fotos", "Los invitados pueden subir fotos del evento."],
  ["❤️", "Foto ganadora", "Los invitados pueden dar me gusta y elegir la foto favorita."],
  ["🪑", "Mesas", "Organiza invitados por mesa desde el panel."],
  ["🍽️", "Menú", "Muestra las opciones de comida del evento."],
  ["🎁", "Regalos", "Agrega lluvia de sobres, cuenta bancaria o lista de regalos."],
  ["♾️", "Tarjetas ilimitadas", "Comparte tu invitación todas las veces que quieras."],
  ["🌐", "Página web del evento", "Tu evento tendrá su propio enlace digital."],
],
  },
  us: {
    title: "Everything included",
    subtitle: "Your digital invitation includes these features:",
    price: "From $99 USD",
   items: [
  ["✉️", "Interactive envelope", "Guests open the invitation as a special experience."],
  ["👥", "Personalized invitations", "Each guest can receive their own named link."],
  ["✅", "RSVP confirmation", "Guests confirm whether they will attend or not."],
  ["🖥️", "Admin panel", "Manage guests, responses, tables, photos and music."],
  ["📍", "Google Maps", "Guests open the location with one click."],
  ["📅", "Google Calendar", "Guests can add the event to their calendar."],
  ["⏳", "Countdown", "Automatic countdown to the event date."],
  ["🎵", "Custom music", "Upload your own MP3 or special song."],
  ["📸", "Photo album", "Guests can upload event photos."],
  ["❤️", "Winning photo", "Guests can like photos and choose the favorite one."],
  ["🪑", "Tables", "Organize guests by table from the admin panel."],
  ["🍽️", "Menu", "Show the event food options."],
  ["🎁", "Gifts", "Add registry, cash gifts or gift information."],
  ["♾️", "Unlimited cards", "Share your invitation as many times as you want."],
  ["🌐", "Event website", "Your event gets its own digital link."],
],
  },
  jp: {
    title: "すべて込み",
    subtitle: "デジタル招待状に含まれる機能：",
    price: "¥15,000〜",
   items: [
  ["✉️", "インタラクティブ封筒", "ゲストが特別な演出で招待状を開けます。"],
  ["👥", "個別招待リンク", "ゲストごとに名前入りリンクを作成できます。"],
  ["✅", "出欠確認", "ゲストの出席・欠席を確認できます。"],
  ["🖥️", "管理パネル", "ゲスト、回答、席、写真、音楽を管理できます。"],
  ["📍", "Googleマップ", "ワンクリックで会場の場所を開けます。"],
  ["📅", "Googleカレンダー", "イベントをカレンダーに追加できます。"],
  ["⏳", "カウントダウン", "イベント日まで自動でカウントダウンします。"],
  ["🎵", "カスタム音楽", "好きなMP3や特別な曲を設定できます。"],
  ["📸", "写真アルバム", "ゲストが写真をアップロードできます。"],
  ["❤️", "人気写真", "写真にいいねして人気写真を選べます。"],
  ["🪑", "席・テーブル", "管理パネルで席やテーブルを整理できます。"],
  ["🍽️", "メニュー", "料理メニューを表示できます。"],
  ["🎁", "ギフト案内", "ギフトやお祝い金の案内を掲載できます。"],
  ["♾️", "無制限カード", "招待状を何度でも共有できます。"],
  ["🌐", "イベントページ", "イベント専用のデジタルリンクができます。"],
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