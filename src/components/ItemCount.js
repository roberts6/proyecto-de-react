import React, {useState} from "react"

// const ItemCount = () => {
//     const [counter, setCounter] = useState(0)
//     const addButton = () => {
//         if(counter < 6){
//             setCounter(counter + 1)
//         }else {
//             alert("Se acabó el stock")
//         }
//     }
//     const substractButton = () => {
//         if (counter >= 1) {
//             setCounter(counter - 1)
//         }
//         else{
//             alert("Tu carrito está vacío")
//         }
//     }
//     return ( 
//     <div>
//         <p >
//             {counter}
//         </p>
//         <button onClick={addButton}>+</button>
//         <button onClick={substractButton}>-</button>
//     </div>
//     )
// }

const ItemCount = () => {
    const stock = 10
    const [initial, setInitial] = useState(0);
    const onAdd = () => {
        // if (initial < stock  ) {
        //     setInitial(initial + 1);
        // }
        // else { return; }
        const adding = (initial < stock) ? setInitial(initial + 1) : stock
        console.log(adding)
    }
    const onSubstract = () => {
        // if (initial > 0  ) {
        //     setInitial(initial - 1);
        // }
        // else { return; }
        const substracting = (initial > 0) ? setInitial(initial - 1) : 0
        console.log(substracting)
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