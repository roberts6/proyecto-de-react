import React, {useState} from "react"
//import SinEstock from "../img/empty-storage.jpeg"
import Swal from 'sweetalert2'


const ItemCount = () => {
    const stock = 10
    const [initial, setInitial] = useState(0);
    const onAdd = () => {
        return initial < stock ? setInitial(initial + 1) : Swal.fire({
          title: 'No hay más stock',
          text: 'Lo sentimos :(',
          imageUrl: 'https://www.bigstockphoto.com/image-370803004/stock-photo-empty-storage-room-warehouse-shelves-for-goods',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
    }
    const onSubstract = () => {
        return initial > 0 ? setInitial(initial - 1) : Swal.fire({
          title: 'Tu carrito está vacío!',
          text: 'No agregaste nada aún',
          imageUrl: '../',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
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