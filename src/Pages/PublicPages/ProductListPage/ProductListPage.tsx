import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdcutListAside from "./ProdcutListAside/ProdcutListAside";
import deep from "deep-equal";

import ProductListList from "./ProductListList/ProductListList";
import { Filter, filterOptions, items } from "./tmpConst";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import { DataContext, ItemProperties } from "../../../context/DataContext";
import { createSidebBarData, filterItems } from "../../../utils/filterOptions";

type CategoryParams = {
  category: string;
};

export interface SidebarData {
  propertyName: string;
  title: string;
  values: NameWithCount[];
}
export interface NameWithCount {
  value: string | number;
  count: number;
}
const filterToInitialState = (obj: Filter[]) => {
  const res: Record<string, string[]> = {};
  obj.forEach((item, index) => {
    res[item.propertyName] = [];
  });
  return res;
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0;

  & > * {
  }
  padding-bottom: 3rem;
`;

const ProductListPage = () => {
  const { category } = useParams<CategoryParams>();
  const { contentData } = useContext(DataContext);
  const [items, setItems] = useState<ItemProperties[]>([]);
  // if category is in not in DoorBackTwoTone, we will show error component
  //  product list will be fetched frokm db
  // form will be based on type od object, fetched from db

  const [filterSettings, setFilterSettings] = useState<
    Record<string, string[]>
  >(filterToInitialState([]));

  const [asideData, setAsideData] = useState<SidebarData[]>([]);
  const onRefChange = useCallback((node) => {
    if (node === null) {
      // DOM node referenced by ref has been unmounted
    } else {
      if (!deep(node.values, filterSettings)) {
        setFilterSettings(node.values);
      }
      // DOM node referenced by ref has changed and exists
    }
  }, []);

  useEffect(() => {
    if (contentData.inventory[category] !== undefined) {
      setItems(contentData.inventory[category]);
    } else {
      console.log("current cant set items");
    }
  }, [category, contentData]);

  useEffect(() => {
    filterItems(items, filterSettings);
  }, [items, filterSettings]);

  useEffect(() => {
    console.log(items, "before ss ");
    const res = createSidebBarData(items);
    console.log(res, "ss");
    setAsideData(res);
  }, [items]);

  return (
    <PageCenterWrapWithBread>
      <Wrap>
        {JSON.stringify(filterSettings)}
        <ProdcutListAside
          categoryName={category}
          categoryCount={items.length}
          data={asideData}
          dynamicValues={filterSettings}
          formRef={onRefChange}
        />
        {/* {JSON.stringify(filterItems(items, filterSettings))} */}
        <ProductListList items={items} />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default ProductListPage;
