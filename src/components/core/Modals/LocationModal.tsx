import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ElementContext } from "../../../context/ElementContext";
import PlainButton from "../Buttons/PlainButton";
import HorizontalText from "../Dividers/HorizontalText";
import Dropdown from "../Inputs/Dropdown";
import TextInput from "../Inputs/TextInput";
import MyText from "../Text/MyText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 400px;
  background-color: #fff;
  border-radius: 1rem;
`;

const Top = styled.header`
  height: 64px;
  background-color: #f0f2f2;
  border-bottom: 1px solid #cdcdcd;
  padding: 1rem 2rem;
  border-radius: 1rem 1rem 0 0;
`;

const Middle = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 0 2rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin: 0.5rem 0;
  }
`;
const InputWrap = styled.div`
  display: flex;
  padding: 0.5rem 0;

  justify-content: center;
  align-items: center;
  > .innerInputWrap {
    flex: 1;
    height: 31px;
  }
  > .button-wrap {
    padding: 0rem 0.5rem;
    width: 100px;
  }
`;
const Bottom = styled.div`
  padding: 0.5rem 1.5rem 1.5rem;
  width: 100%;
  height: 70px;
  align-self: flex-end;
  border-radius: 0rem 0rem 1rem 1rem;
  display: flex;
  justify-content: flex-end;
  & > div {
    width: 52px;
    height: 29px;
  }
`;

const LocationModal = () => {
  const { reset } = useContext(ElementContext);
  const [userInput, setUserInput] = useState("");
  return (
    <Wrapper>
      <Top>
        <MyText boldness="bold" fontSize="1.125rem">
          Choose your location
        </MyText>
      </Top>
      <Middle>
        <MyText>
          Delivery options and delivery speeds may vary for different locations
        </MyText>
        <PlainButton
          text="Sign to see your addesses"
          color="yellow"
          variant="link"
        />
        <HorizontalText text="or enter a US zip code" />
        <InputWrap>
          <div className="innerInputWrap">
            <TextInput
              setState={setUserInput}
              state={userInput}
              inputId="modalLocationInput"
            />
          </div>
          <div className="button-wrap">
            <PlainButton text="Apply" color="white" variant="submit" />
          </div>
        </InputWrap>
        <HorizontalText text="or" />
        <Dropdown />
      </Middle>
      <Bottom>
        <div>
          <PlainButton
            text="Done"
            color="yellow"
            variant="button"
            onClick={reset}
          />
        </div>
      </Bottom>
    </Wrapper>
  );
};

export default LocationModal;
