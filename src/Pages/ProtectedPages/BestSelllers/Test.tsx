import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import MyText from "../../../components/core/Text/MyText";
import { GroupDragTemplate } from "../FormikData";
import GroupDrag from "./GroupDrag";

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
const Test = ({ objectsToDisplay, templateData }: GroupDataPageProps) => {
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

export default Test;
