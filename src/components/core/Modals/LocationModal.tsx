import React, { useContext } from "react";
import styled from "styled-components";
import { ElementContext } from "../../../context/ElementContext";
import PlainButton from "../Buttons/PlainButton";
import HorizontalText from "../Dividers/HorizontalText";
import Dropdown from "../Inputs/Dropdown";
import TextInput from "../Inputs/TextInput";
import Text from "../Text/Text";
const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 375px;
  height: 375px;
  background-color: #fff;
  border-radius: 1rem;
`;

const Top = styled.header`
  height: 57px;
  background-color: #f0f2f2;
  border-bottom: 1px solid #cdcdcd;
  padding: 1rem 2rem;
  border-radius : 1rem 1rem 0 0 ;
`;

const Middle = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 0 2rem;
  justify-content: space-around;
  display: flex;
  flex-direction: column;

  >*{
    /* margin: 0.5rem 0; */
  }
`;
const InputWrap = styled.div`
  display:flex;
  padding:0.5rem 0;

  justify-content: center;
  align-items: center;
  >.button-wrap{
    padding:0rem 0.5rem;
    width: 100px;
  }
`
const Bottom = styled.div`
  padding: 0.5rem 1.5rem 1.5rem;
  width:100%;
  height:70px;
  align-self: flex-end;
  border-radius : 0rem 0rem 1rem 1rem ;
  display:flex;
  justify-content: flex-end;
  &>div{
    width:52px;
    height: 29px;
  }
`;
const LocationModal = () => {
  const { reset } = useContext(ElementContext);

  return (
    <Wrapper>
      <Top>
        <Text variant="header">Choose your location</Text>
      </Top>
      <Middle>
        <Text>
          Delivery options and delivery speeds may vary for different locations
        </Text>
        <PlainButton
          text="Sign to see your addesses"
          color="yellow"
          variant="link"
        />
        <HorizontalText text="or enter a US zip code" />
        <InputWrap>
          <TextInput />
          <div className="button-wrap" >
          <PlainButton text="Apply" color="white" variant="submit" />
           </div>
        </InputWrap>
        <HorizontalText text="or" />
        <Dropdown />
      </Middle>
      <Bottom>
        <div>
        <PlainButton text="Done" color="yellow" variant="button"  onClick={reset}/>
        </div>
      </Bottom>
    </Wrapper>
  );
};

export default LocationModal;
