import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import PageCenterWrap, {
  PageCenterWrapWithBread,
} from "../../../components/containers/PageCenterWrap";
import {
  DataContext,
  Inventory,
  ItemProperties,
} from "../../../context/DataContext";
import ProductProperties from "./ProductProperties";
type CategoryParams = {
  category: string;
};

const ContentWrap = styled(PageCenterWrap)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0;
  max-width: 1100px;
  & > * {
  }
  padding-bottom: 3rem;
`;
const ImageWrap = styled.div`
  max-width: 50%;
  max-height: 500px;
  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Image = styled.img`
  max-height: 500px;

`;

const ProductPage = () => {
  const location = useLocation();
  const { contentData } = useContext(DataContext);
  const [item, setItem] = useState<ItemProperties | null>(null);
  useEffect(() => {
    console.log(location, "locc");
    setItem(getItem(contentData.inventory, location.pathname));
  }, [location.pathname, contentData.inventory]);
  const getItem = (inventory: Inventory, path: string) => {
    // "/categories/wine/Pirate wine"
    const pathData = path.split("/");
    const category = pathData[2];
    const title = pathData[3];
    let res = null;
    console.log(pathData, "path");
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
  return (
    <PageCenterWrapWithBread>
      <ContentWrap>
        {item !== null ? (
          <>
            <ImageWrap>
              <Image src={item.image} alt="item" />
            </ImageWrap>
            <ProductProperties item={item} />
          </>
        ) : null}
      </ContentWrap>
    </PageCenterWrapWithBread>
  );
};

export default ProductPage;
