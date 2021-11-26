import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import deep from "deep-equal";

import styled from "styled-components";
import { Breadcrumbs } from "@mui/material";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
type CategoryParams = {
  category: string;
};



const ContentWrap = styled(PageCenterWrap)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0;

  & > * {
  }
  padding-bottom: 3rem;
`;

const Wrap = styled(PageCenterWrap)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`;

const ProductListPage = () => {
  const { category } = useParams<CategoryParams>();

  // if category is in not in DoorBackTwoTone, we will show error component
  //  product list will be fetched frokm db
  // form will be based on type od object, fetched from db





  return (
    <Wrap>
      <Breadcrumbs />
      <ContentWrap>
     "XD"
      </ContentWrap>
    </Wrap>
  );
};

export default ProductListPage;
