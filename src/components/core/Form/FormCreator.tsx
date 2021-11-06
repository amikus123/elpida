import React from "react";
import Experiment from "../Inputs/Experiment";
import TextInput from "../Inputs/TextInput";
type InputTypes = "text" | "password" | "submit";
export interface InputData {
  type: InputTypes;
  state: string;
  error: string;
}
interface FormData {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: InputData[];
  setFormData: React.Dispatch<React.SetStateAction<InputData[]>>;
}

const FormCreator = ({ inputs, setFormData, handleSubmit }: FormData) => {
  const createSetStateForIndex = (passedIndex: number) => {
    // pass  string  to update form state
    const res = (newInput: string) => {
      const newData = inputs.map((input, index) => {
        if (index === passedIndex) {
          return {
            ...input,
            state: newInput,
            error: "",
          };
        }
        return input;
      });
      setFormData(newData);
    };
    return res;
  };
  const getElement = (data: InputData, index: number) => {
    switch (data.type) {
      case "submit":
        return <p>asd</p>;
      default:
        return (
          <Experiment
            key={index}
            state={data}
            setState={createSetStateForIndex(index)}
          />
        );
    }
  };
  return (
    <form>
      {inputs.map((item, index) => {
        return getElement(item, index);
      })}
    </form>
  );
};

export default FormCreator;
