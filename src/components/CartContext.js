import React, { createContext, useEffect, useState } from "react"

 export const ItemContext = createContext();

 
 export const ApiProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [status, setStatus] = useState("initial");
    const [data, setData] = useState([]);

    useEffect(() => {    
        fetchData();
            },[]);
        
const fetchData = async () => {
try {
    const getData = await setTimeout(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setData(data)) 
      }, 2000);
      setStatus("done");
      setData(getData);
  
} catch (error) {
    setStatus("error");
}
}

const AddItem = (...cartList) => {
    setCartList()
}

const RemoveItem = () => {

}

const Clear = () => {

}

const isInCart = () => {

}

return(
    <ItemContext.Provider value={[data, setData, status, AddItem, RemoveItem, Clear, isInCart  ]}>
        {children}
    </ItemContext.Provider>
)
        }

