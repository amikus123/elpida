import { useContext } from "react";
import styled from "styled-components";
import { possibleLocations } from "../../../constans/locationList";
import { DataContext } from "../../../context/DataContext";
import { ElementContext } from "../../../context/ElementContext";
const Wrapper = styled.div`
  position: relative;
  height: 29px;
`;

const DisplayWrap = styled.div`
  position: relative;
`;

const Display = styled.div`
  flex: 1;
  width: 100%;
  height: 29px;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  border: 1px solid;
  border-color: #d5d9d9;
  background-color: #f0f2f2;
  position: relative;
  &:hover {
  }
`;

const ListWrap = styled.div`
  cursor: pointer;
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  position: absolute;
  bottom: -10px;
  left: 0;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid ${(props) => props.theme.whiteBorder};
  border-radius: 5px;
`;
const List = styled.ul`
  background-color: white;
  width: 311px;
`;

const Option = styled.li`
  flex: 1;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border: 1px solid white;
  max-width: 311px;

  &:hover {
    border: 1px solid ${(props) => props.theme.whiteBorder};
    background-color: #f0f2f2;
  }
`;

const Dropdown = () => {
  const { showDropdown, setDropdown } = useContext(ElementContext);
  return (
    <Wrapper>
      <DisplayWrap>
        <Display
          style={{ visibility: showDropdown ? "hidden" : "visible" }}
          onClick={(e) => {
            setDropdown(true);
            e.stopPropagation();
          }}
        >
        </Display>
        <ListWrap style={{ visibility: showDropdown ? "visible" : "hidden" }}>
          <List>
            {possibleLocations.map((item, index) => {
              return (
                <Option
                  value={item}
                  key={index}
                  onClick={(e) => {
                    setDropdown(false);
                    e.stopPropagation();
                  }}
                >
                  {item}
                </Option>
              );
            })}
          </List>
        </ListWrap>
      </DisplayWrap>
    </Wrapper>
  );
};

export default Dropdown;
