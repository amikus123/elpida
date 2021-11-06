import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
align-items: center;
justify-content: center;
flex-direction: column;
display: flex;
margin: 5rem auto;
max-width: 500px;
width: 100%;
background-color: white;
padding: 1.5rem;
/* border:1px solid  #007185; */
border-radius: 8px;

& > form {
  width: 100%;
  & > * {
    margin-top: 1rem;
  }
}
`;
interface FormWrapProps{
  children:any
}
const FormWrap = ({children}:FormWrapProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default FormWrap
