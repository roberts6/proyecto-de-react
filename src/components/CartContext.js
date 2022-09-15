import React, { createContext, useEffect, useState } from "react"

 export const ItemContext = createContext();

export const ApiProvider = ({ children }) => {
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

return(
    <ItemContext.Provider value={[data, setData, status]}>
        {children}
    </ItemContext.Provider>
)
        }

