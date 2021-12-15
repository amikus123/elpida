import {  Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";
import PropertyList from "./PropertyList";
import MyText from "../../../../components/core/Text/MyText";
import { capitalizeFirstLetter } from "../../../../utils/stringFunctions";
interface ProductListPageProps {
  data: any[];
  dynamicValues: Record<string, string[]>;
  formRef: any;
  categoryName: string;
  categoryCount: number;
}

const Wrap = styled.aside`
  font-size: 1.5rem;
  /* outline: 1px solid blue; */
  width: min-content;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const ColumnWrap = styled.div`
  /* outline: 1px solid red; */
  min-width: 200px;
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
        <MyText>{capitalizeFirstLetter(categoryName)} </MyText>
        <MyText presetColor="grey" fontSize="0.85em">
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
          {({ values }) => (
            <Form>
              {data.map((item, index) => {
                return <PropertyList key={index} data={item} />;
              })}
            </Form>
          )}
        </Formik>
      </ColumnWrap>
    </Wrap>
  );
};

export default ProdcutListAside;
