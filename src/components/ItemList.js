import React, {useState, useEffect} from 'react'
import Item from "./CardComponent/Item"



const ItemList = () => {
	const [Items, setItems] = useState([]);

	useEffect(() => {    
    setTimeout(() => {
	  fetch('https://api.github.com/users')
	  .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));  
    }, 2000);
        },[]);

	return (
		<div className = "cards-individual-fetch">
			{Items.map((item) => {
				return <Item key={item.id} data={item} />;
			})}
		</div>
	);
};

export default ItemList;