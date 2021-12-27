import {useRef} from "react"
import styled from "styled-components";
import { COLORS } from "../../../styles/styleValues";
interface ProductListItemProps {
  item: any;
  handleDelete:(s:string) =>any;
}
const Wrap = styled.section`
  border: 1px solid ${COLORS.grey};
  min-width:200px;
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
const Para = styled.span`
padding:1rem;
`
const DeleteButton = styled.div`
cursor:pointer;
 :hover{
   color:red;
 }
`
const ImageWrap = styled.div`
width:200px;
height:200px;
display:flex;
align-items:center;
justify-content:center;

`
const Image = styled.img`
max-width:200px;
max-height:200px;
`

const ItemCard = ({ item,handleDelete}: ProductListItemProps) => {
  const ref = useRef<HTMLDivElement>()
  return (
    <Wrap ref={ref}>
      <ImageWrap>

      <Image src={item.image} alt="item" />
     </ImageWrap>
      {Object.keys(item).map((key, index) => {
        return key === "image" || key === "id" ? (
          null
          ) : (
          <Para key={index}>
            {key}:{item[key]}
          </Para>
        );
      })}
      <DeleteButton onClick={()=>{
        if(ref.current && ref.current.style){
          ref.current.setAttribute("style","display:none;")
        }

        handleDelete(item.id)}}>DELETE</DeleteButton>
    </Wrap>
  );
};

export default ItemCard;
