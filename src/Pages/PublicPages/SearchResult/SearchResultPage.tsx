import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import MyText from "../../../components/core/Text/MyText";
import { DataContext, ItemProperties } from "../../../context/DataContext";
import { getMatchingItems } from "../../../utils/headerFunctions";
import ProductListList from "../ProductListPage/ProductListList/ProductListList";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export type CategoryParams = {
  search: string;
};

const SearchResultPage = () => {
  interface SearchParams {
    category: string;
    title: string;
  }
  const { category, title } = useParams<SearchParams>();
  const { contentData } = useContext(DataContext);
  const [items, setItems] = useState<ItemProperties[]>([]);
  useEffect(() => {
    setItems(getMatchingItems(title, category, contentData.inventory));
  }, [title, category, contentData.inventory]);
  return (
    <PageCenterWrapWithBread bread={false}>
      <Wrap>
        <MyText fontSize="2rem" element="h2">
          Search results:
        </MyText>
        {items.length === 0 ? (
          <MyText
            fontSize="2rem"
            element="h2"
            style={{ padding: "1rem", color: "red" }}
          >
            We have no results for your search!
          </MyText>
        ) : (
          <ProductListList
            items={items}
            categoryName={category}
            filterSettings={{}}
          />
        )}
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default SearchResultPage;
