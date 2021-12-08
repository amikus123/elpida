import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/core/Breadcrumbs/MyBreadcrumbs";
import ProdcutListAside from "./ProdcutListAside/ProdcutListAside";
import deep from "deep-equal";

import ProductListList from "./ProductListList/ProductListList";
import { Filter, filterOptions, items } from "./tmpConst";
import styled from "styled-components";
import PageCenterWrap, {
  PageCenterWrapWithBread,
} from "../../../components/containers/PageCenterWrap";
type CategoryParams = {
  category: string;
};

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

  // if category is in not in DoorBackTwoTone, we will show error component
  //  product list will be fetched frokm db
  // form will be based on type od object, fetched from db

  const [filterSettings, setFilterSettings] = useState<
    Record<string, string[]>
  >(filterToInitialState(filterOptions));

  const onRefChange = useCallback((node) => {
    if (node === null) {
      // DOM node referenced by ref has been unmounted
    } else {
      if (!deep(node.values, filterSettings)) {
        setFilterSettings(node.values);
        console.log("zmieniono", node.values);
      }
      // DOM node referenced by ref has changed and exists
    }
  }, []);

  return (
    <PageCenterWrapWithBread>
    <Wrap>
      <ProdcutListAside
        categoryName={"Lodowki"}
        categoryCount={items.length}
        data={filterOptions}
        dynamicValues={filterSettings}
        formRef={onRefChange}
      />
      <ProductListList items={items} />
    </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default ProductListPage;
