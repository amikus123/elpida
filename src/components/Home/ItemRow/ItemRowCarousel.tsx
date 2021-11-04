

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RowItem } from "../../../constans/rowData";
import { nameToPublicLink } from "../../../utils/imageFunctions";

import Slider from "react-slick";

// Import css files

interface CarouselProps {
  products: RowItem[];
  extraPath: string;
}

const Image = styled.img``;
const ItemRowCarousel = ({ products, extraPath }: CarouselProps) => {
  return (
    <Slider
      dots={false}
      infinite={false}
      speed={500}
      variableWidth={true}
      centerMode={true}
      slidesToShow={1}
    >
      {products.map((item, number) => {
        return (
          <Link to="#">
            <Image
              src={nameToPublicLink(item.imageName, extraPath)}
              alt={item.imageName}
            />
          </Link>
        );
      })}
    </Slider>
  );
};

export default ItemRowCarousel;
