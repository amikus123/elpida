import React from 'react'
import styled from 'styled-components';


const Wrap = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: min(1500px, 90vw);
  /* overflow-x: hidden; */
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

interface PageWrap{
  children?: React.ReactNode;
  className?:string;
}
const PageCenterWrap = ({children,className=""}:PageWrap) => {
  return (
    <Wrap className={className}>
      {children}
    </Wrap>
  )
}




export default PageCenterWrap
