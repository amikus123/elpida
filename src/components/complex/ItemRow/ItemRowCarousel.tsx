import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Slider from "react-slick";
import Arrow from "../../../Pages/PublicPages/Home/HomeCarousel/Arrow";
import { nameToPublicLink } from "../../../utils/imageFunctions";
import { RowItem } from "../../../constans/types";
import { DataContext, ItemProperties } from "../../../context/DataContext";
import Spinner from "../../core/Loading/Spinner";
import { createLinkFromId } from "../../../utils/generalFunctions";

// Import css files

interface CarouselProps {
  products: ItemProperties[];
}

const Image = styled.img``;
const ItemRowCarousel = ({ products }: CarouselProps) => {
  const CustomSlider = styled(Slider)``;
  const {contentData} = useContext(DataContext)
  return (
    <>
      {products === undefined || products.length === 0 ? (
        <Spinner />
      ) : (
        <CustomSlider
          dots={false}
          infinite={false}
          speed={300}
          variableWidth={true}
          centerMode={false}
          slidesToShow={5}
          slidesToScroll={5}
          prevArrow={<Arrow left={true} />}
          nextArrow={<Arrow left={false} />}
          adaptiveHeight={true}
        >
          {products.map((item, index) => {
            return (
              <Link to={createLinkFromId(item,contentData.inventory)} key={index}>
                <Image alt={item.title} src={item.image} />
              </Link>
            );
          })}
        </CustomSlider>
      )}
    </>
  );
};

export default ItemRowCarousel;
