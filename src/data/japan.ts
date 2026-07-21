export type CountryCode = "co" | "pe" | "us" | "jp";

export type Invitation = {
  title: string;
  category: string;
  country: CountryCode;
  price: string;
  closedImage: string;
  openImage: string;
};

export const japanInvitations: Invitation[] = [


  // ==========================
  // JAPÓN
  // ==========================

 {
  title: "白雅", // Elegancia Blanca
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Ivory Elegance close.png",
  openImage: "/Ivory Elegance open.png",
},
{
  title: "白雅",
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Ivory Elegance close.png",
  openImage: "/Ivory Elegance open foto.png",
},

{
  title: "金麗", // Belleza Dorada
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Gold Wedding.close.png",
  openImage: "/Gold Wedding.open.png",
},
{
  title: "金麗",
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Gold Wedding.close.png",
  openImage: "/Gold Wedding.open foto.png",
},

{
  title: "白椿", // Camelia Blanca
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/White Camellia close.png",
  openImage: "/White Camellia open.png",
},
{
  title: "白椿",
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/White Camellia close.png",
  openImage: "/White Camellia open foto.png",
},

{
  title: "淡金 ", // Oro Suave / Champagne
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Champagne.Wedding.close.png",
  openImage: "/Champagne.Wedding.open.png",
},
{
  title: "淡金",
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Champagne.Wedding.close.png",
  openImage: "/Champagne.Wedding.open foto.png",
},

{
  title: "真珠", // Perla
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Pearl Wedding.close.png",
  openImage: "/Pearl Wedding.open.png",
},
{
  title: "真珠",
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Pearl Wedding.close.png",
  openImage: "/Pearl Wedding.open foto.png",
},

{
  title: "銀雅", // Elegancia Plateada
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Silver.Wedding.close.png",
  openImage: "/Silver.Wedding.open.png",
},

{
  title: "銀雅",
  category: "Matrimonio",
  country: "jp",
  price: "$39",
  closedImage: "/Silver.Wedding.close.png",
  openImage: "/Silver.Wedding.open foto.png",
},
];