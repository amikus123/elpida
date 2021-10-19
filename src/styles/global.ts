import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       /* font-family: 'Open Sans', sans-serif;  */
       }
   #root{
       margin:0 auto;
   }
   body{
    font-family: "Amazon Ember",Arial,sans-serif;
    font-size: 13px;
    line-height: 19px;
    color: #111;

   }
   a{
       text-decoration: none;

   }
`;
