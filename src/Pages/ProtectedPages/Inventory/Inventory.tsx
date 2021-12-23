import React, { useContext, useState } from "react";
import styled from "styled-components";
import ButtonSelection from "../../../components/complex/ButtonSelection/ButtonSelection";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm from "../../../components/core/Form/FormikForm";
import MyText from "../../../components/core/Text/MyText";
import { DataContext } from "../../../context/DataContext";
import { MyFormData } from "../../../firebase/firestore/write";
import ItemList from "./ItemList";
import {  formikAlchoholData } from "./tmp";

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
  const {contentData,deleteByIdGenerator} = useContext(DataContext)


  const handleForm = () =>{
    const x = async (values:MyFormData) =>{
      // when we swithc between two forms templates, old vales stay in object
      // we have to filler them out
      const templateKeys = formikAlchoholData[category].inputs
      const filteredData:MyFormData = {}
      templateKeys.forEach((key)=>{
        return filteredData[key.id] =values[key.id] 
      })
      return await formikAlchoholData[category].handleSubmit(filteredData)
    }
    return x 
   }
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
          onSubmit={handleForm()}
          inputs={[...formikAlchoholData[category].inputs]}
          submitButtonText={`Add ${category}`}
        />

    
      <ItemList categoryName={category} handleDelete={deleteByIdGenerator(category)}items={category in contentData.inventory ? contentData.inventory[category] : []} />
        
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default Inventory;
