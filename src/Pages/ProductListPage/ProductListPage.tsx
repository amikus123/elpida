import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/core/Breadcrumbs/Breadcrumbs";
import ProdcutListAside from "./ProdcutListAside/ProdcutListAside";
import deep from "deep-equal"

import ProductListList from "./ProductListList/ProductListList";
type CategoryParams = {
  slug: string;
};

export interface Filter {
  title: string;
  propertyName: string;
  values: string[];
}

const filterOptions: Filter[] = [
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

const getBoolMap = (arr: string[]) => {
  const res: Record<string, boolean> = {};
  arr.forEach((item, key) => {
    res[item] = false;
  });
  return res;
};
const filterToInitialState = (obj: Filter[]) => {
  const res: Record<string, string[]> = {};
  obj.forEach((item, index) => {
    res[item.propertyName] = [];
  });
  return res;
};

const ProductListPage = () => {
  const { slug } = useParams<CategoryParams>();
  const formRef = useRef();

  // if category is in not in DoorBackTwoTone, we will show error component
  //  product list will be fetched frokm db
  // form will be based on type od object, fetched from db

  const [filterSettings, setFilterSettings] = useState<
    Record<string, string[]>
  >(filterToInitialState(filterOptions));


  const onRefChange = useCallback(node => {
    if (node === null) { 
      // DOM node referenced by ref has been unmounted
    } else {
      if(!deep(node.values,filterSettings)){
        setFilterSettings(node.values)
        console.log("zmieniono",node.values)
      }
      // DOM node referenced by ref has changed and exists
    }
  }, []);
  

  return (
    <div>
      <Breadcrumbs />
      {JSON.stringify(filterSettings)}
      <div>
        <ProdcutListAside
          data={filterOptions}
          dynamicValues={filterSettings}
          formRef ={onRefChange}

        />
        <ProductListList />
      </div>
      aaaasaaa
    </div>
  );
};

export default ProductListPage;
