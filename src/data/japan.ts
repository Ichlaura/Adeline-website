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
    title: "結婚式デザイン",
    category: "結婚式",
    country: "jp",
    price: "¥7000",
    closedImage: "/emeraldwedding_close.jpeg",
    openImage: "/emeraldwedding_open.jpeg",
  },
  {
    title: "誕生日デザイン",
    category: "誕生日",
    country: "jp",
    price: "¥6000",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },
  {
  title: "性別発表",
  category: "性別発表",
  country: "jp",
  price: "¥6000",
  closedImage: "/genderreveal_close.jpeg",
  openImage: "/genderreveal_open.jpeg",
},
  {
    title: "ベビーシャワー",
    category: "ベビーシャワー",
    country: "jp",
    price: "¥6000",
    closedImage: "/babyshower_yellow_close.jpeg",
    openImage: "/babyshower_yellow_open.jpeg",
  },
  {
    title: "卒業デザイン",
    category: "卒業",
    country: "jp",
    price: "¥6000",
    closedImage: "/robotparty_close.jpeg",
    openImage: "/robotparty_open.jpeg",
  },
  {
    title: "法人イベント",
    category: "法人イベント",
    country: "jp",
    price: "¥7000",
    closedImage: "/corporativo_close.jpeg",
    openImage: "/corporativo_open.jpeg",
  },
];