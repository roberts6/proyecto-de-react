import React, {useState} from "react"
import SinEstock from "../img/empty-storage.jpeg"
import Swal from 'sweetalert'


const ItemCount = () => {
    const stock = 10
    const [initial, setInitial] = useState(0);
    const onAdd = () => {
        return initial < stock ? setInitial(initial + 1) : Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            image: SinEstock,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    const onSubstract = () => {
        return initial > 0 ? setInitial(initial - 1) : alert("Tu carrito está vacio")
    }
    return ( 
            <div className= "handlerCart">
                <p className="state">
                    {initial}
                </p>
              <div className="handlerButtons">  
                <button onClick={onAdd}>+</button>
                <button onClick={onSubstract}>-</button>
              </div>  
                <button className= "botonAnadir">Añadir al carrito</button>
            </div>
            )
}

export default ItemCount;