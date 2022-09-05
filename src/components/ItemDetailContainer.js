import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import {link} from "react-router-dom"

const ItemDetailContainer = () => {
  const [items, setItems] = useState([])
  useEffect (() => {
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.error(err));  
      }, 2000);
  }, [])

  return (
    <div>
      {items.map((item) => {
return (
  <div key= {item.id}>
    <link to= {`/detail/${item.id}`}>
      <ItemDetail data={item}/>
    </link>
  </div>
)
      })}
    </div>
  )
}

export default ItemDetailContainer
