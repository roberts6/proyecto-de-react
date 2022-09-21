import React from 'react'
import { useItemContext } from '../CartContext';
import {Link} from "react-router-dom"

const Cart = ({ products }) => {
  const {RemoveItem, cartList, totalPriceCart} = useItemContext()
console.log("que me trae products", products);

  if (cartList.length === 0) {
    <div>
      <h1>No hay nada en tu carrito :(</h1>
      <Link to= "/">Vamos a comprar!!</Link>
    </div>
  } else {
    return (
      products.map ((product) => {
        return(
          <div key={product.id} className = "cards-individual-fetch">
       <img src={product.image} />
       <button onClick={() => RemoveItem(product.id)}>Eliminar</button>
          </div>
        )
          })
    )
  }
}

export default Cart

