
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm from "../../../components/core/Form/FormikForm";
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
const Test = ({
  objectsToDisplay,
  templateData,
}: GroupDataPageProps) => {

  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <MyText fontSize="2rem" boldness="bold">
          {templateData.header}
        </MyText>

        <MyText fontSize="2rem" boldness="bold" style={{textAlign:"center"}}>
          Arrange groups <br/>
          Drop to the last colum to remove item<br/>
          Double click to add new item
        </MyText>
        
        <GroupDrag data={objectsToDisplay} templateData={templateData} />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default Test;
