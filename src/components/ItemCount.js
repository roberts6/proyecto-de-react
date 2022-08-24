import React, {useState} from "react"

const ItemCount = () => {
    const [counter, setCounter] = useState(0)
    const addButton = () => {
        if(counter < 6){
            setCounter(counter + 1)
        }else {
            alert("Se acabó el stock")
        }
    }
    const substractButton = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
        }
        else{
            alert("Tu carrito está vacío")
        }
    }
    return ( 
    <div>
        <p >
            {counter}
        </p>
        <button onClick={addButton}>+</button>
        <button onClick={substractButton}>-</button>
    </div>
    )
}

export default ItemCount;