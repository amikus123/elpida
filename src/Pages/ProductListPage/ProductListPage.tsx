import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/core/Breadcrumbs/Breadcrumbs";
import ProdcutListAside from "./ProdcutListAside/ProdcutListAside";
import deep from "deep-equal";

import ProductListList from "./ProductListList/ProductListList";
import { Filter, filterOptions, items } from "./tmpConst";
import styled from "styled-components";
import PageCenterWrap from "../../containers/PageCenterWrap";
type CategoryParams = {
  slug: string;
};

const filterToInitialState = (obj: Filter[]) => {
  const res: Record<string, string[]> = {};
  obj.forEach((item, index) => {
    res[item.propertyName] = [];
  });
  return res;
};

const ContentWrap = styled(PageCenterWrap)`
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

const Wrap = styled(PageCenterWrap)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`;

const ProductListPage = () => {
  const { slug } = useParams<CategoryParams>();

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
    <Wrap>
      <Breadcrumbs />
      <ContentWrap>
        <ProdcutListAside
          categoryName={"Lodowki"}
          categoryCount={items.length}
          data={filterOptions}
          dynamicValues={filterSettings}
          formRef={onRefChange}
        />
        <ProductListList items={items} />
      </ContentWrap>
    </Wrap>
  );
};

export default ProductListPage;
