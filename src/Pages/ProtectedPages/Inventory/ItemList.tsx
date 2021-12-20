import React from 'react'
import { ItemProperties } from '../../../context/DataContext'
import ItemCard from './ItemCard'
import styled from "styled-components"

const Wrap = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
`

interface ItemListProps{
    items:ItemProperties[]
    categoryName:string
    handleDelete:(s:string)=>any
}
const ItemList = ({items,handleDelete}:ItemListProps) => {
    return (
        <Wrap>
            {items.map((item,index)=>{
                return  <ItemCard handleDelete={handleDelete} item={item} key={index}  />
            })}
        </Wrap>
    )
}

export default ItemList
