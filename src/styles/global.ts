import { createGlobalStyle } from "styled-components";
interface StyledGlobals {
  modal?: boolean;
}

export default createGlobalStyle<StyledGlobals>`

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       /* font-family: 'Open Sans', sans-serif;  */
       }
   #root{
       margin:0 auto;
        position: relative;
   }
   body{
    font-family: "Amazon Ember",Arial,sans-serif;
    font-size: 13px;
    line-height: 19px;
    color: #111;
    background-color: #EAEDED;
    // width: 100vw;;
    overflow-x: hidden; 
    /* overflow: ${(props) => (props.modal ? "visible" : "hidden")}; */
   }
   a{
       text-decoration: none;
       // MAY CASUE SOME PROBLEMS
       color:inherit;

   }
`;
