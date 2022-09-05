
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Item from "./CardComponent/Item"

const ItemDetail = () => {
const [item, setItem] = useState([]);
let {id} = useParams(); // desestructuro el id para que solo me traiga el número y no un objeto



useEffect (() => {
  setTimeout(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
      .then(data => setItem(data))
      .catch(err => console.error(err));  
    }, 2000);
}, [id])
return (
  <div>
    {item.map((product) => {
return (
<Item data={product}/>
)
    })}
  </div>
)
}

export default ItemDetail
