import React from "react";
import styled from "styled-components";
import MyBreadcrumbs from "../core/Breadcrumbs/MyBreadcrumbs";

const Wrap = styled.div`
  margin: 0 auto;
  padding: 0.5rem 2rem;
  max-width: min(1500px, 90vw);
  /* overflow-x: hidden; */
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  background-color: white;
`;
const Regular = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: min(1500px, 90vw);
  /* overflow-x: hidden; */
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ContentWrap = styled.div`
  width: 100%;
`;
interface PageWrap {
  children?: React.ReactNode;
  className?: string;
  bread?: boolean;
}
const PageCenterWrap = ({ children, className = "" }: PageWrap) => {
  return <Regular className={className}>{children}</Regular>;
};
export const PageCenterWrapWithBread = ({
  children,
  className = "",
  bread = true,
}: PageWrap) => {
  return (
    <Wrap className={className}>
      {bread ? <MyBreadcrumbs /> : null}
      <ContentWrap> {children}</ContentWrap>
    </Wrap>
  );
};

export default PageCenterWrap;
