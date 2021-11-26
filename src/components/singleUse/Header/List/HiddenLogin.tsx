import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../../core/Buttons/Button";
import { ROUTES } from "../../../../constans/routes";
import MyText from "../../../core/Text/MyText";
import { SIZES } from "../../../../styles/styleValues";
const leftNames = [
  "Create a List",
  "Find a List or Registery",
  "AmazonSmile CharityList",
];
const rightNames = [
  "Account",
  "Orders",
  "Recommendations",
  "Browsing History",
  "Watchlist",
  "Video Purchases & Rentals",
  "Kindle Unlimited",
  "Content & Devices",
  "Subscirbe & Save Items",
  "Mebmership & Subscriptions",
  "Prime Membership",
  "Amazon Credit Cards",
  "Music Library",
  "Start a Selling Account",
  "Register foa a Bussines Account",
];

const Padding = styled.div`
  position: absolute;
  width: 500px;
  max-width:90vw;
  padding: 1rem;
  cursor: default;
  top: 3rem;
  left: -15rem;
  z-index:30;
  @media (max-width: ${SIZES.TABLET}) {
  left: 50%;
transform: translateX(-50%);
  }
  
`;
const Wrapper = styled.div`
  background-color: snow;
  height: fit-content;
  color: black;
  font-size: 0.875rem;
  border-radius: 6px;
`;
// changes width ro 460
const InternalWrapper = styled.div`
  margin: 0 auto;
  width:92%;
`;
const TopSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 0.6875rem;
  border-bottom: 1px solid #eee;
  padding: 1.5rem;
  & > :first-child {
    margin-bottom: 0.5rem;
  }
  & > :last-child {
    font-size: 0.75rem;
  }
`;

const ListSectionWrap = styled.div`
  display: flex;
`;
const ListWrap = styled.nav`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin-top: 1rem;
  & > :first-child {
    padding-bottom: 7px;
  }
`;
const ListItems = styled.ul`
  line-height: 1rem;
  font-size: 13px;
  & > li {
    padding-bottom: 7px;
  }
`;
const ListHeader = styled.p`
  font-weight: bold;
  padding-bottom: 7px;
  font-size: 1rem;
`;

const ListLink = styled(Link)`
  color: black;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

// ADD DODOAD
const HiddenLogin = () => {
  return (
    <Padding style={{ visibility: "hidden" }}>
      <Wrapper>
        <InternalWrapper>
          <TopSection>
            <Button to={ROUTES.LOGIN}>Sign in</Button>
            <MyText>
              New customer?{" "}
              <MyText to={ROUTES.SIGNUP} element="link">
                Start here
              </MyText>
            </MyText>
          </TopSection>
          <ListSectionWrap>
            <ListWrap>
              <ListHeader>Your list</ListHeader>
              <ListItems>
                {leftNames.map((item, index) => (
                  <li key={index}>
                    <ListLink to="/">{item} </ListLink>
                  </li>
                ))}
              </ListItems>
            </ListWrap>
            <ListWrap style={{ borderLeft: "1px solid #eee" }}>
              <MyText variant="header">Your Account</MyText>
              <ListItems>
                {rightNames.map((item, index) => (
                  <li key={index}>
                    <ListLink to="/">{item} </ListLink>
                  </li>
                ))}
              </ListItems>
            </ListWrap>
          </ListSectionWrap>
        </InternalWrapper>
      </Wrapper>
    </Padding>
  );
};

export default HiddenLogin;
