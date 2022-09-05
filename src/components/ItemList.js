import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import Item from "./CardComponent/Item"




const ItemList = () => {
	const [Items, setItems] = useState([]);
	//let {id} = useParams(); // desestructuro el id para que solo me traiga el número y no un objeto

	useEffect(() => {    
    setTimeout(() => {
	  fetch('https://fakestoreapi.com/products')
	  .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));  
    }, 2000);
        },[]);

	return (
<div className="cards">
	{Items.map((item) => {
return(
	<div key={item.id} className = "cards-individual-fetch">
{/* <Link to= "/hombres"> */}
<Link to= {`/detail/${item.id}`}>
   <Item data={item}/>
</Link>
	</div>
)
	})}
</div> 
	);
};

export default ItemList;