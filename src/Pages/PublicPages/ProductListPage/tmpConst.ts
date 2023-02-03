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
  // propertiees listed in Filter interface
  properties: Option[];
}

export interface Option {
  title: string;
  propertyName: string;
  value: string;
}

export interface SidebarData {
  propertyName: string;
  title: string;
  values: NameWithCount[];
}

export type CategoryParams = {
  category: string;
};

export interface NameWithCount {
  value: string | number;
  count: number;
}
