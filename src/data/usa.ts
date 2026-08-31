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
    title: "Blush Butterfly",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Blush Butterfly close.webp",
    openImage: "/Blush Butterfly open ENG.webp",
    keywords: ["mariposa", "blush", "quinceañera", "rosada", "pink"]
  
  },
  {
    title: "Royal Garden",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Royal Garden close.webp",
    openImage: "/Royal Garden open ENG.webp",
    keywords: ["jardín", "royal", "quinceañera", "vino tinto", "rojo", "libelula"]
  },
  {
    title: "Green Elegance",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Green Elegance close.webp",
    openImage: "/Green Elegance open ENG.webp",
    keywords: ["esmeralda", "quinceañera", "verde", "Green"]
  },
  {
    title: "Golden Dreams",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Golden Dreams close.webp",
    openImage: "/Golden Dreams open ENG.webp",
    keywords: ["dorado", "sueños", "quinceañera"]
  },
  {
    title: "Blue Serenity",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Blue Serenity close.webp",
    openImage: "/Blue Serenity open ENG.webp",
    keywords: ["azul", "serenidad", "quinceañera"]
  },
  {
    title: "Ivory Bloom",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Ivory Bloom close.webp",
    openImage: "/Ivory Bloom open ENG.webp",
    keywords: ["marfil", "flor", "quinceañera"]
  },
  {
    title: "Purple Elegance",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Purple Elegance close.webp",
    openImage: "/Purple Elegance open ENG.webp",
  },
  {
    title: "Blue Dream",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Blue Dream close.webp",
    openImage: "/Blue Dream open ENG.webp",
    keywords: ["azul", "azul rey", "quinceañera"]
  },
  {
    title: "Pink Blossom",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Pink Blossom close.webp",
    openImage: "/Pink Blossom open ENG.webp",
    keywords: ["mariposa", "blush", "quinceañera"]
  
  },
  {
    title: "Black Diamond",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Black Diamond close.webp",
    openImage: "/Black Diamond open ENG.webp",
  },
  {
    title: "Royal Violet",
    category: "Quince Años",
    country: "us",
    price: "$49",
    closedImage: "/Royal Violet close.webp",
    openImage: "/Royal Violet open ENG.webp",
    keywords: ["princesa", "morada", "quinceañera", "purpura"]
  },
  {
    title: "Emerald Quinceañera",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Emerald Quinceañera close.webp",
    openImage: "/Emerald Quinceañera open ENG.webp",
    keywords: ["esmeralda", "quinceañera", "verde", "Green"]
  },
  {
    title: "Blush Princess",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Blush Princess close.webp",
    openImage: "/Blush Princess open ENG.webp",
    keywords: ["princesa", "blush", "quinceañera"]
  },
  {
    title: "Lavender Dream",
    category: "Quinceañera",
    country: "us",
    price: "$49",
    closedImage: "/Lavender Dream close.webp",
    openImage: "/Lavender Dream open ENG.webp",
    keywords: ["princesa", "blush", "quinceañera"]
  },
   {
    title: "Unicorn Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Unicorn Party close.webp",
    openImage: "/Unicorn Party open foto ENG.webp",
  },
  {
    title: "Unicorn Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Unicorn Party close.webp",
    openImage: "/Unicorn Party open ENG.webp",
    keywords: ["unicornio", "fiesta", "cumpleaños"]
  },
  {
    title: "Soccer Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Soccer Party close.webp",
    openImage: "/Soccer Party open ENG.webp",
    keywords: ["fútbol", "fiesta", "cumpleaños"]
  },
  {
    title: "Little Chef",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Little Chef close.webp",
    openImage: "/Little Chef open ENG.webp",
    keywords: ["chef", "cocina", "fiesta", "cumpleaños"]
  },
  {
    title: "Dinosaur Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Dinosaur Party close.webp",
    openImage: "/Dinosaur Party open ENG.webp",
    keywords: ["dinosaurio", "fiesta", "cumpleaños"]
  },
  {
    title: "Princess Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Princess Party close.webp",
    openImage: "/Princess Party open foto ENG.webp",
    keywords: ["princesa", "fiesta", "cumpleaños"]
  },
  {
    title: "Princess Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Princess Party close.webp",
    openImage: "/Princess Party open ENG.webp",
    keywords: ["princesa", "fiesta", "cumpleaños"]
  },
  {
    title: "Fairy Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Fairy Party close.webp",
    openImage: "/Fairy Party open ENG.webp",
    keywords: ["hada", "fiesta", "cumpleaños"]
  },
  
  {
    title: "Cars Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Cars Party close.webp",
    openImage: "/Cars Party open ENG.webp",
    keywords: ["coches", "autos", "fiesta", "cumpleaños"]
  },
  {
    title: "Animals Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Animals Party close.webp",
    openImage: "/Animals Party open ENG.webp",
    keywords: ["animales", "fiesta", "cumpleaños"]
  },
  {
    title: "Basketball Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Basketball Party close.webp",
    openImage: "/Basketball Party open ENG.webp",
    keywords: ["baloncesto", "basketball", "fiesta", "cumpleaños"]
  },
  

{
  title: "Mermaid Party",
  category: "Kids Birthdays",
  country: "us",
  price: "$39",
  closedImage: "/Mermaid Party close.webp",
  openImage: "/Mermaid Party open foto ENG.webp",
  keywords: [
    "sirena",
    "sirenas",
    "mermaid",
    "mar",
    "océano",
    "oceano",
    "playa",
    "azul",
    "niña"
  ],
},

 {
    title: "Super Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Super Party close.webp",
    openImage: "/Super Party open ENG.webp",
    keywords: ["super", "fiesta", "cumpleaños", "Heroes", "superhéroes"]
  },

  {
    title: "Robot Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Robot Party close.webp",
    openImage: "/Robot Party open ENG.webp",
    keywords: ["robot", "fiesta", "cumpleaños"]
  },
  {
    title: "Spa Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Spa Party close.webp",
    openImage: "/Spa Party open ENG.webp",
    keywords: ["spa", "fiesta", "cumpleaños"]
  },
  {
    title: "Speed Racer",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Speed Racer close.webp",
    openImage: "/Speed Racer open ENG.webp",
    keywords: ["carros", "fiesta", "cumpleaños", "carrera", "speed", "car", "racer","cars",]
    },
  {
    title: "Hawaii Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Hawaii Party close.webp",
    openImage: "/Hawaii Party open ENG.webp",
    keywords: ["hawaii", "fiesta", "cumpleaños"]
  },
  {
    title: "Magical Bunny",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Magical Bunny close.webp",
    openImage: "/Magical Bunny open ENG.webp",
    keywords: ["conejo", "bunny", "magical", "fiesta", "cumpleaños"]
  },
  {
    title: "Magic Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Magic Party close.webp",
    openImage: "/Magic Party open ENG.webp",
    keywords: ["magia", "magic", "fiesta", "cumpleaños"]
  },
  {
    title: "Soccer Star",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Soccer Star close.webp",
    openImage: "/Soccer Star open ENG.webp",
    keywords: ["fútbol", "soccer", "estrella", "fiesta", "cumpleaños"]
  },
  {
    title: "Little Cowboy",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Little Cowboy close.webp",
    openImage: "/Little Cowboy open ENG.webp",
    keywords: ["cowboy", "vaquero", "fiesta", "cumpleaños"]
  },
  {
    title: "Cowboy Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Cowboy Party close.webp",
    openImage: "/Cowboy Party open ENG.webp",
    keywords: ["cowboy", "vaquero", "fiesta", "cumpleaños"]
  },
  {
    title: "Rock Star Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Rock Star Party close.webp",
    openImage: "/Rock Star Party open ENG.webp",
    keywords: ["rock", "star", "fiesta", "cumpleaños"]
  },
  {
    title: "Motorcycle",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Motorcycle close.webp",
    openImage: "/Motorcycle open ENG.webp",
    keywords: ["moto", "motorcycle", "fiesta", "cumpleaños"]
  },
  {
    title: "Cute Kittens",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Cute Kittens close.webp",
    openImage: "/Cute Kittens open ENG.webp",
    keywords: ["gatitos", "kittens", "fiesta", "cumpleaños"]
  },
  {
    title: "Blue Doggy",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Blue Doggy close.webp",
    openImage: "/Blue Doggy open ENG.webp",
    keywords: ["perrito", "doggy", "fiesta", "cumpleaños"]
  },
  {
    title: "Outer Space",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Outer Space close.webp",
    openImage: "/Outer Space open ENG.webp",
    keywords: ["espacio", "space", "fiesta", "cumpleaños"]
  },
  {
    title: "Purple Dino",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Purple Dino close.webp",
    openImage: "/Purple Dino open ENG.webp",
    keywords: ["dinosaurio", "dino", "fiesta", "cumpleaños"]
  },
  {
    title: "Science Lab",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Science Lab close.webp",
    openImage: "/Science Lab open ENG.webp",
    keywords: ["ciencia", "science", "fiesta", "cumpleaños"]
  },
  {
    title: "Pirate Legacy",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Pirate Legacy close.webp",
    openImage: "/Pirate Legacy open ENG.webp",
    keywords: ["pirata", "pirates", "fiesta", "cumpleaños"]
  },
   {
    title: "Choo Choo Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Choo Choo Party close.webp",
    openImage: "/Choo Choo Party open.webp",
    keywords: ["pirata", "pirates", "fiesta", "cumpleaños"]
  },
  {
    title: "Art Party",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/Art Party close.webp",
    openImage: "/Art Party open ENG.webp",
    keywords: ["arte", "art", "fiesta", "Birthdays"]
  },
  {
    title: "My First Race",
    category: "Kids Birthdays",
    country: "us",
    price: "$39",
    closedImage: "/My First Race close.webp",
    openImage: "/My First Race open ENG.webp",
    keywords: ["carro", "race", "car", "Birthdays"]
  },
  {
    title: "Blue Teddy",
    category: "Baby Shower",
    country: "us",
    price: "$39",
    closedImage: "/Blue Teddy close.webp",
    openImage: "/Blue Teddy open ENG.webp",
    keywords: ["osito", "teddy", "fiesta", "Baby Shower"]
  },
  {
    title: "Blush Teddy",
    category: "Baby Shower",
    country: "us",
    price: "$39",
    closedImage: "/Blush Teddy close.webp",
    openImage: "/Blush Teddy open ENG.webp",
    keywords: ["osito", "teddy", "fiesta", "Baby Shower"]
  },
  {
    title: "Blush & Gold",
    category: "Baby Shower",
    country: "us",
    price: "$39",
    closedImage: "/Blush & Gold close.webp",
    openImage: "/Blush & Gold open ENG.webp",
    keywords: ["blush", "gold", "fiesta", "Baby Shower"]
  },
  {
    title: "Baby Bloom",
    category: "Baby Shower",
    country: "us",
    price: "$39",
    closedImage: "/Baby Bloom close.webp",
    openImage: "/Baby Bloom open ENG.webp",
    keywords: ["baby", "bloom", "fiesta", "Baby Shower"]
  },
  {
    title: "Baby Blue",
    category: "Baby Shower",
    country: "us",
    price: "$39",
    closedImage: "/Baby Blue close.webp",
    openImage: "/Baby Blue open ENG.webp",
    keywords: ["baby", "blue", "fiesta", "Baby Shower"]
  },

  {
    title: "Christmas Evergreen",
    category: "Parties & Celebrations",
    country: "us",
    price: "$39",
    closedImage: "/Christmas Evergreen close.webp",
    openImage: "/Christmas Evergreen open ENG.webp",
    keywords: ["navidad", "christmas", "fiesta", "Celebrations"]
  },
  
  {
    title: "Halloween",
    category: "Parties & Celebrations",
    country: "us",
    price: "$39",
    closedImage: "/Halloween close.webp",
    openImage: "/Halloween open ENG.webp",
    keywords: ["halloween", "fantasía", "fiesta", "Celebrations"]
  },
  {
    title: "Christmas Wishes",
    category: "Parties & Celebrations",
    country: "us",
    price: "$39",
    closedImage: "/Christmas Wishes close.webp",
    openImage: "/Christmas Wishes open ENG.webp",
    keywords: ["navidad", "christmas", "fiesta", "Celebrations"]
  },
  {
    title: "Bachelorette party",
    category: "Parties & Celebrations",
    country: "us",
    price: "$39",
    closedImage: "/Bachelorette party close.webp",
    openImage: "/Bachelorette party open ENG.webp",
    keywords: ["Bride", "Bride to Be", "despedida", "soltera", "Bachelorette"]
  },
  {
    title: "Orange Halloween",
    category: "Parties & Celebrations",
    country: "us",
    price: "$39",
    closedImage: "/Orange Halloween close.webp",
    openImage: "/Orange Halloween open ENG.webp",
    keywords: ["halloween", "naranja", "fiesta"]
  },
  {
    title: "Bride to Be Bash",
    category: "Parties & Celebrations",
    country: "us",
    price: "$39",
    closedImage: "/Bride to Be Bash close.webp",
    openImage: "/Bride to Be Bash open ENG.webp",
    keywords: ["Bride", "Bride to Be", "despedida", "soltera", "Bachelorette"]
  },
  {
    title: "Groom Night",
    category: "Parties & Celebrations",
    country: "us",
    price: "$39",
    closedImage: "/Groom Night close.webp",
    openImage: "/Groom Night open ENG.webp",
    keywords: ["Groom", "Groom to Be", "despedida", "soltero", "Bachelorette"]
  },
  {
    title: "Silk Blessing",
    category: "First Communion & Baptism",
    country: "us",
    price: "$39",
    closedImage: "/Silk Blessing close.webp",
    openImage: "/Silk Blessing open ENG.webp",
    keywords: ["seda", "bendición", "fiesta", "First Communio"]
  },
  {
  title: "Golden Blessing",
  category: "First Communion & Baptism",
  country: "us",
  price: "$39",
  closedImage: "/Golden Blessing close.webp",
  openImage: "/Golden Blessing open ENG.webp",
  keywords: ["oro", "bendición", "fiesta", "First Communio"]
},
{
  title: "Divine Grace",
  category: "First Communion & Baptism",
  country: "us",
  price: "$39",
  closedImage: "/Divine Grace close.webp",
  openImage: "/Divine Grace open foto ENG.webp",
  keywords: ["divina", "gracia", "fiesta", "First Communio"]
},
{
  title: "Divine Grace",
  category: "First Communion & Baptism",
  country: "us",
  price: "$39",
  closedImage: "/Divine Grace close.webp",
  openImage: "/Divine Grace open ENG.webp",
  keywords: ["divina", "gracia", "fiesta", "First Communio"]
},

  {
    title: "Waters of Grace",
    category: "First Communion & Baptism",
    country: "us",
    price: "$39",
    closedImage: "/Waters of Grace close.webp",
    openImage: "/Waters of Grace open ENG.webp",
    keywords: ["aguas", "gracia", "fiesta", "First Communio"]
  },
  {
    title: "Olive Communion",
    category: "First Communion & Baptism",
    country: "us",
    price: "$39",
    closedImage: "/Olive Communion close.webp",
    openImage: "/Olive Communion open foto ENG.webp",
    keywords: ["olivo", "comunión", "bautismo", "fiesta", "First Communio"]
  },
  {
    title: "Olive Communion",
    category: "First Communion & Baptism",
    country: "us",
    price: "$39",
    closedImage: "/Olive Communion close.webp",
    openImage: "/Olive Communion open ENG.webp",
    keywords: ["olivo", "comunión", "bautismo", "fiesta", "First Communio"]
  },
  {
  title: "Little Secret",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/Little Secret close.webp",
  openImage: "/Little Secret open ENG.webp",
  keywords: ["sorpresa", "regalo", "fiesta", "cumpleaños","revelacion de genero"]
  },

  {
  title: "A Little Surprise",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/A Little Surprise close.webp",
  openImage: "/A Little Surprise open ENG.webp",
  keywords: ["sorpresa", "regalo", "fiesta", "Gender Reveal"]
  },
  {
  title: "Kitty Reveal",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/Kitty Reveal close.webp",
  openImage: "/Kitty Reveal open ENG.webp",
  keywords: ["gatito", "revelación", "fiesta", "Gender Reveal"]
  },
  {
  title: "Sky & Blush",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/Sky & Blush close.webp",
  openImage: "/Sky & Blush open ENG.webp",
  keywords: ["cielo", "blush", "fiesta", "Gender Reveal"]
  },
  {
  title: "Golden Paws",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/Golden Paws close.webp",
  openImage: "/Golden Paws open ENG.webp",
  keywords: ["patas", "dorado", "fiesta", "Gender Reveal"]
  },
  {
  title: "Blue & Blush",
  category: "Gender Reveal",
  country: "us",
  price: "$39",
  closedImage: "/Blue & Blush close.webp",
  openImage: "/Blue & Blush open ENG.webp",
  keywords: ["azul", "blush", "fiesta", "Gender Reveal"]
  },

  {
    title: "Annual Celebration",
    category: "Corporate",
    country: "us",
    price: "$49",
    closedImage: "/Annual Celebration close.webp",
    openImage: "/Annual Celebration open ENG.webp",
    keywords: ["aniversario", "fiesta", "Corporate"]
  },
  {
    title: "Golden Legacy",
    category: "Corporate",
    country: "us",
    price: "$49",
    closedImage: "/Golden Legacy close.webp",
    openImage: "/Golden Legacy open ENG.webp",
    keywords: ["legado", "dorado", "fiesta", "Corporate"]
  },
  {
    title: "New Horizons",
    category: "Corporate",
    country: "us",
    price: "$49",
    closedImage: "/New Horizons close.webp",
    openImage: "/New Horizons open ENG.webp",
    keywords: ["nuevos", "horizontes", "fiesta", "Corporate"]
  },
  {
    title: "Royal Awards",
    category: "Corporate",
    country: "us",
    price: "$49",
    closedImage: "/Royal Awards close.webp",
    openImage: "/Royal Awards open ENG.webp",
    keywords: ["premios", "royal", "fiesta", "Corporate"]
  },
  {
    title: "Convention",
    category: "Corporate",
    country: "us",
    price: "$49",
    closedImage: "/Convention close.webp",
    openImage: "/Convention open ENG.webp",
    keywords: ["congreso", "fiesta", "Corporate"]
  },
  {
    title: "Noble Graduate",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/Noble Graduate close.webp",
    openImage: "/Noble Graduate open ENG.webp",
    keywords: ["graduación", "fiesta", "Graduation"]
  },
  {
    title: "Academic Elegance",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/Academic Elegance close.webp",
    openImage: "/Academic Elegance open ENG.webp",
    keywords: ["académica", "elegancia", "fiesta", "Graduation"]
  },
  {
    title: "New Chapter",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/New Chapter close.webp",
    openImage: "/New Chapter open ENG.webp",
    keywords: ["nuevo", "capítulo", "fiesta", "Graduation"]
  },
  {
    title: "Proud Achievement",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/Proud Achievement close.webp",
    openImage: "/Proud Achievement open ENG.webp",
    keywords: ["orgulloso", "logro", "fiesta", "Graduation"]
  },
  {
    title: "Blue Graduation",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/Blue Graduation close.webp",
    openImage: "/Blue Graduation open ENG.webp",
    keywords: ["azul", "graduación", "fiesta", "Graduation"]
  },
  {
    title: "Blush Graduation",
    category: "Graduation",
    country: "us",
    price: "$39",
    closedImage: "/Blush Graduation close.webp",
    openImage: "/Blush Graduation open ENG.webp",
    keywords: ["blush", "graduación", "fiesta", "Wedding"]
  },
  {
    title: "Serenity",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open foto ENG.webp",
    keywords: ["serenidad", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Serenity",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open ENG.webp",
    keywords: ["serenidad", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Pearl Blossom",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open foto ENG.webp",
    keywords: ["perla", "florecer", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Pearl Blossom",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open ENG.webp",
    keywords: ["perla", "florecer", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Blush Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open foto ENG.webp",
    keywords: ["blush", "romance", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Blush Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open ENG.webp",
    keywords: ["blush", "romance", "matrimonio", "fiesta", "Wedding"]
  },

  {
    title: "Silver Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open foto ENG.webp",
    keywords: ["plata", "boda", "fiesta", "Wedding"]
  },
  {
    title: "Silver Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open ENG.webp",
    keywords: ["plata", "boda", "fiesta", "Wedding"]
  },
  {
    title: "Gold Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open foto ENG.webp",
    keywords: ["oro", "boda", "fiesta", "Wedding"]
  },
  {
    title: "Gold Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open ENG.webp",
    keywords: ["oro", "boda", "fiesta", "Wedding"]
  },
  
  {
    title: "Golden Botanical",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open foto ENG.webp",
    keywords: ["oro", "botánica", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Golden Botanical",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open ENG.webp",
    keywords: ["oro", "botánica", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Sakura Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open foto ENG.webp",
    keywords: ["sakura", "romance", "matrimonio", "fiesta", "Weddings"]
  },
  {
    title: "Sakura Romance",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open ENG.webp",
  },
  {
    title: "Sakura Blossom",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Sakura Blossom close.webp",
    openImage: "/Sakura Blossom open foto ENG.webp",
  },
  {
    title: "Sakura Blossom",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Sakura Blossom close.webp",
    openImage: "/Sakura Blossom open ENG.webp",
  },
  {
    title: "Autumn Whisper",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open foto ENG.webp",
    keywords: ["otoño", "susurro", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Autumn Whisper",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open ENG.webp",
    keywords: ["otoño", "susurro", "matrimonio", "fiesta", "Wedding"]
  },
  {
    title: "Green Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open foto ENG.webp",
    keywords: ["verde", "boda", "fiesta", "Wedding"]
  },
  {
    title: "Green Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open ENG.webp",
    keywords: ["verde", "boda", "fiesta", "Wedding"]
  },
  {
    title: "Blue Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open foto ENG.webp",
    keywords: ["azul", "boda", "fiesta", "Wedding"]
  },
  {
    title: "Blue Wedding",
    category: "Wedding",
    country: "us",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open ENG.webp",
    keywords: ["azul", "boda", "fiesta", "Wedding"]
  },


];