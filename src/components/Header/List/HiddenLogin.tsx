import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../universal/Button";

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

const Wrapper = styled.div`
  position: absolute;
  width: 500px;
  background-color: snow;
  height: fit-content;
  color: black;
  font-size: 0.875rem;
  border-radius: 6px;
`;
// changes width ro 460
const InternalWrapper = styled.div`
  margin: 0 auto;
  width: 460px;
`;
const TopSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 0.6875rem;
  border-bottom: 1px solid #eee;
  padding: 1.5rem;
`;

const SpanLink = styled(Link)`
  color: blue;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

const ListSectionWrap = styled.div`
  display: flex;
`;
const ListWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin-top: 1rem;
`;
const ListItems = styled.ul`
  line-height: 1rem;
  font-size: 13px;
`;
const ListHeader = styled.p`
  font-weight: bold;
  padding-bottom: 7px;
  font-size: 1rem;
`;

const ListElement = styled.li`
  padding-bottom: 7px;
`;
const ListLink = styled(Link)`
  color: black;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;
const HiddenLogin = () => {
  return (
    <Wrapper>
      <InternalWrapper>
        <TopSection>
          <Button>Sign in</Button>
          <p>
            New customer? <SpanLink to="/register">Start here</SpanLink>
          </p>
        </TopSection>
        <ListSectionWrap>
          <ListWrap>
            <ListHeader>Your list</ListHeader>
            <ListItems>
              {leftNames.map((item, index) => (
                <ListElement key={index}>
                  <ListLink to="/">{item} </ListLink>
                </ListElement>
              ))}
            </ListItems>
          </ListWrap>
          <ListWrap style={{ borderLeft: "1px solid #eee" }}>
            <ListHeader>Your Account</ListHeader>
            <ListItems>
              {rightNames.map((item, index) => (
                <ListElement key={index}>
                  <ListLink to="/">{item} </ListLink>
                </ListElement>
              ))}
            </ListItems>
          </ListWrap>
        </ListSectionWrap>
      </InternalWrapper>
    </Wrapper>
  );
};

export default HiddenLogin;
