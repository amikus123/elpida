import { nameToPublicLink } from "../utils/imageFunctions";
export interface Category {
  image: string;
  count: number;
  title: string;
  link: string;
}

export enum categoryPath  {

} 
export const categories: Category[] = [
  {
    image: nameToPublicLink("agd", "/categories"),
    count: 6,
    title: "AGD",
    link: "categories/agd",
  },
  {
    image: nameToPublicLink("electronics", "/categories"),
    count: 16,
    title: "Electronics",
    link: "categories/electronics",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    count: 8,
    title: "Clothing",
    link: "categories/clothing",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    count: 8,
    title: "Clothing",
    link: "categories/clothing",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    count: 8,
    title: "Clothing",
    link: "categories/clothing",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    count: 8,
    title: "Clothing",
    link: "categories/clothing",
  },
];
