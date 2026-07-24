export type CountryCode = "co" | "pe" | "us" | "jp" | "mx";

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
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Gold Wedding close ENG.png",
    openImage: "/Gold Wedding open ENG.png",
  },

   {
    title: "Blue Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blue Wedding close ENG.png",
    openImage: "/Blue Wedding open ENG.png",
  },
  {
    title: "White Camellia",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/White Camellia close ENG.png",
    openImage: "/White Camellia open ENG.png",
  },
  {
    title: "Champagne Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Champagne Wedding close ENG.png",
    openImage: "/Champagne Wedding open ENG.png",
  },

  {
    title: "Pearl Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Pearl Wedding close ENG.png",
    openImage: "/Pearl Wedding open ENG.png",
  },

  {
    title: "Silver Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Silver Wedding closeENG.png",
    openImage: "/Silver Wedding open ENG.png",
  },

  {
    title: "Green Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Green Wedding close ENG.png",
    openImage: "/Green Wedding open ENG.png",
  },
  {
    title: "Royal Emerald",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Royal Emerald close ENG.png",
    openImage: "/Royal Emerald open ENG.png",
  },
  {
    title: "Birthday Party",
    category: "Birthday",
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