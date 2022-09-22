import React, {useState, useEffect} from "react"
import Swal from 'sweetalert2'




const ItemCount = ({stock, setPurchase, name, onCart, initial }) => {
    const [count, setCount] = useState(initial);
    const onAdd = () => {
        return count < stock ? setCount(count + 1) : Swal.fire({
          icon: "warning",
          title: `No hay más stock de ${name}`,
          text: 'Lo sentimos :(',
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
            <button onClick={onSubstract}>-</button>
            <button onClick={onAdd}>+</button>
          </div>  
            <button className= "botonAnadir" disabled={count <= 0 || count >= stock + 1 } onClick={() => onCart(count)}>Añadir al carrito</button>
        </div>
        )
    } else {
      ////console.log("este es el nuevo estado de set",setPurchase);
      return null
    }

}

export default ItemCount;