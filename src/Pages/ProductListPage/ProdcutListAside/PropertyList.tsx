import React from "react";
import { Field } from "formik";
import { Filter } from "../ProductListPage";
interface PropertyListProps {
  data: Filter;
}
const PropertyList = ({ data }: PropertyListProps) => {
  const { title, propertyName, values } = data;
  return (
    <div>
      {title}
      <div role="group" aria-labelledby="checkbox-group">
        {values.map((item, index) => {
          return (
            <label key={index}>
              <Field type="checkbox" name={propertyName} value={item} />
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyList;
