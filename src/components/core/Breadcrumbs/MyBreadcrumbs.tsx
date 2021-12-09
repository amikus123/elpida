import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../../utils/stringFunctions";
import MyText from "../Text/MyText";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
interface PathObject {
  path: string;
  name: string;
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
const MyBreadcrumbs = () => {
  let location = useLocation();
  const [pathObjects, setPathObjects] = useState<PathObject[]>([]);
  useEffect(() => {
    const getFomratedPath = () => {
      const arr = location.pathname.split("/");
      arr[0] = "Home";
      const pathObjects: PathObject[] = [];
      arr.forEach((item, index) => {
        if (index === 0) {
          pathObjects.push({ path: "/", name: "Home" });
        } else {
          pathObjects.push({
            path: pathObjects[index - 1].path + `${item}/`,
            name: capitalizeFirstLetter(item),
          });
        }
      });
      return pathObjects;
    };
    
    setPathObjects(getFomratedPath());
  }, [location]);

  return (
    <Wrap>
      {pathObjects.map((item, index) => {
        return (
          <InnerWrap key={index}>

            {index !== 0 && index && item.name !== "" ? (
              <ArrowRightAltIcon fontSize="inherit" />
            ) : null}
            <MyText
              to={item.path}
              element="link"
              key={index}
              style={{ display: "inline" }}
            >
              {item.name.replaceAll("_"," ")}
            </MyText>
          </InnerWrap>
        );
      })}
    </Wrap>
  );
};

export default MyBreadcrumbs;
