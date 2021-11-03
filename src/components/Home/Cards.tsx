import React from 'react'
import styled from 'styled-components'
import { CardArr } from '../../constans/homeCards'
import CardAdd from '../core/Cards/CardAdd'
import HomeCard from '../core/Cards/HomeCard'

interface CardWrapProps {
  data:CardArr
}

const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
/* margin:0 auto; */
justify-content: center;
&>*{
  margin:0 10px 10px 10px;
}
`
  
const Cards = ({data}:CardWrapProps) => {
  return (
    <Wrapper>
      {data.map((item,index)=>{
        if("signIn" in item){
          return <CardAdd data={item} key={index}/>
        }else{
          return <HomeCard data={item} key={index} />
        }
      })}
    </Wrapper>
  )
}

export default Cards
