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
          <>
            {index !== 0 && index ? <ArrowRightAltIcon /> : null}
            <MyText
              to={item.path}
              element="link"
              key={index}
              style={{ display: "inline" }}
            >
              {item.name}
            </MyText>
          </>
        );
      })}
    </Wrap>
  );
};

export default MyBreadcrumbs;