import { Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";
import PropertyList from "./PropertyList";
import MyText from "../../../../components/core/Text/MyText";
import { capitalizeFirstLetter } from "../../../../utils/stringFunctions";
import { SidebarData } from "../tmpConst";
interface ProductListPageProps {
  data: SidebarData[];
  dynamicValues: Record<string, string[] | number[]>;
  formRef: any;
  categoryName: string;
  categoryCount: number;
}

const Wrap = styled.aside`
  font-size: 1.5rem;
  /* outline: 1px solid blue; */
  width: min-content;
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
const StyledForm = styled(Form)`
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const TextWrap = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
`;
const ColumnWrap = styled.div`
  /* outline: 1px solid red; */
  min-width: 200px;

  @media (max-width: 1000px) {
    min-width: 0px;
  }
`;
const ProdcutListAside = ({
  data,
  dynamicValues,
  formRef,
  categoryName,
  categoryCount,
}: ProductListPageProps) => {
  return (
    <Wrap>
      <TextWrap>
        <MyText element="span">{capitalizeFirstLetter(categoryName)} </MyText>
        <MyText element="span" presetColor="grey" fontSize="0.85em">
          ({categoryCount})
        </MyText>
      </TextWrap>
      <ColumnWrap>
        <Formik
          innerRef={formRef}
          initialValues={dynamicValues}
          onSubmit={async (values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, setFieldValue }) => (
            <StyledForm>
              {data.map((item, index) => {
                return (
                  <PropertyList
                    key={index}
                    data={item}
                    setFieldValue={setFieldValue}
                  />
                );
              })}
            </StyledForm>
          )}
        </Formik>
      </ColumnWrap>
    </Wrap>
  );
};

export default ProdcutListAside;
