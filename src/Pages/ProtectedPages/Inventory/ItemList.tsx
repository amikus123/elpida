import React from 'react'
import ItemCard from './ItemCard'


interface ItemListProps{
    items:any[]
    categoryName:string
    handleDelete:(s:string)=>any
}
const ItemList = ({items,categoryName,handleDelete}:ItemListProps) => {
    return (
        <div>
            <p>{categoryName}</p>
            {items.map((item,index)=>{
                return  <ItemCard handleDelete={handleDelete} item={item} key={index}  />
            })}
        </div>
    )
}

export default ItemList
