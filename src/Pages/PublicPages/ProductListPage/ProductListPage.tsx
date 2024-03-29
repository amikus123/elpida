import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import ProdcutListAside from "./ProdcutListAside/ProdcutListAside";
import deep from "deep-equal";

import ProductListList from "./ProductListList/ProductListList";
import { CategoryParams, Filter, SidebarData } from "./tmpConst";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import { DataContext, ItemProperties } from "../../../context/DataContext";
import { createSidebBarData, filterItems } from "../../../utils/filterOptions";
import Spinner from "../../../components/core/Loading/Spinner";
import MyText from "../../../components/core/Text/MyText";
import { PUBLIC_ROUTES } from "../../../constans/routes";

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
  padding-bottom: 3rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
`;

const ProductListPage = () => {
  const { category } = useParams<CategoryParams>();
  const { contentData } = useContext(DataContext);
  const [items, setItems] = useState<ItemProperties[]>([]);

  const [filterSettings, setFilterSettings] = useState<
    Record<string, string[] | number[]>
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
    // not including prevents infinite loop
  }, []);

  useLayoutEffect(() => {
    if (contentData.inventory[category] !== undefined) {
      setItems(contentData.inventory[category]);
    }
  }, [category, contentData]);

  useLayoutEffect(() => {
    filterItems(items, filterSettings);
  }, [items, filterSettings]);

  useLayoutEffect(() => {
    const res = createSidebBarData(items);
    setAsideData(res);
  }, [items]);

  const getElement = () => {
    if (
      Object.keys(contentData.inventory).length !== 0 &&
      contentData.inventory[category] === undefined
    ) {
      return (
        <ErrorWrap>
          <MyText>Selected category does not exit</MyText>
          <MyText style={{ color: "orange" }} to={PUBLIC_ROUTES.CATEGORIES}>
            Browse items
          </MyText>
        </ErrorWrap>
      );
    } else {
      return <Spinner showText={true} />;
    }
  };

  return (
    <PageCenterWrapWithBread>
      {asideData.length !== 0 ? (
        <Wrap>
          <ProdcutListAside
            categoryName={category}
            categoryCount={items.length}
            // sorts data in alphanumeric  order
            data={asideData.sort((a, b) => {
              return ("" + a.propertyName).localeCompare(b.propertyName);
            })}
            dynamicValues={filterSettings}
            formRef={onRefChange}
          />
          {/* // dropdown with sort options */}
          <ProductListList
            items={filterItems(items, filterSettings)}
            filterSettings={filterSettings}
            categoryName={category}
          />
        </Wrap>
      ) : (
        getElement()
      )}
    </PageCenterWrapWithBread>
  );
};

export default ProductListPage;
