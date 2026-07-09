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
    closedImage: "/PinkBlessing.close.png",
    openImage: "/PinkBlessing.open.png",
  },

  {
    title: "Golden Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/GoldenBlessing.close.png",
    openImage: "/GoldenBlessing.open.png",
  },

  {
    title: "Blue Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/BlueBlessing.close.png",
    openImage: "/BlueBlessing.open.png",
  },

  {
    title: "Beige Communion",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/BeigeCommunion.close.png",
    openImage: "/BeigeCommunion.open.png",
  },

  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/GoldWedding.close.png",
    openImage: "/GoldWedding.open.png",
   },

  {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/BlueWedding.close.png",
    openImage: "/BlueWedding.open.png",
  },
  {
    title: "Champagne Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/ChampagneWedding.close.png",
    openImage: "/ChampagneWedding.open.png",
  },

  {
    title: "Pearl Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/PearlWedding.close.png",
    openImage: "/PearlWedding.open.png",
  },

  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/SilverWedding.close.png",
    openImage: "/SilverWedding.open.png",
  },

  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/GreenWedding.close.png",
    openImage: "/GreenWedding.open.png",
  },

];