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
  title: "Revelación de género",
  category: "Revelación de género",
  country: "co",
  price: "$39",
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
    title: "Pink Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Pink Blessing.close.jpeg",
    openImage: "/Pink Blessing.open.jpeg",
  },

  {
    title: "Golden Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Golden Blessing.close.jpeg",
    openImage: "/Golden Blessing.open.jpeg",
  },

  {
    title: "Blue Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Blue Blessing.close.jpeg",
    openImage: "/Blue Blessing.open.jpeg",
  },

  {
    title: "Beige Communion",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Beige Communion.close.jpeg",
    openImage: "/Beige Communion.open.jpeg",
  },

  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Gold Wedding.close.png",
    openImage: "/Gold Wedding.open.png",
   },

  {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Blue.Wedding.close.png",
    openImage: "/Blue.Wedding.open.png",
  },
  {
    title: "Royal Emerald",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Royal Emerald.close.png",
    openImage: "/Royal Emerald.open.png",
  },
  {
    title: "Champagne Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Champagne.Wedding.close.png",
    openImage: "/Champagne.Wedding.open.png",
  },

  {
    title: "Pearl Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Pearl Wedding.close.png",
    openImage: "/Pearl Wedding.open.png",
  },

  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Silver.Wedding.close.png",
    openImage: "/Silver.Wedding.open.png",
  },

  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Green Wedding.close.png",
    openImage: "/Green Wedding.open.png",
  },

];