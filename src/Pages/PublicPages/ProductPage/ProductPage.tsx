import { title } from "process";
import React, { useContext, useEffect, useState } from "react";
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
  max-height: 500px;

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
  width: 100%; // if browser dosnet support other options
  width: fill-available;
`;

const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
  font-size: 2rem;`;
const ProductPage = () => {
  const location = useLocation();
  const { contentData } = useContext(DataContext);
  const [item, setItem] = useState<ItemProperties | null>(null);
  const [category, setCategory] = useState("");
  useEffect(() => {
    const getCategory = () => {
      return location.pathname.split("/")[2];
    };
    const cat = getCategory();
    setCategory(cat);
    const xd = getItem(contentData.inventory, location.pathname);
    setItem(xd);
  }, [location, contentData.inventory]);

  const getItem = (inventory: Inventory, path: string) => {
    // "/categories/wine/Pirate wine"
    const pathData = path.split("/");
    const category = pathData[2];
    const title = pathData[3];
    let res = null;
    if (inventory[category] === undefined) {
      console.log("undecf");

      return res;
    } else {
      for (const item of inventory[category]) {
        if (item.title === title) {
          console.log("found");

          return item;
        }
      }
    }
    console.log("failed");
    return res;
  };
  // on the left will be the image of object
  // on the right itemm properties
  // on the bottom there will be carousel of items of the same category, and of something promoeted
  // ! FIX THE BUG  WHEN THE ERROR IS SHOWED BEFORE ITEM IS FETCHED
  const getElement = () => {
    if (Object.keys(contentData.inventory).length === 0 || category === "") {
      console.log(category, "why you dont show");
      return <Spinner showText={true} />;
    } else if (contentData.inventory[category] === undefined) {
      console.log(category, "XDDD");
      return (
        <ErrorWrap>
          <MyText>Selected category does not exit</MyText>
          <MyText style={{ color: "orange" }} to={PUBLIC_ROUTES.CATEGORIES}>
            Browse items
          </MyText>
        </ErrorWrap>
      );
    } else {
      return (
        <ErrorWrap>
          <MyText>Selected item does not exit</MyText>
          <MyText to={`/categories/${category}`} style={{ color: "orange" }}>
            Browse {category}{" "}
          </MyText>
        </ErrorWrap>
      );
    }
  };
  return (
    <PageCenterWrapWithBread>
      {item !== null ? (
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
      ) : (
        getElement()
      )}
    </PageCenterWrapWithBread>
  );
};

export default ProductPage;
