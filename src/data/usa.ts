export type CountryCode = "co" | "pe" | "us" | "jp";

export type Invitation = {
  title: string;
  category: string;
  country: CountryCode;
  price: string;
  closedImage: string;
  openImage: string;
};

export const usaInvitations: Invitation[] = [


  // ==========================
  // USA
  // ==========================

  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/Gold Wedding.close.png",
    openImage: "/Gold Wedding.open.png",
  },

   {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/Blue.Wedding.close.png",
    openImage: "/Blue.Wedding.open.png",
  },
  {
    title: "White Camellia",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/White Camellia close.png",
    openImage: "/White Camellia open.png",
  },
  {
    title: "Champagne Wedding",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/Champagne.Wedding.close.png",
    openImage: "/Champagne.Wedding.open.png",
  },

  {
    title: "Pearl Wedding",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/Pearl Wedding.close.png",
    openImage: "/Pearl Wedding.open.png",
  },

  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/Silver.Wedding.close.png",
    openImage: "/Silver.Wedding.open.png",
  },

  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/Green Wedding.close.png",
    openImage: "/Green Wedding.open.png",
  },
  {
    title: "Royal Emerald",
    category: "Matrimonio",
    country: "us",
    price: "$39",
    closedImage: "/Royal Emerald.close.png",
    openImage: "/Royal Emerald.open.png",
  },
  {
    title: "Birthday Party",
    category: "Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },
  {
    title: "Baby Shower",
    category: "Baby Shower",
    country: "us",
    price: "$39",
    closedImage: "/babyshower_yellow_close.jpeg",
    openImage: "/babyshower_yellow_open.jpeg",
  },
  {
  title: "Gender Reveal",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/babyshower_yellow_close.jpeg",
  openImage: "/babyshower_yellow_open.jpeg",
},
  {
    title: "Graduation Classic",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },
  {
    title: "Corporate Event",
    category: "Corporate",
    country: "us",
    price: "$49",
    closedImage: "/corporativo_close.jpeg",
    openImage: "/corporativo_open.jpeg",
  },


];