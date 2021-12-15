import React from 'react'
import ProductListItem from '../../PublicPages/ProductListPage/ProductListItem/ProductListItem'
import ItemCard from './ItemCard'


interface ItemListProps{
    items:any[]
}
const ItemList = ({items}:ItemListProps) => {
    return (
        <div>
            {items.map((item,index)=>{
                return  <ItemCard item={item} key={index}/>
            })}
        </div>
    )
}

export default ItemList
