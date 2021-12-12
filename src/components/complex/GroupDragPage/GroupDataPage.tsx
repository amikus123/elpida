import {
  FormikData,
  GroupDragTemplate,
} from "../../../Pages/ProtectedPages/FormikData";
import { PageCenterWrapWithBread } from "../../containers/PageCenterWrap";
import FormikForm from "../../core/Form/FormikForm";
import MyText from "../../core/Text/MyText";
import GroupDrag from "../GroupDrag/GroupDrag";
import styled from "styled-components";
import { BaseResposne } from "../../../constans/types";

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
  addNewObject: (data: Record<string, string>) => Promise<BaseResposne>;
  templateData: GroupDragTemplate;
}
const GroupDataPage = ({
  objectsToDisplay,
  addNewObject,
  templateData,
}: GroupDataPageProps) => {
  const { inputs, submitButtonText } = templateData.formik;

  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <MyText fontSize="2rem" boldness="bold">
          {templateData.header}
        </MyText>
        <FormikForm
          onSubmit={addNewObject}
          inputs={inputs}
          submitButtonText={submitButtonText}
        />
        <MyText fontSize="2rem" boldness="bold">
          Arrange groups
        </MyText>
        <GroupDrag data={objectsToDisplay} templateData={templateData} />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default GroupDataPage;
