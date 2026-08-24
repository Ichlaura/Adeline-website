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

export const japanInvitations: Invitation[] = [

  // ==========================
  // JAPÓN
  // ==========================

  {
    title: "桜花", // Sakura
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Cerezo de Marfil close.webp",
    openImage: "/Cerezo de Marfil open  JP.webp",
    keywords: [
      "桜",
      "さくら",
      "サクラ",
      "ピンク",
      "花",
      "春",
      "和風",
      "結婚式",
      "ウェディング",
      "sakura",
      "wedding"
    ],
  },

  {
    title: "桜花", // Sakura con foto
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Cerezo de Marfil close.webp",
    openImage: "/Cerezo de Marfil open foto JP.webp",
    keywords: [
      "桜",
      "さくら",
      "サクラ",
      "ピンク",
      "花",
      "春",
      "和風",
      "写真",
      "結婚式",
      "ウェディング",
      "sakura",
      "wedding"
    ],
  },

  {
    title: "白雅", // Elegancia Blanca
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Ivory Elegance close.webp",
    openImage: "/Ivory Elegance open JP.webp",
    keywords: [
      "白",
      "ホワイト",
      "アイボリー",
      "上品",
      "エレガント",
      "シンプル",
      "高級",
      "結婚式",
      "ウェディング",
      "white",
      "ivory",
      "elegant"
    ],
  },

  {
    title: "白雅",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Ivory Elegance close.webp",
    openImage: "/Ivory Elegance open foto JP.webp",
    keywords: [
      "白",
      "ホワイト",
      "アイボリー",
      "上品",
      "エレガント",
      "シンプル",
      "高級",
      "写真",
      "結婚式",
      "ウェディング",
      "white",
      "ivory",
      "elegant"
    ],
  },

  {
    title: "金麗", // Belleza Dorada
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Gold Wedding.close.webp",
    openImage: "/Gold Wedding open JP.webp",
    keywords: [
      "金",
      "ゴールド",
      "金色",
      "豪華",
      "高級",
      "エレガント",
      "華やか",
      "結婚式",
      "ウェディング",
      "gold",
      "golden",
      "luxury"
    ],
  },

  {
    title: "金麗",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Gold Wedding.close.webp",
    openImage: "/Gold Wedding open foto JP.webp",
    keywords: [
      "金",
      "ゴールド",
      "金色",
      "豪華",
      "高級",
      "エレガント",
      "華やか",
      "写真",
      "結婚式",
      "ウェディング",
      "gold",
      "golden",
      "luxury"
    ],
  },

  {
    title: "白椿", // Camelia Blanca
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/White Camellia close.webp",
    openImage: "/White Camellia open JP.webp",
    keywords: [
      "白",
      "ホワイト",
      "椿",
      "つばき",
      "花",
      "フラワー",
      "上品",
      "和風",
      "結婚式",
      "ウェディング",
      "white",
      "camellia",
      "flower"
    ],
  },

  {
    title: "白椿",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/White Camellia close.webp",
    openImage: "/White Camellia open foto JP.webp",
    keywords: [
      "白",
      "ホワイト",
      "椿",
      "つばき",
      "花",
      "フラワー",
      "上品",
      "和風",
      "写真",
      "結婚式",
      "ウェディング",
      "white",
      "camellia",
      "flower"
    ],
  },

  {
    title: "淡金", // Oro Suave / Champagne
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Champagne.Wedding.close.webp",
    openImage: "/Champagne.Wedding.open JP.webp",
    keywords: [
      "シャンパン",
      "ゴールド",
      "金",
      "淡い",
      "ベージュ",
      "上品",
      "エレガント",
      "高級",
      "結婚式",
      "ウェディング",
      "champagne",
      "gold",
      "elegant"
    ],
  },

  {
    title: "淡金",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Champagne.Wedding.close.webp",
    openImage: "/Champagne.Wedding.open foto JP.webp",
    keywords: [
      "シャンパン",
      "ゴールド",
      "金",
      "淡い",
      "ベージュ",
      "上品",
      "エレガント",
      "高級",
      "写真",
      "結婚式",
      "ウェディング",
      "champagne",
      "gold",
      "elegant"
    ],
  },

  {
    title: "真珠", // Perla
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Pearl Wedding.close.webp",
    openImage: "/Pearl Wedding.open JP.webp",
    keywords: [
      "真珠",
      "パール",
      "白",
      "ホワイト",
      "上品",
      "エレガント",
      "高級",
      "結婚式",
      "ウェディング",
      "pearl",
      "white",
      "elegant"
    ],
  },

  {
    title: "真珠",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Pearl Wedding.close.webp",
    openImage: "/Pearl Wedding.open foto JP.webp",
    keywords: [
      "真珠",
      "パール",
      "白",
      "ホワイト",
      "上品",
      "エレガント",
      "高級",
      "写真",
      "結婚式",
      "ウェディング",
      "pearl",
      "white",
      "elegant"
    ],
  },

  {
    title: "銀雅", // Elegancia Plateada
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Silver.Wedding.close.webp",
    openImage: "/Silver.Wedding.open JP.webp",
    keywords: [
      "銀",
      "シルバー",
      "銀色",
      "グレー",
      "上品",
      "エレガント",
      "高級",
      "結婚式",
      "ウェディング",
      "silver",
      "gray",
      "elegant"
    ],
  },

  {
    title: "銀雅",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Silver.Wedding.close.webp",
    openImage: "/Silver.Wedding.open foto JP.webp",
    keywords: [
      "銀",
      "シルバー",
      "銀色",
      "グレー",
      "上品",
      "エレガント",
      "高級",
      "写真",
      "結婚式",
      "ウェディング",
      "silver",
      "gray",
      "elegant"
    ],
  },

  {
    title: "鶴の誓い",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Grullas close JP.webp",
    openImage: "/Grullas open JP.webp",
    keywords: [
      "鶴",
      "つる",
      "和風",
      "和婚",
      "日本",
      "伝統",
      "和",
      "縁起",
      "結婚式",
      "ウェディング",
      "crane",
      "japanese",
      "traditional"
    ],
  },

  {
    title: "鶴の誓い",
    category: "結婚式",
    country: "jp",
    price: "$39",
    closedImage: "/Grullas close JP.webp",
    openImage: "/Grullas open foto JP.webp",
    keywords: [
      "鶴",
      "つる",
      "和風",
      "和婚",
      "日本",
      "伝統",
      "和",
      "縁起",
      "写真",
      "結婚式",
      "ウェディング",
      "crane",
      "japanese",
      "traditional"
    ],
  },

];