export type CountryCode = "co" | "pe" | "us" | "jp" | "mx";

export type Invitation = {
  title: string;
  category: string;
  country: CountryCode;
  price: string;
  closedImage: string;
  openImage: string;
  keywords?: string[];
};

export const usaInvitations: Invitation[] = [


  // ==========================
  // USA
  // ==========================


{
    title: "Serenity",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open foto ENG.webp",
  },
  {
    title: "Serenity",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open ENG.webp",
  },
  {
    title: "Pearl Blossom",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open foto ENG.webp",
  },
  {
    title: "Pearl Blossom",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open ENG.webp",
  },
  {
    title: "Blush Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open foto ENG.webp",
  },
  {
    title: "Blush Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open ENG.webp",
  },

  {
    title: "Silver Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open foto ENG.webp",
  },
  {
    title: "Silver Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open ENG.webp",
  },
  {
    title: "Gold Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open foto ENG.webp",
    keywords: ["oro", "boda"]
  },
  {
    title: "Gold Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open ENG.webp",
    keywords: ["oro", "boda"],
  },
  
  {
    title: "Golden Botanical",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open foto ENG.webp",
    keywords: ["oro", "botánico"]
  },
  {
    title: "Golden Botanical",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open ENG.webp",
    keywords: ["oro", "botánico"]
  },
  {
    title: "Sakura Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open foto ENG.webp",
    keywords: ["sakura", "romance"]
  },
  {
    title: "Sakura Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open ENG.webp",
    keywords: ["sakura", "romance"]
  },
  {
    title: "Autumn Whisper",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open foto ENG.webp",
    keywords: ["otoño", "susurro"]
  },
  {
    title: "Autumn Whisper",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open ENG.webp",
    keywords: ["otoño", "susurro"]
  },
  {
    title: "Green Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open foto ENG.webp",
    keywords: ["verde", "boda"]
  },
  {
    title: "Green Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open ENG.webp",
    keywords: ["verde", "boda"]
  },
  {
    title: "Blue Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open foto ENG.webp",
    keywords: ["azul", "boda"]
  },
  {
    title: "Blue Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open ENG.webp",
    keywords: ["azul", "boda"]
  },
  
  {
    title: "Birthday Party",
    category: "Birthday",
    country: "us",
    price: "$39",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
    keywords: ["cumpleaños", "fiesta"]
  },
  {
    title: "Baby Shower",
    category: "Baby Shower",
    country: "us",
    price: "$39",
    closedImage: "/babyshower_yellow_close.jpeg",
    openImage: "/babyshower_yellow_open.jpeg",
    keywords: ["baby", "shower"]
  },
  {
  title: "Gender Reveal",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/babyshower_yellow_close.jpeg",
  openImage: "/babyshower_yellow_open.jpeg",
  keywords: ["gender", "reveal"]
},
  {
    title: "Graduation Classic",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
    keywords: ["graduación", "clásico"]
  },
  {
    title: "Corporate Event",
    category: "Corporate",
    country: "us",
    price: "$49",
    closedImage: "/corporativo_close.jpeg",
    openImage: "/corporativo_open.jpeg",
    keywords: ["corporativo", "evento"]
  },


];