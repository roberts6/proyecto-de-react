import React, {useState, useEffect, useContext} from "react"
//import SinEstock from "../img/empty-storage.jpeg"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import {ItemContext} from "./CartContext"
import { data } from "browserslist";



const ItemCount = ({stock, setPurchase, name, onCart, initial }) => {
  const { AddItem } = useContext(ItemContext)
    const [count, setCount] = useState(initial);
    const onAdd = () => {
        return count < stock ? setCount(count + 1) : Swal.fire({
          icon: "warning",
          title: `No hay más stock de ${name}`,
          text: 'Lo sentimos :(',
          //imageUrl: <img src= "src/components/img/empty-storage.jpeg" alt= "Sin Stock" />,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Sin Stock',
          setPurchase: false
        })
        
    }

//console.log("este es el set",setPurchase);


    const onSubstract = () => {
        return count > 0 ? setCount(count - 1) : Swal.fire({
          icon: "error",
          title: 'Tu carrito está vacío!',
          text: 'No agregaste nada aún',
          //imageUrl: './components/img/empty-storage.jpeg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Carrito vacío',
        })
    }

 useEffect(() => {
   setCount(parseInt(initial))
 },[initial])

    // initial > 0 ? setPurchase = false : setPurchase = true;

    if (setPurchase) {
      return ( 
        <div className= "handlerCart">
            <p className="state">
                {count}
            </p>
          <div className="handlerButtons">  
            <button onClick={onAdd}>+</button>
            <button onClick={onSubstract}>-</button>
          </div>  
          {/* <Link to="/cart"> */}
            {/* <button className= "botonAnadir" onClick= {()=>setData(AddItem)}>Añadir al carrito</button> */}
            <button className= "botonAnadir" disabled={count <= 0 || count >= stock + 1 } onClick={() => onCart(count)}>Añadir al carrito</button>
          {/* </Link> */}
        </div>
        )
    } else {
      console.log("este es el nuevo estado de set",setPurchase);
      return null
    }

}

export default ItemCount;