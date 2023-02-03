import React from "react";

import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
interface RatingProps {
  ratingCount: number;
  rating: number;
  productCode: string;
}

const FullWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

interface PartiallyFilledProps {
  rating: number;
}

const PartialWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Rating = ({ rating, ratingCount, productCode }: RatingProps) => {
  // ifthere are zero reviuews. we dont show the rating component
  // fully filled stars will
  return (
    <Wrap>
      {/* for now we dont use ratings */}
      {/* {ratingCount === 0 ? null : (
        <>
          <StarWrap className="rating">
            <FullyFilled />
            <PartiallyFilled rating={rating} />
          </StarWrap>
          <MyText presetColor="grey" style={{ margin: "0 0.25rem" }}>
            ({ratingCount})
          </MyText>
        </>
      )} */}
      {/* <MyText presetColor="grey">Product code: {productCode} </MyText> */}
    </Wrap>
  );
};

export default Rating;
