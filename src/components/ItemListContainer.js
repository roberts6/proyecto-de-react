
import React, {useEffect, useState} from 'react'
import ItemList from "./ItemList"


// const ItemListContainer = ({greeting}) => {
const ItemListContainer = () => {
    const [Items, setItems] = useState([]);

	useEffect(() => {    
    setTimeout(() => {
	  fetch('https://fakestoreapi.com/products')
	  .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));  
    }, 2000);
        },[]);

    return ( 
    <div className= "seraEste">
        {/* <p className = "greeting">
            {greeting}
        </p> */}
        < ItemList data={Items}/>
    </div>
    )
}

export default ItemListContainer;
