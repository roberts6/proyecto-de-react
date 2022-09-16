import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from "react-router-dom"



const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
let {id} = useParams();

useEffect(() => {    
  setTimeout(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
    .then(data => setItem(data))
    .catch(err => console.error(err));  
  }, 2000);
      },[id]);
 
return (
      <ItemDetail data={item} stock={4}/>
)
}

export default ItemDetailContainer
