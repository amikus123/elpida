import { useFormik, Formik, Form, Field } from "formik";
import React from "react";
import { Filter, FilterState } from "../ProductListPage";
import PropertyList from "./PropertyList";

interface ProductListPageProps {
  data: Filter[];
  dynamicValues: Record<string, string[]>;
  formRef: any;
}

const ProdcutListAside = ({
  data,
  dynamicValues,
  formRef,
}: ProductListPageProps) => {
  return (
    <Formik
      innerRef={formRef}
      initialValues={dynamicValues}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form
       
        >
          {JSON.stringify(dynamicValues)}
          <br />
          {JSON.stringify(values)}

          {data.map((item, index) => {
            return (
                <PropertyList key={index} data={item} />
            );
          })}

          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="company" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="company" vsalue="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="company" value="Three" />
              Three
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProdcutListAside;
