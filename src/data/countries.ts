export type CountryCode = "co" | "pe" | "us" | "jp";

export const countries = [
  { code: "co" as CountryCode, name: "Colombia", flag: "🇨🇴" },
  { code: "pe" as CountryCode, name: "Perú", flag: "🇵🇪" },
  { code: "us" as CountryCode, name: "United States", flag: "🇺🇸" },
  { code: "jp" as CountryCode, name: "日本", flag: "🇯🇵" },
];

export const countrySettings = {
  co: {
    heroTag: "Adelina Invitaciones",
    heroTitle: "Invitaciones digitales\npara tus eventos especiales",
    heroText: "Bodas, quince años, cumpleaños, baby showers y eventos especiales.",
    viewDesigns: "Ver diseños",
    categories: [
      "Matrimonio",
      "Quince Años",
      "Cumpleaños y fiestas infantiles",
      "Baby Shower",
      "Revelación de género",
      "Graduación",
      "Primera comunión y bautismo",
      "Corporativo",
      "Celebraciones y fiestas",
    ],
  },

  pe: {
    heroTag: "Adelina Invitaciones",
    heroTitle: "Invitaciones digitales\npara tus eventos especiales",
    heroText: "Bodas, quince años, cumpleaños, baby showers y eventos especiales.",
    viewDesigns: "Ver diseños",
    categories: [
      "Matrimonio",
      "Quince Años",
      "Revelación de género",
      "Cumpleaños y fiestas infantiles",
      "Baby Shower",
      "Graduación",
    ],
  },

  us: {
    heroTag: "Adelina Invitations",
    heroTitle: "Digital invitations\nfor your special events",
    heroText: "Weddings, birthdays, baby showers, graduations and special events.",
    viewDesigns: "View designs",
   
    categories: ["Weddings",
         "Birthdays",
          "Baby Shower",
          "Gender Reveal", 
        "Graduation", 
        "Corporate"],
  },

  jp: {
    heroTag: "Adelina 招待状",
    heroTitle: "特別な日のための\nデジタル招待状",
    heroText: "結婚式、誕生日、ベビーシャワー、卒業式、特別イベント。",
    viewDesigns: "デザインを見る",
    categories: ["結婚式",
         "誕生日", 
         "ベビーシャワー",
          "卒業",
          "性別発表",
           "法人イベント"],
  },
};