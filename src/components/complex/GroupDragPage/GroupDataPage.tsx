import {
  GroupDragTemplate,
} from "../../../Pages/ProtectedPages/FormikData";
import { PageCenterWrapWithBread } from "../../containers/PageCenterWrap";
import FormikForm from "../../core/Form/FormikForm";
import MyText from "../../core/Text/MyText";
import GroupDrag from "../GroupDrag/GroupDrag";
import styled from "styled-components";

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
const GroupDataPage = ({
  objectsToDisplay,
  templateData,
}: GroupDataPageProps) => {
  const { inputs, submitButtonText } = templateData.formik;

  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <MyText fontSize="2rem" boldness="bold" style={{textAlign:"center"}}>
          {templateData.header}
        </MyText>
        <FormikForm
          onSubmit={templateData.addNewDragObject}
          inputs={inputs}
          submitButtonText={submitButtonText}
        />
        <MyText fontSize="2rem" boldness="bold" style={{textAlign:"center"}}>
          Arrange groups <br/>
          Drop to the last colum to remove item

        </MyText>
        
        <GroupDrag data={objectsToDisplay} templateData={templateData} />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default GroupDataPage;
