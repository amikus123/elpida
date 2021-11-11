import React from "react";
import Text from "../../../components/core/Text/Text";

import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
interface RatingProps {
  ratingCount: number;
  rating: number;
  productCode: string;
}

const StarWrap = styled.div`
  position: relative;
  width: min-content;
`;

const FullWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const FullyFilled = () => {
  const starCount = [0, 1, 2, 3, 4];
  return (
    <FullWrap className="full-stars">
      {starCount.map((item, key) => {
        return <StarIcon htmlColor="#888" />;
      })}
    </FullWrap>
  );
};
interface PartiallyFilledProps {
  rating: number;
}

const PartialWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const PartiallyFilled = ({ rating }: PartiallyFilledProps) => {
  const starCount = [0, 1, 2, 3, 4];
  return (
    <PartialWrap style={{ width: `${rating * 20}%`, overflow: "hidden" }}>
      <FullWrap>
        {starCount.map((item, key) => {
          return <StarIcon htmlColor="yellow" />;
        })}
      </FullWrap>
    </PartialWrap>
  );
};

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
      {ratingCount === 0 ? null : (
        <>
          <StarWrap className="rating">
            <FullyFilled />
            <PartiallyFilled rating={rating} />
          </StarWrap>
          <Text presetColor="grey" style={{margin:"0 0.25rem"}}>({ratingCount})</Text>
        </>
      )}
      <Text presetColor="grey">Product code: {productCode} </Text>
    </Wrap>
  );
};

export default Rating;
