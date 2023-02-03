import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { groupDataTemplates } from "../FormikData";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import MyText from "../../../components/core/Text/MyText";
import { GroupDragTemplate } from "../FormikData";
import GroupDrag from "./GroupDrag";

const BestSellers = () => {
  const { contentData } = useContext(DataContext);
  return (
    <BestsellersContent
      objectsToDisplay={
        contentData.bestSellers as unknown as Record<string, string>[][]
      }
      templateData={groupDataTemplates.bestSellers}
    />
  );
};

export default BestSellers;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  > * {
    padding: 1rem;
  }
`;
interface GroupDataPageProps {
  objectsToDisplay: Record<string, string>[][];
  templateData: GroupDragTemplate;
}

const BestsellersContent = ({
  objectsToDisplay,
  templateData,
}: GroupDataPageProps) => {
  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <MyText
          fontSize="1.5rem"
          boldness="bold"
          style={{ textAlign: "center" }}
        >
          {templateData.header}
          <br />
          Arrange groups <br />
          Drop to the last colum to remove item
          <br />
          Double click to add new item
        </MyText>

        <GroupDrag data={objectsToDisplay} templateData={templateData} />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};
