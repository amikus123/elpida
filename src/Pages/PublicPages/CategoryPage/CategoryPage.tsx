import React,{useContext} from "react";
import MyText from "../../../components/core/Text/MyText";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import {
  PageCenterWrapWithBread,
} from "../../../components/containers/PageCenterWrap";
import {DataContext} from "../../../context/DataContext"
const Wrap = styled(PageCenterWrapWithBread)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    padding-top: 0.5rem;
  }
  padding-bottom: 3rem;
`;

// on this page user can see all categories which are avaliabile at store,
// and can click on card to be taken to page that lists all item of given category


const CategoryPage = () => {
  const {contentData} = useContext(DataContext)
  return (
    <Wrap>
      <MyText fontSize="2rem" element="h3">
        Categories{" "}
        <MyText element="span" fontSize="0.85em" presetColor="grey">
          ({Object.keys(contentData.inventory).length})
        </MyText>
      </MyText>
      <Categories data={contentData.inventory} />
    </Wrap>
  );
};

export default CategoryPage;
