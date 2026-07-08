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
    title: "Emerald Wedding",
    category: "Weddings",
    country: "us",
    price: "$49",
    closedImage: "/emeraldwedding_close.jpeg",
    openImage: "/emeraldwedding_open.jpeg",
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