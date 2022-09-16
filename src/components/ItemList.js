import {Link} from "react-router-dom"
import Item from "./CardComponent/Item"
import React, {useContext} from "react"
import {useItemContext} from "./CartContext"


// const ItemList = ({data}) => {
	const ItemList = () => {

	const [data, status] = useContext(useItemContext)

//console.log("qué trae el Context", data);
console.log("este es el estatus: ", status);

	return (
<div className="cards">
	{data? data.map ((item) => {
return(
	<div key={item.id} className = "cards-individual-fetch">
<Link to= {`/detail/${item.id}`}>
   <Item data={item}/>
</Link>
	</div>
)
	}) : null}
</div> 
	);
};

export default ItemList;