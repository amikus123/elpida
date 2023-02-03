import React, { useContext, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import ItemRow from "../../../components/complex/ItemRow/ItemRow";
import PageCenterWrap, {
  PageCenterWrapWithBread,
} from "../../../components/containers/PageCenterWrap";
import Spinner from "../../../components/core/Loading/Spinner";
import MyText from "../../../components/core/Text/MyText";
import { PUBLIC_ROUTES } from "../../../constans/routes";
import {
  DataContext,
  Inventory,
  ItemProperties,
} from "../../../context/DataContext";
import ProductProperties from "./ProductProperties";

const Wrap = styled.div``;
const ContentWrap = styled(PageCenterWrap)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0;
  max-width: 1100px;
  padding-bottom: 3rem;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ImageWrap = styled.div`
  max-width: 50%;
  height: 500px;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    max-width: 70%;
  }
`;
const Image = styled.img`
  max-height: 500px;
  /* height: 100%; */
  /* /* width: 100%; // if browser dosnet support other options */
  width: fill-available;
`;

const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
`;
const ProductPage = () => {
  const location = useLocation();
  const { contentData } = useContext(DataContext);
  const [item, setItem] = useState<ItemProperties | null>(null);
  const [category, setCategory] = useState("");
  useLayoutEffect(() => {
    const getCategory = () => {
      return location.pathname.split("/")[2];
    };
    const cat = getCategory();
    setCategory(cat);
    const item = getItem(contentData.inventory, location.pathname);
    setItem(item);
  }, [location, contentData.inventory]);

  const getItem = (inventory: Inventory, path: string) => {
    const pathData = path.split("/");
    const category = pathData[2];
    const title = pathData[3];
    let res = null;
    if (inventory[category] === undefined) {
      return res;
    } else {
      for (const item of inventory[category]) {
        if (item.title === title) {
          return item;
        }
      }
    }
    return res;
  };
  const getElement = () => {
    if (Object.keys(contentData.inventory).length === 0 || category === "") {
      return <Spinner showText={true} />;
    } else if (contentData.inventory[category] === undefined) {
      return (
        <ErrorWrap>
          <MyText>Selected category does not exit</MyText>
          <MyText style={{ color: "orange" }} to={PUBLIC_ROUTES.CATEGORIES}>
            Browse items
          </MyText>
        </ErrorWrap>
      );
    } else if (
      !contentData.inventory[category].some(
        (item) => item.title === location.pathname.split("/")[3]
      )
    ) {
      return (
        <ErrorWrap>
          <MyText>Selected item does not exit</MyText>
          <MyText to={`/categories/${category}`} style={{ color: "orange" }}>
            Browse {category}{" "}
          </MyText>
        </ErrorWrap>
      );
    } else if (item === null) {
      return <Spinner showText={true} />;
    } else {
      return (
        <Wrap>
          <ContentWrap>
            <ImageWrap>
              <Image src={item.image} alt="item" />
            </ImageWrap>
            <ProductProperties item={item} category={category} />
          </ContentWrap>
          <ItemRow
            data={contentData.bestSellers[0]}
            topText="Our bestsellers"
          />
          <ItemRow
            data={contentData.inventory[category]}
            topText={`Our ${category} selection`}
          />
        </Wrap>
      );
    }
  };

  return <PageCenterWrapWithBread>{getElement()}</PageCenterWrapWithBread>;
};

export default ProductPage;
