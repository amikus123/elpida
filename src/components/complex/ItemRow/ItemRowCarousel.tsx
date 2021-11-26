import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Slider from "react-slick";
import Arrow from "../../../Pages/PublicPages/Home/HomeCarousel/Arrow";
import { RowItem } from "../../../constans/rowData";
import { nameToPublicLink } from "../../../utils/imageFunctions";

// Import css files

interface CarouselProps {
  products: RowItem[];
  extraPath: string;
}

const Image = styled.img``;
const ItemRowCarousel = ({ products, extraPath }: CarouselProps) => {
  const multipleArray = (arr: RowItem[]) => {
    let res: RowItem[] = [];

    while (res.length < 20) {
      res = res.concat(arr);
    }
    return res;
  };

  const CustomSlider = styled(Slider)``;
  return (
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
      {multipleArray(products).map((item, number) => {
        return (
          <Link to="#">
            <Image
              src={nameToPublicLink(item.imageName, extraPath)}
              alt={item.imageName}
            />
          </Link>
        );
      })}
    </CustomSlider>
  );
};

export default ItemRowCarousel;
