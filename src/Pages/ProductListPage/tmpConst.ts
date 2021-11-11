export interface Filter {
  title: string;
  propertyName: string;
  values: string[];
}


export interface ItemData  {
  price: number;
  rating: number;
  ratingCount: number;
  id: string;
  image: string;
  linkToPage: string;
  // propertiees listed in Filter interfcaer
  [key: string]: string | number;
} 

export const items: ItemData[] = [
  {
    price: 13,
    rating: 3,
    ratingCount: 61,
    id: "Asdasas",
    image: "a",
    linkToPage: "/",
    title:"Lodkowska Lg Gbb940BMQZT"
    },
    {
      price: 13,
      rating: 3,
      ratingCount: 61,
      id: "Asdasas",
      image: "a",
      linkToPage: "/",
      title:"Lodkowska Lg Gbb940BMQZT"
      },
];

export const filterOptions: Filter[] = [
  {
    title: "Company",
    propertyName: "company",
    values: ["Beko", "Samsung", "LG"],
  },
  {
    title: "Height",
    propertyName: "Height",
    values: ["200cm", "190cm", "180cm"],
  },
  {
    title: "Width",
    propertyName: "width",
    values: ["100cm", "90cm", "80cm"],
  },
  {
    title: "Energy class",
    propertyName: "energyCLass",
    values: ["A", "B", "C"],
  },
];

export interface FilterState {
  title: string;
  propertyName: string;
  // if all items in boolmap are false, than we show all items
  boolMap: Record<string, boolean>;
}

