export type CountryCode = "co" | "pe" | "us" | "jp";

export type Invitation = {
  title: string;
  category: string;
  country: CountryCode;
  price: string;
  closedImage: string;
  openImage: string;
  keywords?: string[];
};

export const colombiaInvitations: Invitation[] = [
  // ==========================
  // COLOMBIA
  // ==========================

  {
    title: "Blush Butterfly",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Blush Butterfly close.webp",
    openImage: "/Blush Butterfly open.webp",
    keywords: ["mariposa", "blush", "quinceañera", "rosa", "pink", "butterfly"]
  
  },
  {
    title: "Royal Garden",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Royal Garden close.webp",
    openImage: "/Royal Garden open.webp",
    keywords: ["jardín", "royal", "quinceañera", "red", "rojo", "vino tinto", "burgundy", "libelula"]
  },
  {
    title: "Green Elegance",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Green Elegance close.webp",
    openImage: "/Green Elegance open.webp",
    keywords: ["esmeralda", "quinceañera", "verde", "Green"]
  },
  {
    title: "Golden Dreams",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Golden Dreams close.webp",
    openImage: "/Golden Dreams open.webp",
    keywords: ["dorado", "sueños", "quinceañera", "amarillo", "gold", "yellow", "maiposa", "butterfly"]
  },
  {
    title: "Rosa Imperial",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Rosa Imperial close.webp",
    openImage: "/Rosa Imperial open.webp",
    keywords: ["rosa", "imperial", "quinceañera", "red", "rojo", "rose"]
  },
  {
    title: "Blue Serenity",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Blue Serenity close.webp",
    openImage: "/Blue Serenity open.webp",
    keywords: ["azul", "serenidad", "quinceañera", "blue", "serenity"]
  },
  {
    title: "Golden Elegance",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Golden Elegance close.webp",
    openImage: "/Golden Elegance open.webp",
    keywords: ["dorado", "elegancia", "quinceañera", "gold", "elegance", "mariposa", "butterfly", "beige","marfil"]
  },
  {
    title: "Ivory Bloom",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Ivory Bloom close.webp",
    openImage: "/Ivory Bloom open.webp",
    keywords: ["marfil", "flor", "quinceañera", "rosado", "blush", "ivory", "bloom", "butterfly", "mariposa","pink"]
  },
  {
    title: "Purple Elegance",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Purple Elegance close.webp",
    openImage: "/Purple Elegance open.webp",
    keywords: ["morado", "elegancia", "quinceañera", "purple", "elegance", "purpura", "mariposa", "butterfly"]
  },
  {
    title: "Blue Dream",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Blue Dream close.webp",
    openImage: "/Blue Dream open.webp",
    keywords: ["azul", "azul rey", "quinceañera", "blue","royal blue", "flor", "flower"]
  },
  {
    title: "Pink Blossom",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Pink Blossom close.webp",
    openImage: "/Pink Blossom open.webp",
    keywords: ["mariposa", "blush", "quinceañera", "pink", "rosado", "mariposa", "butterfly", "flor", "flower", "shiny"]
  },
  {
    title: "Ivory Cream",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Ivory Cream close.webp",
    openImage: "/Ivory Cream open.webp",
    keywords: ["marfil", "crema", "quinceañera", "ivory", "cream", "flor", "flower", "mariposa", "butterfly", "beige"]
  },
  {
    title: "Black Diamond",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Black Diamond close.webp",
    openImage: "/Black Diamond open.webp",
    keywords: ["black", "diamond", "quinceañera", "negro", "dark", "flor", "flower", "shiny"]
  },
  {
    title: "Sunflower Bloom",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Sunflower Bloom close.webp",
    openImage: "/Sunflower Bloom open.webp",
    keywords: ["girasol", "sunflower", "quinceañera", "amarillo", "yellow", "flor", "flower"]
  },
  {
    title: "Royal Violet",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Royal Violet close.webp",
    openImage: "/Royal Violet open.webp",
    keywords: ["princesa", "morada", "quinceañera", "purpura", "shiny", "flor", "flower"]
  },
  {
    title: "Ivory Blue",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Ivory Blue close.webp",
    openImage: "/Ivory Blue open.webp",
    keywords: ["marfil", "azul", "quinceañera", "blue", "mariposa", "butterfly"]
  },
  {
    title: "Emerald Quinceañera",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Emerald Quinceañera close.webp",
    openImage: "/Emerald Quinceañera open.webp",
    keywords: ["esmeralda", "quinceañera", "verde", "Green"]
  },
  {
    title: "Ivory Purple",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Ivory Purple close.webp",
    openImage: "/Ivory Purple open.webp",
    keywords: ["marfil", "morada", "quinceañera", "purpura", "purple", "mariposa", "butterfly", "lila", "Lavender", "Wisteria", "Lilac", "violeta", "violet"]
  },
  {
    title: "Blush Princess",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Blush Princess close.webp",
    openImage: "/Blush Princess open.webp",
    keywords: ["princesa", "blush", "quinceañera", "rosado", "pink"]
  },
  {
    title: "Lavender Dream",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Lavender Dream close.webp",
    openImage: "/Lavender Dream open.webp",
    keywords: ["princesa", "blush", "quinceañera", "rosado", "pink", "lavanda", "lavender", "violeta", "violet"]
  },
  {
    title: "Ivory Green",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Ivory Green close.webp",
    openImage: "/Ivory Green open.webp",
    keywords: ["marfil", "verde", "quinceañera", "green", "mariposa", "butterfly", "Pistachio"]
  },
  {
    title: "Red Ruby",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Red Ruby close.webp",
    openImage: "/Red Ruby open.webp",
    keywords: ["rojo", "ruby", "quinceañera", "red", "ruby", "rubi", "rosa", "rose"]
  },
  {
    title: "Green Serenity",
    category: "Quince Años",
    country: "co",
    price: "$49",
    closedImage: "/Green Serenity close.webp",
    openImage: "/Green Serenity open.webp",
    keywords: ["verde", "serenidad", "quinceañera", "green", "mariposa", "butterfly", "Pistachio"]
  },
   {
    title: "Unicorn Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Unicorn Party close.webp",
    openImage: "/Unicorn Party open foto.webp",
    keywords: ["unicornio", "fiesta", "cumpleaños", "rosa", "rosa pastel", "pastel", "pink", "Unicorn", "rosado"]
  },
  {
    title: "Unicorn Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Unicorn Party close.webp",
    openImage: "/Unicorn Party open.webp",
    keywords: ["unicornio", "fiesta", "cumpleaños", "rosa", "rosa pastel", "pastel", "pink", "Unicorn", "rosado"]
  },
  {
    title: "Soccer Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Soccer Party close.webp",
    openImage: "/Soccer Party open.webp",
    keywords: ["fútbol", "fiesta", "cumpleaños", "soccer", "football", "soccer party", "futbol"]
  },
  {
    title: "Little Chef",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Little Chef close.webp",
    openImage: "/Little Chef open.webp",
    keywords: ["chef", "cocina", "fiesta", "cumpleaños", "comida", "cooking", "kitchen"]
  },
  {
    title: "Dinosaur Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Dinosaur Party close.webp",
    openImage: "/Dinosaur Party open.webp",
    keywords: ["dinosaurio", "fiesta", "cumpleaños", "jurásico", "dino", "jurassic", "jurassic park", "jurassic world","green", "verde", "dinosaur"]
  },
  {
    title: "Princess Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Princess Party close.webp",
    openImage: "/Princess Party open foto.webp",
    keywords: ["princesa", "fiesta", "cumpleaños", "rosa", "rosa pastel", "pastel", "pink"]
  },
  {
    title: "Princess Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Princess Party close.webp",
    openImage: "/Princess Party open.webp",
    keywords: ["princesa", "fiesta", "cumpleaños", "rosa", "rosa pastel", "pastel", "pink", "princess", "princes"]
  },
  {
    title: "Fairy Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Fairy Party close.webp",
    openImage: "/Fairy Party open.webp",
    keywords: ["hada", "fiesta", "cumpleaños", "fairy", "hadas", "fairies","pastel", "morado", "purple", "violeta", "violet"]
  },
  
  {
    title: "Cars Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Cars Party close.webp",
    openImage: "/Cars Party open.webp",
    keywords: ["coches", "autos", "fiesta", "cumpleaños", "cars", "cars movie", "cars disney","car","carrro","carrros", "carrera", "race", "racing"]
  },
  {
    title: "Animals Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Animals Party close.webp",
    openImage: "/Animals Party open.webp",
    keywords: ["animales", "fiesta", "cumpleaños", "animales salvajes", "wild animals", "anumals", "jungle", "selva", "safari"]
  },
  {
    title: "Basketball Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Basketball Party close.webp",
    openImage: "/Basketball Party open.webp",
    keywords: ["baloncesto", "basketball", "fiesta", "cumpleaños", "basket", "basket ball", "basketball party"]
  },
  

{
  title: "Mermaid Party",
  category: "Cumpleaños y fiestas infantiles",
  country: "co",
  price: "$39",
  closedImage: "/Mermaid Party close.webp",
  openImage: "/Mermaid Party open foto.webp",
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
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Super Party close.webp",
    openImage: "/Super Party open.webp",
    keywords: ["super", "fiesta", "cumpleaños", "Heroes", "superhéroes", "hero", "superhero", "superheroes"]
  },

  {
    title: "Robot Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Robot Party close.webp",
    openImage: "/Robot Party open.webp",
    keywords: ["robot", "fiesta", "cumpleaños", "robots", "robotics", "technology", "tech"]
  },
  {
    title: "Spa Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Spa Party close.webp",
    openImage: "/Spa Party open.webp",
    keywords: ["spa", "fiesta", "cumpleaños", "relax", "beauty", "pampering", "self-care"]
  },
  {
    title: "Speed Racer",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Speed Racer close.webp",
    openImage: "/Speed Racer open.webp",
    keywords: ["carros", "fiesta", "cumpleaños", "carrera", "speed", "car", "racer","cars", "race", "racing"]
  },
  {
    title: "Hawaii Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Hawaii Party close.webp",
    openImage: "/Hawaii Party open.webp",
    keywords: ["hawaii", "fiesta", "cumpleaños", "tropical", "luau", "beach", "island", "summer", "pool", "palm trees", "sunset"]
  },
  {
    title: "Aloha Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Aloha Party close.webp",
    openImage: "/Aloha Party open cumple.webp",
    keywords: ["hawaii", "fiesta", "cumpleaños", "tropical", "luau", "beach", "island", "summer", "pool", "palm trees", "sunset"]
  },
  {
    title: "Magical Bunny",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Magical Bunny close.webp",
    openImage: "/Magical Bunny open.webp",
    keywords: ["conejo", "bunny", "magical", "fiesta", "cumpleaños", "magia", "magic", "rabbit", "easter", "spring", "cute", "adorable", "magical bunny"]
  },
  {
    title: "Magic Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Magic Party close.webp",
    openImage: "/Magic Party open.webp",
    keywords: ["magia", "magic", "fiesta", "cumpleaños", "magical", "illusion", "trick", "wizard", "sorcerer", "enchantment"]
  },
  {
    title: "Soccer Star",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Soccer Star close.webp",
    openImage: "/Soccer Star open.webp",
    keywords: ["fútbol", "soccer", "estrella", "fiesta", "cumpleaños", "football", "soccer party"]
  },
  {
    title: "Little Cowboy",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Little Cowboy close.webp",
    openImage: "/Little Cowboy open.webp",
    keywords: ["cowboy", "vaquero", "fiesta", "cumpleaños", "western", "western party", "cowboy party"]
  },
  {
    title: "Cowboy Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Cowboy Party close.webp",
    openImage: "/Cowboy Party open.webp",
    keywords: ["cowboy", "vaquero", "fiesta", "cumpleaños", "western", "western party", "cowboy party"]
  },
  {
    title: "Rock Star Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Rock Star Party close.webp",
    openImage: "/Rock Star Party open.webp",
    keywords: ["rock", "star", "fiesta", "cumpleaños", "music", "guitar", "band", "concert", "rockstar"]
  },
  {
    title: "Pool Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Pool Party close.webp",
    openImage: "/Pool Party open.webp",
    keywords: ["piscina", "pool", "fiesta", "cumpleaños", "summer", "beach", "water", "swimming"]
  },
  {
    title: "Fairy Garden",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Fairy Garden close.webp",
    openImage: "/Fairy Garden open.webp",
    keywords: ["hada", "fairy", "jardín", "fiesta", "cumpleaños", "garden", "flowers", "magic", "enchantment"]
  },
  {
    title: "Motorcycle",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Motorcycle close.webp",
    openImage: "/Motorcycle open.webp",
    keywords: ["moto", "motorcycle", "fiesta", "cumpleaños", "speed", "racer"]
  },
  {
    title: "Cute Kittens",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Cute Kittens close.webp",
    openImage: "/Cute Kittens open.webp",
    keywords: ["gatitos", "kittens", "fiesta", "cumpleaños", "cute", "adorable", "cats", "kitty"]
  },
  {
    title: "Blue Doggy",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Blue Doggy close.webp",
    openImage: "/Blue Doggy open.webp",
    keywords: ["perrito", "doggy", "fiesta", "cumpleaños", "cute", "adorable", "dog", "puppy"]
  },
  {
    title: "Outer Space",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Outer Space close.webp",
    openImage: "/Outer Space open.webp",
    keywords: ["espacio", "space", "fiesta", "cumpleaños", "planetas", "planets", "astronauta", "astronaut", "galaxia", "galaxy"]
  },
  {
    title: "Purple Dino",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Purple Dino close.webp",
    openImage: "/Purple Dino open.webp",
    keywords: ["dinosaurio", "dino", "fiesta", "cumpleaños", "purple", "morado", "jurassic", "jurassic park", "jurassic world"]
  },
  {
    title: "Science Lab",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Science Lab close.webp",
    openImage: "/Science Lab open.webp",
    keywords: ["ciencia", "science", "fiesta", "cumpleaños", "experiment", "lab", "scientific"]
  },
  {
    title: "Pirate Legacy",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Pirate Legacy close.webp",
    openImage: "/Pirate Legacy open.webp",
    keywords: ["pirata", "pirates", "fiesta", "cumpleaños", "treasure", "map", "ship", "adventure"]
  },
  {
    title: "Choo Choo Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Choo Choo Party close.webp",
    openImage: "/Choo Choo Party open.webp",
    keywords: ["pirata", "pirates", "fiesta", "cumpleaños", "tren", "train", "choo choo", "railroad", "locomotive"]
  },
  {
    title: "Art Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Art Party close.webp",
    openImage: "/Art Party open.webp",
    keywords: ["arte", "art", "fiesta", "cumpleaños", "painting", "drawing", "creative", "crafts"]
  },
  {
    title: "My First Race",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/My First Race close.webp",
    openImage: "/My First Race open.webp",
    keywords: ["carro", "race", "car", "cumpleaños", "speed", "racer"]
  }, 
  {
    title: "Under the Sea",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Under the Sea close.webp",
    openImage: "/Under the Sea open.webp",
    keywords: ["sea", "mar", "pez", "cumpleaños", "under the sea", "ocean", "acuario","peces","fish"]
  },
  {
    title: "Cinema Party",
    category: "Cumpleaños y fiestas infantiles",
    country: "co",
    price: "$39",
    closedImage: "/Cinema Party close.webp",
    openImage: "/Cinema Party open.webp",
    keywords: ["cinema", "cinema party", "cine", "cumpleaños", "pelicula", "actor", "movie","Hollywood"]
  },
  {
    title: "Blue Teddy",
    category: "Baby Shower",
    country: "co",
    price: "$39",
    closedImage: "/Blue Teddy close.webp",
    openImage: "/Blue Teddy open.webp",
    keywords: ["osito", "teddy", "fiesta", "cumpleaños","baby shower", "baby", "shower", "boy", "niño", "azul", "blue"]
  },
  {
    title: "Blush Teddy",
    category: "Baby Shower",
    country: "co",
    price: "$39",
    closedImage: "/Blush Teddy close.webp",
    openImage: "/Blush Teddy open.webp",
    keywords: ["osito", "teddy", "fiesta", "cumpleaños","baby shower", "baby", "shower", "girl", "niña", "rosado", "blush"]
  },
  {
    title: "Blush & Gold",
    category: "Baby Shower",
    country: "co",
    price: "$39",
    closedImage: "/Blush & Gold close.webp",
    openImage: "/Blush & Gold open.webp",
    keywords: ["blush", "gold", "fiesta", "cumpleaños","baby shower", "baby", "shower", "girl", "niña", "rosado", "blush"]
  },
  {
    title: "Baby Bloom",
    category: "Baby Shower",
    country: "co",
    price: "$39",
    closedImage: "/Baby Bloom close.webp",
    openImage: "/Baby Bloom open.webp",
    keywords: ["baby", "bloom", "fiesta", "cumpleaños","baby shower", "baby", "shower"]
  },
  {
    title: "Baby Blue",
    category: "Baby Shower",
    country: "co",
    price: "$39",
    closedImage: "/Baby Blue close.webp",
    openImage: "/Baby Blue open.webp",
    keywords: ["baby", "blue", "fiesta", "cumpleaños","baby shower", "baby", "shower", "boy", "niño", "azul", "blue"]
  },

  {
    title: "Christmas Evergreen",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Christmas Evergreen close.webp",
    openImage: "/Christmas Evergreen open.webp",
    keywords: ["navidad", "christmas", "fiesta", "cumpleaños", "evergreen", "decoración"]
  },
  
  {
    title: "Halloween",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Halloween close.webp",
    openImage: "/Halloween open.webp",
    keywords: ["halloween", "fantasía", "fiesta", "cumpleaños", "disfraz", "disfrazes", "disfraces", "disguise", "costume"]
  },
  {
    title: "Christmas Wishes",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Christmas Wishes close.webp",
    openImage: "/Christmas Wishes open.webp",
    keywords: ["navidad", "christmas", "fiesta", "cumpleaños", "wishes", "blessings"]
  },
  {
    title: "Bachelorette party",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Bachelorette party close.webp",
    openImage: "/Bachelorette party open.webp",
    keywords: ["Bride", "Bride to Be", "despedida", "soltera", "Bachelorette", "party"]
  },
  {
    title: "Orange Halloween",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Orange Halloween close.webp",
    openImage: "/Orange Halloween open.webp",
    keywords: ["halloween", "naranja", "fiesta", "cumpleaños", "disfraz", "disfrazes", "disfraces", "disguise", "costume"]
  },
  {
    title: "Bride to Be Bash",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Bride to Be Bash close.webp",
    openImage: "/Bride to Be Bash open.webp",
    keywords: ["Bride", "Bride to Be", "despedida", "soltera", "Bachelorette", "party"]
  },
  {
    title: "Groom Night",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Groom Night close.webp",
    openImage: "/Groom Night open.webp",
    keywords: ["Groom", "Groom to Be", "despedida", "soltero", "Bachelorette", "party"]
  },
   {
    title: "Aloha Party",
    category: "Celebraciones y fiestas",
    country: "co",
    price: "$39",
    closedImage: "/Aloha Party close.webp",
    openImage: "/Aloha Party open.webp",
    keywords: ["hawaii", "fiesta", "cumpleaños", "tropical", "island"]
  },
  
  {
    title: "Silk Blessing",
    category: "Primera comunión y bautismo",
    country: "co",
    price: "$39",
    closedImage: "/Silk Blessing close.webp",
    openImage: "/Silk Blessing open foto.webp",
    keywords: ["seda", "bendición", "fiesta", "cumpleaños", "comunión", "bautismo"]
  },
  {
  title: "Golden Blessing",
  category: "Primera comunión y bautismo",
  country: "co",
  price: "$39",
  closedImage: "/Golden Blessing close.webp",
  openImage: "/Golden Blessing open.webp",
  keywords: ["oro", "bendición", "fiesta", "cumpleaños", "comunión", "bautismo"]
},
{
  title: "Divine Grace",
  category: "Primera comunión y bautismo",
  country: "co",
  price: "$39",
  closedImage: "/Divine Grace close.webp",
  openImage: "/Divine Grace open foto.webp",
  keywords: ["divina", "gracia", "fiesta", "cumpleaños", "comunión", "bautismo"]
},
{
  title: "Divine Grace",
  category: "Primera comunión y bautismo",
  country: "co",
  price: "$39",
  closedImage: "/Divine Grace close.webp",
  openImage: "/Divine Grace open.webp",
  keywords: ["divina", "gracia", "fiesta", "cumpleaños", "comunión", "bautismo"]
},

  {
    title: "Waters of Grace",
    category: "Primera comunión y bautismo",
    country: "co",
    price: "$39",
    closedImage: "/Waters of Grace close.webp",
    openImage: "/Waters of Grace open.webp",
    keywords: ["aguas", "gracia", "fiesta", "cumpleaños", "comunión", "bautismo"]
  },
  {
    title: "Olive Communion",
    category: "Primera comunión y bautismo",
    country: "co",
    price: "$39",
    closedImage: "/Olive Communion close.webp",
    openImage: "/Olive Communion open foto.webp",
    keywords: ["olivo", "comunión", "bautismo", "fiesta", "cumpleaños", "comunión", "bautismo"]
  },
  {
    title: "Olive Communion",
    category: "Primera comunión y bautismo",
    country: "co",
    price: "$39",
    closedImage: "/Olive Communion close.webp",
    openImage: "/Olive Communion open.webp",
    keywords: ["olivo", "comunión", "bautismo", "fiesta", "cumpleaños", "comunión", "bautismo"]
  },
  {
    title: "A Blessed Beginning",
    category: "Primera comunión y bautismo",
    country: "co",
    price: "$39",
    closedImage: "/A Blessed Beginning close.webp",
    openImage: "/A Blessed Beginning open.webp",
    keywords: ["bendición", "comunión", "bautismo", "fiesta", "cumpleaños", "comunión", "bautismo"]
  },
  {
  title: "Precious Moment",
  category: "Revelación de género",
  country: "co",
  price: "$39",
  closedImage: "/Precious Moment close.webp",
  openImage: "/Precious Moment open.webp",
  keywords: ["sorpresa", "regalo", "fiesta", "cumpleaños", "revelación de género", "gold", "oro"]
  },
  {
  title: "A Little Surprise",
  category: "Revelación de género",
  country: "co",
  price: "$39",
  closedImage: "/A Little Surprise close.webp",
  openImage: "/A Little Surprise open.webp",
  keywords: ["sorpresa", "regalo", "fiesta", "cumpleaños", "revelación de género", "pink", "rosa", "rosado"]
  },
  
  {
  title: "Kitty Reveal",
  category: "Revelación de género",
  country: "co",
  price: "$39",
  closedImage: "/Kitty Reveal close.webp",
  openImage: "/Kitty Reveal open.webp",
  keywords: ["gatito", "revelación", "fiesta", "cumpleaños","revelacion de genero", "gato", "kitty", "cat", "pink", "rosa", "rosado"]
  },
  {
  title: "Little Secret",
  category: "Revelación de género",
  country: "co",
  price: "$39",
  closedImage: "/Little Secret close.webp",
  openImage: "/Little Secret open.webp",
  keywords: ["sorpresa", "regalo", "fiesta", "cumpleaños","revelacion de genero", "sky", "cielo", "blue", "azul", "pink", "rosa", "rosado"]
  },
  {
  title: "Sky & Blush",
  category: "Revelación de género",
  country: "co",
  price: "$39",
  closedImage: "/Sky & Blush close.webp",
  openImage: "/Sky & Blush open.webp",
  keywords: ["cielo", "blush", "fiesta", "cumpleaños", "revelacion de genero", "sky", "cielo", "blue", "azul", "pink", "rosa", "rosado"]
  },
  {
  title: "Blue & Blush",
  category: "Revelación de género",
  country: "co",
  price: "$39",
  closedImage: "/Blue & Blush close.webp",
  openImage: "/Blue & Blush open.webp",
  keywords: ["azul", "blush", "fiesta", "cumpleaños", "revelacion de genero", "sky", "cielo", "blue", "azul", "pink", "rosa", "rosado"]
  },

  {
    title: "Annual Celebration",
    category: "Corporativo",
    country: "co",
    price: "$49",
    closedImage: "/Annual Celebration close.webp",
    openImage: "/Annual Celebration open.webp",
    keywords: ["aniversario", "fiesta", "cumpleaños", "corporativo", "celebración"]
  },
  {
    title: "Golden Legacy",
    category: "Corporativo",
    country: "co",
    price: "$49",
    closedImage: "/Golden Legacy close.webp",
    openImage: "/Golden Legacy open.webp",
    keywords: ["legado", "dorado", "fiesta", "cumpleaños", "corporativo", "celebración"]
  },
  {
    title: "New Horizons",
    category: "Corporativo",
    country: "co",
    price: "$49",
    closedImage: "/New Horizons close.webp",
    openImage: "/New Horizons open.webp",
    keywords: ["nuevos", "horizontes", "fiesta", "cumpleaños", "corporativo", "celebración"]
  },
  {
    title: "Royal Awards",
    category: "Corporativo",
    country: "co",
    price: "$49",
    closedImage: "/Royal Awards close.webp",
    openImage: "/Royal Awards open.webp",
    keywords: ["premios", "royal", "fiesta", "cumpleaños", "corporativo", "celebración"]
  },
  {
    title: "Convention",
    category: "Corporativo",
    country: "co",
    price: "$49",
    closedImage: "/Convention close.webp",
    openImage: "/Convention open.webp",
    keywords: ["congreso", "fiesta", "cumpleaños", "corporativo", "celebración"]
  },
  {
    title: "Noble Graduate",
    category: "Graduación",
    country: "co",
    price: "$39",
    closedImage: "/Noble Graduate close.webp",
    openImage: "/Noble Graduate open.webp",
    keywords: ["graduación", "fiesta", "cumpleaños", "graduación", "celebración"]
  },
  {
    title: "Academic Elegance",
    category: "Graduación",
    country: "co",
    price: "$39",
    closedImage: "/Academic Elegance close.webp",
    openImage: "/Academic Elegance open.webp",
    keywords: ["académica", "elegancia", "fiesta", "cumpleaños", "graduación", "celebración", "black", "negro", "gold", "oro"]
  },
  {
    title: "Emerald Achievement",
    category: "Graduación",
    country: "co",
    price: "$39",
    closedImage: "/Emerald Achievement close.webp",
    openImage: "/Emerald Achievement open.webp",
    keywords: ["orgulloso", "logro", "fiesta", "cumpleaños", "graduación", "celebración", "green", "verde"]
  },
  {
    title: "New Chapter",
    category: "Graduación",
    country: "co",
    price: "$39",
    closedImage: "/New Chapter close.webp",
    openImage: "/New Chapter open.webp",
    keywords: ["nuevo", "capítulo", "fiesta", "cumpleaños", "graduación", "celebración", "gold", "oro"]
  },
  {
    title: "Proud Achievement",
    category: "Graduación",
    country: "co",
    price: "$39",
    closedImage: "/Proud Achievement close.webp",
    openImage: "/Proud Achievement open.webp",
    keywords: ["orgulloso", "logro", "fiesta", "cumpleaños", "graduación", "celebración", "azul", "blue"]
  },
  {
    title: "Blue Graduation",
    category: "Graduación",
    country: "co",
    price: "$39",
    closedImage: "/Blue Graduation close.webp",
    openImage: "/Blue Graduation open.webp",
    keywords: ["azul", "graduación", "fiesta", "cumpleaños", "blue", "graduation"]
  },
  {
    title: "Blush Graduation",
    category: "Graduación",
    country: "co",
    price: "$39",
    closedImage: "/Blush Graduation close.webp",
    openImage: "/Blush Graduation open.webp",
    keywords: ["blush", "graduación", "fiesta", "cumpleaños", "blush", "graduation", "rosado", "rosa"]
  },
  {
    title: "Serenity",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open foto.webp",
    keywords: ["serenidad", "matrimonio", "fiesta", "verde", "green", "Pistachio", "pistacho"]
  },
  {
    title: "Serenity",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Serenity close.webp",
    openImage: "/Serenity open.webp",
    keywords: ["serenidad", "matrimonio", "fiesta", "cumpleaños", "verde", "green", "Pistachio", "pistacho"]
  },
  {
    title: "Pearl Blossom",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open foto.webp",
    keywords: ["perla", "florecer", "matrimonio", "blanco", "white"]
  },
  {
    title: "Pearl Blossom",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Pearl Blossom close.webp",
    openImage: "/Pearl Blossom open.webp",
    keywords: ["perla", "florecer", "matrimonio", "blanco", "white"]
  },
  {
    title: "Blush Romance",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open foto.webp",
    keywords: ["blush", "romance", "matrimonio", "rosa", "rosado", "pink", "pastele"]
  },
  {
    title: "Blush Romance",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Blush Romance close.webp",
    openImage: "/Blush Romance open.webp",
    keywords: ["blush", "romance", "matrimonio","rosado", "rosa", "pink", "pastele"]
  },

  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open foto.webp",
    keywords: ["plata", "boda", "fiesta", "cumpleaños", "silver", "wedding", "gris", "gray"]
  },
  {
    title: "Silver Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Silver Wedding close.webp",
    openImage: "/Silver Wedding open.webp",
    keywords: ["plata", "boda", "fiesta", "cumpleaños", "silver", "wedding", "gris", "gray"]
  },
  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open foto.webp",
    keywords: ["oro", "boda", "fiesta", "cumpleaños", "gold", "wedding", "amarillo", "yellow"]
  },
  {
    title: "Gold Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Gold Wedding close.webp",
    openImage: "/Gold Wedding open.webp",
    keywords: ["oro", "boda", "gold", "wedding", "amarillo", "yellow"]
  },
  
  {
    title: "Golden Botanical",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open foto.webp",
    keywords: ["oro", "botánica", "matrimonio", "wedding", "golden", "gold", "beige", "beige"]
  },
  {
    title: "Golden Botanical",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Golden Botanical close.webp",
    openImage: "/Golden Botanical open.webp",
    keywords: ["oro", "botánica", "matrimonio", "fiesta", "cumpleaños", "wedding", "golden", "gold", "beige", "beige"]
  },
  {
    title: "Sakura Romance",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open foto.webp",
    keywords: ["sakura", "romance", "matrimonio", "jappan", "japonés", "japanese", "cherry blossom", "flor de cerezo", "beige", "beige"]
  },
  {
    title: "Sakura Romance",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Sakura Romance close.webp",
    openImage: "/Sakura Romance open.webp",
    keywords: ["sakura", "romance", "matrimonio", "jappan", "japonés", "japanese", "cherry blossom", "flor de cerezo", "beige", "beige"]
  },
  {
    title: "Sakura Blossom",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Sakura Blossom close.webp",
    openImage: "/Sakura Blossom open foto.webp",
     keywords: ["sakura", "romance", "matrimonio", "jappan", "japonés", "japanese", "cherry blossom", "flor de cerezo", "rosado", "rosa", "blush", "pink"]
  },
  {
    title: "Sakura Blossom",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Sakura Blossom close.webp",
    openImage: "/Sakura Blossom open.webp",
    keywords: ["sakura", "romance", "matrimonio", "jappan", "japonés", "japanese", "cherry blossom", "flor de cerezo", "rosado", "rosa", "blush", "pink"]
  },
  {
    title: "Autumn Whisper",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open foto.webp",
    keywords: ["otoño", "susurro", "matrimonio", "fiesta", "cumpleaños", "autumn", "whisper", "fall", "leaves", "beige", "beige"]
  },
  {
    title: "Autumn Whisper",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Autumn Whisper close.webp",
    openImage: "/Autumn Whisper open.webp",
    keywords: ["otoño", "susurro", "matrimonio", "fiesta", "cumpleaños", "autumn", "whisper", "fall", "leaves", "beige", "beige"]
  },
  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open foto.webp",
    keywords: ["verde", "boda", "fiesta", "wedding", "green"]
  },
  {
    title: "Green Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Green Wedding close.webp",
    openImage: "/Green Wedding open.webp",
    keywords: ["verde", "boda", "fiesta", "wedding", "green"]
  },
  {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open foto.webp",
    keywords: ["azul", "boda", "fiesta", "wedding", "blue"]
  },
  {
    title: "Blue Wedding",
    category: "Matrimonio",
    country: "co",
    price: "$39",
    closedImage: "/Blue Wedding close.webp",
    openImage: "/Blue Wedding open.webp",
    keywords: ["azul", "boda", "fiesta", "wedding", "blue"]
  },

];