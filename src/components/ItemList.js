import {Link} from "react-router-dom"
import Item from "./CardComponent/Item"
import React from "react"


const ItemList = ({data}) => {
	//const ItemList = () => {

	//const [data, status] = useContext(ItemContext)

//console.log("este es el estatus: ", status);

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