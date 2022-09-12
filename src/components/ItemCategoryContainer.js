import React, {useEffect, useState} from 'react'
import ItemListCategory from "./itemCategoryList"
import { useParams } from "react-router-dom"

function ItemCategoryContainer() {
    const [items, setItems] = useState([]);
    let {category} = useParams();
    
    useEffect(() => {    
      setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${category}`)
      .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.error(err));  
      }, 2000);
          },[category]);
     
    return (
        <ItemListCategory data={items} />
    )
}

export default ItemCategoryContainer
