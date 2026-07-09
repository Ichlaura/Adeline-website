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
  {
    title: "Emerald Quinceañera",
    category: "Quince Años",
    country: "pe",
    price: "S/ 120",
    closedImage: "/quinceanosverde_close.jpeg",
    openImage: "/quinceanosverde_open.jpeg",
  },
  {
    title: "Robot Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "S/ 100",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },
  {
    title: "Yellow Baby",
    category: "Baby Shower",
    country: "pe",
    price: "S/ 100",
    closedImage: "/babyshower_yellow_close.jpeg",
    openImage: "/babyshower_yellow_open.jpeg",
  },
  {
    title: "Revelación de género",
    category: "Revelación de género",
    country: "pe",
    price: "S/ 100",
    closedImage: "/babyshower_yellow_close.jpeg",
    openImage: "/babyshower_yellow_open.jpeg",
  },
  {
    title: "Graduación Clásica",
    category: "Graduación",
    country: "pe",
    price: "S/ 100",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },

  {
    title: "Pink Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "S/ 100",
    closedImage: "/Pink Blessing.close.png",
    openImage: "/Pink Blessing.open.png",
  },
  {
    title: "Golden Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "S/ 100",
    closedImage: "/Golden Blessing.close.png",
    openImage: "/Golden Blessing.open.png",
  },
  {
    title: "Blue Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "S/ 100",
    closedImage: "/Blue Blessing.close.png",
    openImage: "/Blue Blessing.open.png",
  },
  {
    title: "Beige Communion",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "S/ 100",
    closedImage: "/Beige Communion.close.png",
    openImage: "/Beige Communion.open.png",
  },

  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 120",
    closedImage: "/Gold Wedding.close.png",
    openImage: "/Gold Wedding.open.png",
  },
  {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 120",
    closedImage: "/Blue.Wedding.close.png",
    openImage: "/Blue.Wedding.open.png",
  },
  {
    title: "Royal Emerald",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 120",
    closedImage: "/Royal Emerald.close.png",
    openImage: "/Royal Emerald.open.png",
  },
  {
    title: "Champagne Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 120",
    closedImage: "/Champagne.Wedding.close.png",
    openImage: "/Champagne.Wedding.open.png",
  },
  {
    title: "Pearl Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 120",
    closedImage: "/Pearl Wedding.close.png",
    openImage: "/Pearl Wedding.open.png",
  },
  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 120",
    closedImage: "/Silver.Wedding.close.png",
    openImage: "/Silver.Wedding.open.png",
  },
  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "S/ 120",
    closedImage: "/Green Wedding.close.png",
    openImage: "/Green Wedding.open.png",
  },
];