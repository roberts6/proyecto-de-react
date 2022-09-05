import React, {useEffect, useState} from 'react'
import Item from "../../components/CardComponent/Item"
import {useParams, Link} from "react-router-dom"


const SneakerDetail = () => {
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
  //   <div>
  //     {item.map((product) => {
  // return (
  //   <div key = {product.id}>
  //     <Link to= {`/detail/${id}`}>
  //       <Item data={product}/>
  //     </Link>
  //   </div>
  
  )
      })}
    </div>
  )
  }
  
  export default SneakerDetail
