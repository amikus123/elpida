export interface Filter {
  title: string;
  propertyName: string;
  values: string[];
}

export interface ItemData {
  price: number;
  rating: number;
  ratingCount: number;
  id: string;
  images: string[];
  linkToPage: string;
  title: string;
  // propertiees listed in Filter interfcaer
  properties: Option[];
}

export const items: ItemData[] = [
  {
    price: 13,
    rating: 3,
    ratingCount: 61,
    id: "Asdasas",
    images: ["open", "closed"],
    linkToPage: "categories/agd/a",
    title: "Lodkowska Lg Gbb940BMQZT",
    properties: [
      {
        title: "Company",
        propertyName: "company",
        value: "Samsung",
      },
      {
        title: "Height",
        propertyName: "height",
        value: "190cm",
      },
      {
        title: "Width",
        propertyName: "width",
        value: "90cm",
      },
      {
        title: "Energy class",
        propertyName: "energyCLass",
        value: "B",
      },
    ],
  },
  {
    price: 13,
    rating: 3,
    ratingCount: 61,
    id: "Asdasas",
    images: ["open", "closed"],
    linkToPage: "categories/agd/a",
    title: "Lodkowska Lg Gbb940BMQZT",
    properties: [
      {
        title: "Company",
        propertyName: "company",
        value: "Samsung",
      },
      {
        title: "Height",
        propertyName: "height",
        value: "190cm",
      },
      {
        title: "Width",
        propertyName: "width",
        value: "90cm",
      },
      {
        title: "Energy class",
        propertyName: "energyCLass",
        value: "B",
      },
    ],
  },
  {
    price: 13,
    rating: 3,
    ratingCount: 61,
    id: "Asdasas",
    images: ["open", "closed"],
    linkToPage: "categories/agd/a",
    title: "Lodkowska Lg Gbb940BMQZT",
    properties: [
      {
        title: "Company",
        propertyName: "company",
        value: "Samsung",
      },
      {
        title: "Height",
        propertyName: "height",
        value: "190cm",
      },
      {
        title: "Width",
        propertyName: "width",
        value: "90cm",
      },
      {
        title: "Energy class",
        propertyName: "energyCLass",
        value: "B",
      },
    ],
  },
];

export interface Option {
  title: string;
  propertyName: string;
  value: string;
}
export const filterOptions: Filter[] = [
  {
    title: "Company",
    propertyName: "company",
    values: ["Beko", "Samsung", "LG"],
  },
  {
    title: "Height",
    propertyName: "height",
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
