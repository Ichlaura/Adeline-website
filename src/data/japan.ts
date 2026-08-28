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
  title: "凪",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Serenity close.webp",
  openImage: "/凪 open foto JP.webp",
  keywords: ["凪", "穏やか", "結婚式", "ウェディング", "自然"]
},

{
  title: "凪",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Serenity close.webp",
  openImage: "/凪 open JP.webp",
  keywords: ["凪", "穏やか", "結婚式", "ウェディング", "自然"]
},

{
  title: "真珠桜",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Pearl Blossom close.webp",
  openImage: "/真珠桜 open foto JP.webp",
  keywords: ["真珠", "桜", "花", "結婚式", "ウェディング"]
},

{
  title: "真珠桜",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Pearl Blossom close.webp",
  openImage: "/真珠桜 open JP.webp",
  keywords: ["真珠", "桜", "花", "結婚式", "ウェディング"]
},

{
  title: "桃花",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Blush Romance close.webp",
  openImage: "/桃花 open foto JP.webp",
  keywords: ["桃花", "ピンク", "ロマンチック", "結婚式", "ウェディング"]
},

{
  title: "桃花",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Blush Romance close.webp",
  openImage: "/桃花 open JP.webp",
  keywords: ["桃花", "ピンク", "ロマンチック", "結婚式", "ウェディング"]
},

{
  title: "月白",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Silver Wedding close.webp",
  openImage: "/月白 open foto JP.webp",
  keywords: ["月白", "月", "銀", "上品", "結婚式"]
},

{
  title: "月白",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Silver Wedding close.webp",
  openImage: "/月白 open JP.webp",
  keywords: ["月白", "月", "銀", "上品", "結婚式"]
},

{
  title: "金木犀",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Gold Wedding close.webp",
  openImage: "/金木犀 open foto JP.webp",
  keywords: ["金木犀", "金", "花", "上品", "結婚式"]
},

{
  title: "金木犀",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Gold Wedding close.webp",
  openImage: "/金木犀 open JP.webp",
  keywords: ["金木犀", "金", "花", "上品", "結婚式"]
},

{
  title: "金蘭",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Golden Botanical close.webp",
  openImage: "/金蘭 open foto JP.webp",
  keywords: ["金蘭", "植物", "ボタニカル", "金", "結婚式"]
},

{
  title: "金蘭",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Golden Botanical close.webp",
  openImage: "/金蘭 open JP.webp",
  keywords: ["金蘭", "植物", "ボタニカル", "金", "結婚式"]
},

{
  title: "花霞",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Sakura Romance close.webp",
  openImage: "/花霞 open foto JP.webp",
  keywords: ["花霞", "桜", "春", "花", "結婚式"]
},

{
  title: "花霞",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Sakura Romance close.webp",
  openImage: "/花霞 open JP.webp",
  keywords: ["花霞", "桜", "春", "花", "結婚式"]
},

{
  title: "紅葉",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Autumn Whisper close.webp",
  openImage: "/紅葉 open foto JP.webp",
  keywords: ["紅葉", "秋", "もみじ", "自然", "結婚式"]
},

{
  title: "紅葉",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Autumn Whisper close.webp",
  openImage: "/紅葉 open JP.webp",
  keywords: ["紅葉", "秋", "もみじ", "自然", "結婚式"]
},

{
  title: "若葉",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Green Wedding close.webp",
  openImage: "/若葉 open foto JP.webp",
  keywords: ["若葉", "緑", "植物", "自然", "結婚式"]
},

{
  title: "若葉",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Green Wedding close.webp",
  openImage: "/若葉 open JP.webp",
  keywords: ["若葉", "緑", "植物", "自然", "結婚式"]
},

{
  title: "青海",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Blue Wedding close.webp",
  openImage: "/青海 open foto JP.webp",
  keywords: ["青海", "青", "海", "爽やか", "結婚式"]
},

{
  title: "青海",
  category: "結婚式",
  country: "jp",
  price: "$39",
  closedImage: "/Blue Wedding close.webp",
  openImage: "/青海 open JP.webp",
  keywords: ["青海", "青", "海", "爽やか", "結婚式"]
},

];