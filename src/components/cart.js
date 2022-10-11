import React from 'react'
import { useItemContext } from '../CartContext';
import {Link} from "react-router-dom"
import JordanIcono from "../img/LogoJordanRojo.svg"
import SadFace from "../img/SadFaceWhite.svg"
import Button from '@mui/material/Button';



const Cart = () => {
  const {RemoveItem, cartList, totalPriceCart} = useItemContext()
  //console.log("esta es mi cartList en el cart",cartList.length);
  
  
  if (cartList.length === 0) {
    return(
      <div className = "cart-empty">
      <h1>No hay nada en tu carrito <img src={SadFace} className="logo-navbar" alt="SadFace" /></h1>
      <Link to= "/">Vamos a comprar!! <img src={JordanIcono} className="logo-navbar" alt="logo" /> </Link>
    </div>
    )
  } else{
    return ( 
      <>
      {cartList.map ((product) => { 
        return(
      <div key={product.id} className = "cards-individual-fetch">
        <div className= "cart">
             <img src={product.image} alt= {product.title}/>
          <div className= "cart-description">
          <p>Modelo: {product.name}</p>
             <p>Precio unitario: ${product.price}</p>
             <p>Cantidad seleccionada: {product.quantity}</p> <div className="handlerButtons">  
            {/* <button onClick={ () => product.quantity - 1}>-</button>
            <button >+</button> */}
          </div> 
             <p className="precioTotalArticulo">Precio total: ${product.price * product.quantity}</p>
             <button onClick={() => RemoveItem(product.id)}>Eliminar</button>
          </div>   
        </div>     
      </div>
          ) 
        },
        //console.log("el totalPriceCart es = $", totalPriceCart())
        )
      }
      <div className= "total-a-pagar">
        <h2>El total a pagar es de: ${totalPriceCart()}</h2>
        <Link to = "/checkout">
        <Button variant="contained" color="warning">
        Finalizar compra
      </Button>
        </Link>
      </div>
      </>
        )
      }
    }
  
export default Cart

