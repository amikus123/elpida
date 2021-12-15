import { Rating } from "@mui/material";
import styled from "styled-components";
import MyText from "../../../components/core/Text/MyText";
import { COLORS } from "../../../styles/styleValues";

interface ProductListItemProps {
  item: any;
}
const Wrap = styled.section`
  border: 1px solid ${COLORS.grey};
  display: flex;
  flex-direction: row;
  font-size: 1.125rem;
  aling-items:center;
  flex-direction:column;
  padding-bottom:1rem;
  justify-content:center;
  >*{
    margin:0 auto;
  }
`;
const Para = styled.p`
padding:1rem;
`
const DeleteButton = styled.div`
cursor:pointer;
 :hover{
   color:red;
 }
`


const ItemCard = ({ item }: ProductListItemProps) => {
  return (
    <Wrap>
      <img src={item.image} alt="item" />
      {Object.keys(item).map((key, index) => {
        return key === "image" || key === "id" ? (
          null
          ) : (
          <Para key={index}>
            {" "}
            {key}:{item[key]}
          </Para>
        );
      })}
      <DeleteButton>DELETE</DeleteButton>
    </Wrap>
  );
};

export default ItemCard;