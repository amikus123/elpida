import React, { useState } from "react";
import styled from "styled-components";
import ButtonSelection from "../../../components/complex/ButtonSelection/ButtonSelection";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm from "../../../components/core/Form/FormikForm";
import MyText from "../../../components/core/Text/MyText";
import { baseProdcutInputs, formikAlchoholData } from "./tmp";

export type AlocholCategoties = "beer" | "wine";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  > * {
    padding: 1rem;
  }
`;

const Inventory = () => {
  const options: AlocholCategoties[] = ["beer", "wine"];
  const [category, setCategory] = useState<AlocholCategoties>("beer");
  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <ButtonSelection
          options={options}
          selected={category}
          setSelected={setCategory}
        />

        <MyText fontSize="2rem" boldness="bold">
          Add new {category}
        </MyText>
        <FormikForm
          onSubmit={formikAlchoholData[category].handleSubmit}
          inputs={[...baseProdcutInputs, ...formikAlchoholData[category].inputs]}
          submitButtonText={`Add ${category}`}
        />
        <MyText fontSize="2rem" boldness="bold">
          Change home image order, or toggle visibility
        </MyText>
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default Inventory;
