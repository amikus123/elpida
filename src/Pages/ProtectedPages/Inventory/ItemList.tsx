import React from 'react'
import { ItemProperties } from '../../../context/DataContext'
import ItemCard from './ItemCard'


interface ItemListProps{
    items:ItemProperties[]
    categoryName:string
    handleDelete:(s:string)=>any
}
const ItemList = ({items,handleDelete}:ItemListProps) => {
    return (
        <div>
            {items.map((item,index)=>{
                return  <ItemCard handleDelete={handleDelete} item={item} key={index}  />
            })}
        </div>
    )
}

export default ItemList
