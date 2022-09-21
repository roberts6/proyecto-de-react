import React, { createContext, useEffect, useState, useContext } from "react"

const ItemContext = createContext([]); // --> ya no lo exporto porque ahora uso useItemContext que es mi hook customizado

 export const useItemContext = () => {
const ItemContextData = useContext(ItemContext)
return ItemContextData
 } // de esta forma cada vez que importe el cotext a un componente no tengo que estar importando el useContext y el context propiamente dicho


 export const ApiProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [status, setStatus] = useState("initial");
    const [data, setData] = useState([]);

//     useEffect(() => {    
//         fetchData();
//             },[]);

// // lógica del fetch con el setTimeOut
// const fetchData = async () => {
// try {
//     const getData = await setTimeout(() => {
//         fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => setData(data)) 
//       }, 2000);
//       setStatus("done");
//       setData(getData);
  
// } catch (error) {
//     setStatus("error");
// }
// }

const AddItem = (data, quantity) => {
    // creo un nuevo array. Si existe el producto le suma cantidad y sino creo un nuevo objeto. --> REVISAR!
    let newCart;
    let product = cartList.find(product => product.id === data.id);
    if (product) {
        product.quantity += quantity;
        newCart = [...cartList]
    } else {
        product = {...data, quantity: quantity};
        newCart = [...cartList, product]
    }
 setCartList(newCart)
 console.log("mi newCrt es: ",newCart);
 
}


// traigo todos los id que no sean el que paso por parámetro
const RemoveItem = (id) => {
setCartList(cartList.filter(product => product.id !== id));
}

//devuelvo el CartList a un array en 0
const Clear = () => {
setCartList([]);
}

// si el product id es = al que paso por parámetro entonces está en el array
const isInCart = (id) => {
return cartList.find(product => product.id === id) ? true : false
}

return(
    <ItemContext.Provider value={ {data, setData, status, AddItem, RemoveItem, Clear, isInCart} }>
        {children}
    </ItemContext.Provider>
)
        }


