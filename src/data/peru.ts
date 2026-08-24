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

export const peruInvitations: Invitation[] = [
  // ==========================
  // PERÚ
  // ==========================

  {
    title: "Pink Butterfly",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Pink Butterfly close.webp",
    openImage: "/Pink Butterfly open.webp",
    keywords: ["rosa", "mariposa", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Pink Butterfly",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Pink Butterfly close.webp",
    openImage: "/Pink Butterfly open foto.webp",
    keywords: ["rosa", "mariposa", "quinceañera", "fiesta", "cumpleaños"]
  },
  
  {
    title: "Green Butterfly",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Green Butterfly close.webp",
    openImage: "/Green Butterfly open.webp",
    keywords: ["verde", "mariposa", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Green Butterfly",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Green Butterfly close.webp",
    openImage: "/Green Butterfly open foto.webp",
    keywords: ["verde", "mariposa", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Morganite",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Morganite close.webp",
    openImage: "/Morganite open.webp",
    keywords: ["morganita", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Morganite",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Morganite close.webp",
    openImage: "/Morganite open foto.webp",
    keywords: ["morganita", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Emerald Quinceañera",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosverde_close.webp",
    openImage: "/quinceanosverde_open.webp",
    keywords: ["verde", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Emerald Quinceañera",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosverde_close.webp",
    openImage: "/quinceanosverde_open foto.webp",
    keywords: ["verde", "quinceañera", "fiesta", "cumpleaños"]
  },

  
  {
    title: "Royal Blue Quinceañera",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosazul_close.webp",
    openImage: "/quinceanosazul_open.webp",
    keywords: ["azul", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Royal Blue Quinceañera",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosazul_close.webp",
    openImage: "/quinceanosazul_open foto.webp",
    keywords: ["azul", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Champagne Tiara",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Champagne Tiara close.webp",
    openImage: "/Champagne Tiara open.webp",
    keywords: ["champagne", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Champagne Tiara",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Champagne Tiara close.webp",
    openImage: "/Champagne Tiara open foto.webp",
    keywords: ["champagne", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Pink Princess",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanospink_close.webp",
    openImage: "/quinceanospink_open.webp",
    keywords: ["rosa", "princesa", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Pink Princess",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanospink_close.webp",
    openImage: "/quinceanospink_open foto.webp",
    keywords: ["rosa", "princesa", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Purple Luxury",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanospurpura_close.webp",
    openImage: "/quinceanospurpura_open.webp",
    keywords: ["morado", "lujo", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Purple Luxury",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanospurpura_close.webp",
    openImage: "/quinceanospurpura_open foto.webp",
    keywords: ["morado", "lujo", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Royal Violet",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosmorado_close.webp",
    openImage: "/quinceanosmorado_open.webp",
    keywords: ["morado", "real", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Royal Violet",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosmorado_close.webp",
    openImage: "/quinceanosmorado_open foto.webp",
    keywords: ["morado", "real", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Neutral Floral",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosfloresneutral_close.webp",
    openImage: "/quinceanosfloresneutral_close_open.webp",
    keywords: ["neutro", "floral", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Neutral Floral",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/quinceanosfloresneutral_close.webp",
    openImage: "/quinceanosfloresneutral_close_open foto.webp",
    keywords: ["neutro", "floral", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Blue Serenity",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Blue Serenity close.webp",
    openImage: "/Blue Serenity open.webp",
    keywords: ["azul", "serenidad", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Blue Serenity",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Blue Serenity close.webp",
    openImage: "/Blue Serenity open foto.webp",
    keywords: ["azul", "serenidad", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Royal Garden",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Royal Garden close.webp",
    openImage: "/Royal Garden open.webp",
    keywords: ["real", "jardín", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Royal Garden",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Royal Garden close.webp",
    openImage: "/Royal Garden open foto.webp",
    keywords: ["real", "jardín", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Noble Rose",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Noble Rose close.webp",
    openImage: "/Noble Rose open.webp",
    keywords: ["rosa", "noble", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Noble Rose",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Noble Rose close.webp",
    openImage: "/Noble Rose open foto.webp",
    keywords: ["rosa", "noble", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Noble Garden",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Noble Garden close.webp",
    openImage: "/Noble Garden open.webp",
    keywords: ["real", "jardín", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Noble Garden",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Noble Garden close.webp",
    openImage: "/Noble Garden open foto.webp",
    keywords: ["real", "jardín", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Black Diamond",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Black Diamond close.webp",
    openImage: "/Black Diamond open.webp",
    keywords: ["negro", "diamante", "quinceañera", "fiesta", "cumpleaños"]
  },
  {
    title: "Black Diamond",
    category: "Quince Años",
    country: "pe",
    price: "$49",
    closedImage: "/Black Diamond close.webp",
    openImage: "/Black Diamond open foto.webp",
    keywords: ["negro", "diamante", "quinceañera", "fiesta", "cumpleaños"]
  },

  {
    title: "Unicorn Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumpleunicornios_close.webp",
    openImage: "/cumpleunicornios_open.webp",
    keywords: ["unicornio", "princesa", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Soccer Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumplefutbol_close.webp",
    openImage: "/cumplefutbol_open.webp",
    keywords: ["fútbol", "deporte", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Dinosaur Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumpledinosaurios_close.webp",
    openImage: "/cumpledinosaurios_open.webp",
    keywords: ["dinosaurio", "jungla", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Princess Sofia",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumpleprincesasofia_close.webp",
    openImage: "/cumpleprincesasofia_open.webp",
    keywords: ["princesa", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Fairy Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumplehadas_close.webp",
    openImage: "/cumplehadas_open.webp",
    keywords: ["hada", "cumpleaños", "fiesta", "infantil"]
  },
  
  {
    title: "Cars Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumplecars_close.webp",
    openImage: "/cumplecars_open.webp",
    keywords: ["coche", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Animals Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumpleanimals_close.webp",
    openImage: "/cumpleanimals_open.webp",
    keywords: ["animal", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Basketball Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/cumplebaloncesto_close.webp",
    openImage: "/cumplebaloncesto_open.webp",
    keywords: ["baloncesto", "deporte", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Mermaid Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/sirena_close.webp",
    openImage: "/sirena_open.webp",
    keywords: ["sirena", "cumpleaños", "fiesta", "infantil"]
  },
 {
    title: "Super Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/superfiesta_close.webp",
    openImage: "/superfiesta_open.webp",
    keywords: ["super", "cumpleaños", "fiesta", "infantil"]
  },

  {
    title: "Robot Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/robotparty_close.webp",
    openImage: "/robotparty_open.webp",
    keywords: ["robot", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Spa Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/spaparty_close.webp",
    openImage: "/spaparty_open.webp",
    keywords: ["spa", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Hawaii Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/hawaifiesta_close.webp",
    openImage: "/hawaifiesta_open.webp",
    keywords: ["hawaiano", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Magic Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/fiestamagia_close.webp",
    openImage: "/fiestamagia_open.webp",
    keywords: ["mágico", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Cowboy Kids Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Cowboy Kids Party close.webp",
    openImage: "/Cowboy Kids Party Open.webp",
    keywords: ["cowboy", "niños", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Motorcycle",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Motorcycle close.webp",
    openImage: "/Motorcycle open.webp",
    keywords: ["motocicleta", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Purple Paw",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Purple Paw close.webp",
    openImage: "/Purple Paw open.webp",
    keywords: ["púrpura", "pata", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Blue Doggy",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Blue Doggy close.webp",
    openImage: "/Blue Doggy open.webp",
    keywords: ["azul", "perro", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Outer Space",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Outer Space close.webp",
    openImage: "/Outer Space open.webp",
    keywords: ["espacio", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Purple Dino",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Purple Dino close.webp",
    openImage: "/Purple Dino open.webp",
    keywords: ["púrpura", "dinosaurio", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Science Lab",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Science Lab close.webp",
    openImage: "/Science Lab open.webp",
    keywords: ["ciencia", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Pirate Legacy",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Pirate Legacy close.webp",
    openImage: "/Pirate Legacy open.webp",
    keywords: ["pirata", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Little Chef",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Little Chef.close.webp",
    openImage: "/Little Chef open.webp",
    keywords: ["cocina", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Little Chef Pink",
    category: "Cumpleaños y fiestas infantiles",
    country: "pe",
    price: "$39",
    closedImage: "/Little Chef close pink.webp",
    openImage: "/Little Chef open pink.webp",
    keywords: ["rosado", "cocina", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Baby Luxe",
    category: "Baby Shower",
    country: "pe",
    price: "$39",
    closedImage: "/Baby Luxe close.webp",
    openImage: "/Baby Luxe open.webp",
    keywords: ["luxe", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Blue Teddy",
    category: "Baby Shower",
    country: "pe",
    price: "$39",
    closedImage: "/Blue Teddy close.webp",
    openImage: "/Blue Teddy open.webp",
    keywords: ["azul", "osito", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  
  {
    title: "Blush Invitation",
    category: "Baby Shower",
    country: "pe",
    price: "$39",
    closedImage: "/Blush Invitation close.webp",
    openImage: "/Blush Invitation open.webp",
    keywords: ["rosado", "invitación", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Yellow Baby",
    category: "Baby Shower",
    country: "pe",
    price: "$39",
    closedImage: "/babyshower_yellow_close.webp",
    openImage: "/babyshower_yellow_open.webp",
    keywords: ["amarillo", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Pink Baby",
    category: "Baby Shower",
    country: "pe",
    price: "$39",
    closedImage: "/Pink Baby close.webp",
    openImage: "/babyshowerrosado_open.webp",
    keywords: ["rosado", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Green Baby",
    category: "Baby Shower",
    country: "pe",
    price: "$39",
    closedImage: "/babyshower_green_close.webp",
    openImage: "/babyshower_green_open.webp",
    keywords: ["verde", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
    title: "Green Bear",
    category: "Baby Shower",
    country: "pe",
    price: "$39",
    closedImage: "/Green Baby close.webp",
    openImage: "/Green Bear open.webp",
    keywords: ["verde", "osito", "baby", "cumpleaños", "fiesta", "infantil"]
  },

  {
    title: "Golden Christmas",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/Golden Christmas.close.webp",
    openImage: "/Golden Christmas.open.webp",
    keywords: ["dorado", "navidad", "fiesta", "celebración"]
  },
  
  {
    title: "Halloween Black",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/halloweenpartyblack_close.webp",
    openImage: "/halloweenpartyblack_open.webp",
    keywords: ["negro", "halloween", "fiesta", "infantil"]
  },
  {
    title: "Halloween Orange",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/halloweenparty_close.webp",
    openImage: "/halloweenparty_open.webp",
    keywords: ["naranja", "halloween", "fiesta", "infantil"]
  },
  {
    title: "Noel Elegance",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/Noel Elegance.close.webp",
    openImage: "/Noel Elegance open.webp",
    keywords: ["dorado", "navidad", "fiesta", "celebración"]
  },
  {
    title: "Christmas Wishes",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/Christmas Wishes.close.webp",
    openImage: "/Christmas Wishes.open.webp",
    keywords: ["dorado", "navidad", "fiesta", "celebración"]
  },
  {
    title: "Cowboy Party",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/Cowboy close.webp",
    openImage: "/Cowboy open.webp",
    keywords: ["vaquero", "fiesta", "infantil"]
  },
  {
    title: "Bridal Bliss",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/Bridal Bliss close.webp",
    openImage: "/Bridal Bliss open.webp",
    keywords: ["dorado", "boda", "fiesta", "celebración"]
  },
  {
    title: "Bridal Chic",
    category: "Celebraciones y fiestas",
    country: "pe",
    price: "$39",
    closedImage: "/Bridal Chic close.webp",
    openImage: "/Bridal Chic open.webp",
    keywords: ["dorado", "boda", "fiesta", "celebración"]
  },

  {
    title: "Pink Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Pink Blessing.close.webp",
    openImage: "/Pink Blessing.open.webp",
    keywords: ["rosado", "bautismo", "fiesta", "infantil"]
  },

  {
    title: "Golden Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Golden Blessing.close.webp",
    openImage: "/Golden Blessing.open.webp",
    keywords: ["dorado", "bautismo", "fiesta", "infantil"]
  },

  {
    title: "Blue Blessing",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Blue Blessing.close.webp",
    openImage: "/Blue Blessing.open.webp",
    keywords: ["azul", "bautismo", "fiesta", "infantil"]
  },

  {
    title: "Beige Communion",
    category: "Primera comunión y bautismo",
    country: "pe",
    price: "$39",
    closedImage: "/Beige Communion.close.webp",
    openImage: "/Beige Communion.open.webp",
    keywords: ["beige", "comunión", "fiesta", "infantil"]
  },

  {
  title: "Kitty Reveal",
  category: "Revelación de género",
  country: "pe",
  price: "$39",
  closedImage: "/Kitty Reveal.close.webp",
  openImage: "/Kitty Reveal.open.webp",
  keywords: ["rosado", "invitación", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
  title: "Blue & Blush",
  category: "Revelación de género",
  country: "pe",
  price: "$39",
  closedImage: "/Blue & Blush.close.webp",
  openImage: "/Blue & Blush.open.webp",
  keywords: ["azul", "rosado", "invitación", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
  title: "Cloud Wishes",
  category: "Revelación de género",
  country: "pe",
  price: "$39",
  closedImage: "/Cloud Wishes.close.webp",
  openImage: "/Cloud Wishes.open.webp",
  keywords: ["nube", "invitación", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
  title: "Sky & Blush",
  category: "Revelación de género",
  country: "pe",
  price: "$39",
  closedImage: "/Sky & Blush.close.webp",
  openImage: "/Sky & Blush.open.webp",
  keywords: ["azul", "rosado", "invitación", "baby", "cumpleaños", "fiesta", "infantil"]
  },
  {
  title: "Golden Paws",
  category: "Revelación de género",
  country: "pe",
  price: "$39",
  closedImage: "/Golden Paws.close.webp",
  openImage: "/Golden Paws.open.webp",
  keywords: ["dorado", "patas", "invitación", "baby", "cumpleaños", "fiesta", "infantil"]
  },

  {
    title: "Blue Elegance",
    category: "Corporativo",
    country: "pe",
    price: "$49",
    closedImage: "/Blue Elegance close.webp",
    openImage: "/Blue Elegance open.webp",
    keywords: ["azul", "elegante", "corporativo"]
  },
  {
    title: "Golden Celebration",
    category: "Corporativo",
    country: "pe",
    price: "$49",
    closedImage: "/Golden Celebration close.webp",
    openImage: "/Golden Celebration open.webp",
    keywords: ["dorado", "celebración", "corporativo"]
  },
  {
    title: "Grand Opening",
    category: "Corporativo",
    country: "pe",
    price: "$49",
    closedImage: "/Grand Opening close.webp",
    openImage: "/Grand Opening open.webp",
    keywords: ["gran apertura", "corporativo"]
  },
  {
    title: "Noble Graduate",
    category: "Graduación",
    country: "pe",
    price: "$39",
    closedImage: "Noble Graduate close.webp",
    openImage: "/Noble Graduate open.webp",
    keywords: ["noble", "graduación", "corporativo"]
  },
  {
    title: "Academic Elegance",
    category: "Graduación",
    country: "pe",
    price: "$39",
    closedImage: "/Academic Elegance close.webp",
    openImage: "/Academic Elegance open.webp",
    keywords: ["académico", "elegante", "graduación"]
  },
  {
    title: "Champagne Prestige",
    category: "Graduación",
    country: "pe",
    price: "$39",
    closedImage: "/Champagne Prestige close.webp",
    openImage: "/Champagne Prestige open.webp",
    keywords: ["champagne", "prestigio", "graduación"]
  },
  {
    title: "Diploma Dreams",
    category: "Graduación",
    country: "pe",
    price: "$39",
    closedImage: "/Diploma Dreams close.webp",
    openImage: "/Diploma Dreams open.webp",
    keywords: ["sueños", "diploma", "graduación"]
  },
  {
    title: "Rose Diploma",
    category: "Graduación",
    country: "pe",
    price: "$39",
    closedImage: "/Rose Diploma close.webp",
    openImage: "/Rose Diploma open.webp",
    keywords: ["rosa", "diploma", "graduación"]
  },
  {
    title: "Serenity",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open foto.webp",
    keywords: ["serenidad", "matrimonio", "boda"]
  },
  {
    title: "Serenity",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open.webp",
    keywords: ["serenidad", "matrimonio", "boda"]
  },
  {
    title: "Pearl Blossom",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open foto.webp",
    keywords: ["perla", "flor", "matrimonio", "boda"]
  },
  {
    title: "Pearl Blossom",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open.webp",
    keywords: ["perla", "flor", "matrimonio", "boda"]
  },
  {
    title: "Blush Romance",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open foto.webp",
    keywords: ["rosado", "romance", "matrimonio", "boda"]
  },
  {
    title: "Blush Romance",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open.webp",
    keywords: ["rosado", "romance", "matrimonio", "boda"]
  },

  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open foto.webp",
    keywords: ["plata", "matrimonio", "boda"]
  },
  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open.webp",
    keywords: ["plata", "matrimonio", "boda"]

  },
  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open foto.webp",
    keywords: ["dorado", "matrimonio", "boda"]
  },
  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open.webp",
    keywords: ["dorado", "matrimonio", "boda"]
  },
  
  {
    title: "Golden Botanical",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open foto.webp",
    keywords: ["dorado", "botánico", "matrimonio", "boda"]
  },
  {
    title: "Golden Botanical",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open.webp",
    keywords: ["dorado", "botánico", "matrimonio", "boda"]
  },
  {
    title: "Sakura Romance",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open foto.webp",
    keywords: ["sakura", "romance", "matrimonio", "boda"]
  },
  {
    title: "Sakura Romance",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open.webp",
    keywords: ["sakura", "romance", "matrimonio", "boda"]
  },
  {
    title: "Autumn Whisper",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open foto.webp",
    keywords: ["otoño", "susurro", "matrimonio", "boda"]
  },
  {
    title: "Autumn Whisper",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open.webp",
    keywords: ["otoño", "susurro", "matrimonio", "boda"]
  },
  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open foto.webp",
    keywords: ["verde", "matrimonio", "boda"]
  },
  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open.webp",
    keywords: ["verde", "matrimonio", "boda"]
  },
  {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open foto.webp",
    keywords: ["azul", "matrimonio", "boda"]
  },
  {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "pe",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open.webp",
    keywords: ["azul", "matrimonio", "boda"]
  },

];