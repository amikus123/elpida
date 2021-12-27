import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Slider from "react-slick";
import Arrow from "../../../Pages/PublicPages/Home/HomeCarousel/Arrow";
import { DataContext, ItemProperties } from "../../../context/DataContext";
import Spinner from "../../core/Loading/Spinner";
import { createLinkFromId } from "../../../utils/generalFunctions";

// Import css files

interface CarouselProps {
  products: ItemProperties[];
}

const MyLink = styled(Link)`
  min-width: 200px;
  display: flex!important;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 200px;
`;
const ItemRowCarousel = ({ products }: CarouselProps) => {
  const CustomSlider = styled(Slider)``;
  const { contentData } = useContext(DataContext);
  return (
    <>
      {products === undefined || products.length === 0 ? (
        <Spinner />
      ) : (
        <CustomSlider
          dots={false}
          infinite={true}
          speed={500}
          variableWidth={true}
          centerMode={false}
          slidesToScroll={3}
          prevArrow={<Arrow left={true} />}
          nextArrow={<Arrow left={false} />}
        >
          {products.map((item, index) => {
            return (
              <MyLink
                to={createLinkFromId(item, contentData.inventory)}
                key={index}
              >
                <Image alt={item.title} src={item.image} />
              </MyLink>
            );
          })}
        </CustomSlider>
      )}
    </>
  );
};

export default ItemRowCarousel;
