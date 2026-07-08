export type CountryCode = "co" | "pe" | "us" | "jp";

export type Invitation = {
  title: string;
  category: string;
  country: CountryCode;
  price: string;
  closedImage: string;
  openImage: string;
};

export const peruInvitations: Invitation[] = [

  // ==========================
  // PERÚ
  // ==========================

  {
    title: "Quinceañera Elegante",
    category: "Quince Años",
    country: "pe",
    price: "S/ 120",
    closedImage: "/quinceanosverde_close.jpeg",
    openImage: "/quinceanosverde_open.jpeg",
  },
  {
    title: "Boda Elegante",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 150",
    closedImage: "/emeraldwedding_close.jpeg",
    openImage: "/emeraldwedding_open.jpeg",
  },
  {
    title: "Cumpleaños Infantil",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "S/ 100",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },
  {
    title: "Baby Shower",
    category: "Baby Shower",
    country: "pe",
    price: "S/ 100",
    closedImage: "/babyshower_yellow_close.jpeg",
    openImage: "/babyshower_yellow_open.jpeg",
  },
  {
    title: "Graduación",
    category: "Graduación",
    country: "pe",
    price: "S/ 100",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },
  {
    title: "Primera Comunión",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "S/ 100",
    closedImage: "/bautismo_close.jpeg",
    openImage: "/bautismo_open.jpeg",
  },

];