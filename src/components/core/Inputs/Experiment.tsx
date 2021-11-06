import React from 'react'
import { InputData } from '../Form/FormCreator'
import TextInput from './TextInput'
interface Test{
  state:InputData;
  setState:(newInput: string) => void
}
const Experiment = ({state,setState}:Test) => {
  return (
    <div>
      <TextInput 
       state={state.state}
       setState={setState}
       inputId="email"
       labelText="Email"
      />
    </div>
  )
}

export default Experiment
