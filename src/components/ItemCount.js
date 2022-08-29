import React, {useState} from "react"
//import SinEstock from "../img/empty-storage.jpeg"
import Swal from 'sweetalert2'


const ItemCount = () => {
    const stock = 6
    const [initial, setInitial] = useState(0);
    const onAdd = () => {
        return initial < stock ? setInitial(initial + 1) : Swal.fire({
          icon: "warning",
          title: 'No hay más stock',
          text: 'Lo sentimos :(',
          //imageUrl: <img src= "src/components/img/empty-storage.jpeg" alt= "Sin Stock" />,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Sin Stock',
        })
    }
    const onSubstract = () => {
        return initial > 0 ? setInitial(initial - 1) : Swal.fire({
          icon: "error",
          title: 'Tu carrito está vacío!',
          text: 'No agregaste nada aún',
          //imageUrl: './components/img/empty-storage.jpeg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Carrito vacío',
        })
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