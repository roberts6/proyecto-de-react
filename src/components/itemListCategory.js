import React from 'react'
import {Link} from "react-router-dom"
import Item from "./CardComponent/Item"


function itemListCategory({ data }) {
    return (
        <div className="cards">
            {data? data.filter ((item) => {
        return(
            <div key={item.category} className = "cards-individual-fetch">
        <Link to= {`/detail/${item.category}`}>
           <Item data={item}/>
        </Link>
            </div>
        )
            }) : null}
        </div> 
            );
}

export default itemListCategory
