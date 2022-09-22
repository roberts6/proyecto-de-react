import React from 'react'
import { useItemContext } from '../CartContext';
import {Link} from "react-router-dom"


const Cart = () => {
  const {RemoveItem, cartList, totalPriceCart} = useItemContext()
  //console.log("esta es mi cartList en el cart",cartList.length);
  
  if (cartList.length === 0) {
    return(
    <div className = "cart-empty">
      <h1>No hay nada en tu carrito :(</h1>
      <Link to= "/">Vamos a comprar!!</Link>
    </div>
    )
  } 
    return (
      cartList.map ((product) => { 
        return(
          <div key={product.id} className = "cards-individual-fetch">
      <div className= "cart">
           <img src={product.image} alt= {product.title}/>
        <div className= "cart-description">
        <p>Producto: ${product.title}</p>
           <p>Precio unitario: ${product.price}</p>
           <p>Cantidad seleccionada: {product.quantity}</p>
           <p>precio total: ${product.price * product.quantity}</p>
           <button onClick={() => RemoveItem(product.id)}>Eliminar</button>
        </div>   
      </div>     
    </div>
        ) 
      } )
      )
    }
  
export default Cart

