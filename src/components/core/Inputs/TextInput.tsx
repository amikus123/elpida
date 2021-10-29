import React from 'react'

import styled from "styled-components";
const Input = styled.input`
width: 100%;
height:100%;
border-radius: 4px;
border:1px solid;
border-color: ${(props) => (props.theme.whiteBorder)};
padding:0.25rem;
&:focus{
  box-shadow: 0 0 0 3px #C8F3FA, 0 1px 2px rgba(15,17,17,.15) inset;
  border-color: #007185;
}
`
const Wrapper = styled.div`
flex: 1;
height:31px;

`
const TextInput = () => {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  )
}

export default TextInput
