import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "styled-components";
import Text from "../../../components/core/Text/Text";
import { COLORS } from "../../../styles/styleValues";

const Wrap = styled.div`
  display: flex;
  flex: row;
  align-items: center;
`;
const PhoneLink = styled.a`
  line-height: 1.5em;
  color: ${COLORS.darkBlue};
  &:hover {
    color: ${COLORS.mediumOrange};
    text-decoration: underline;
  }
`;
const PhoneWrap = styled.div`
  padding: 0.5rem;
`;
const PhoneCall = () => {
  return (
    <Wrap>
      <PhoneWrap>
        <PhoneIcon />
      </PhoneWrap>
      <Text>
        Or order by phone
        <br />
        <PhoneLink href="tel:1111111222333">111 222 333</PhoneLink>
      </Text>
    </Wrap>
  );
};

export default PhoneCall;
