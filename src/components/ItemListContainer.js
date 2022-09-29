
import React, {useEffect, useState} from 'react'
import ItemList from "./ItemList"


// Firebase métodos
import { collection, query, getDocs } from "firebase/firestore"

import {Db} from "../firebase/FirebaseConfig"


// const ItemListContainer = ({greeting}) => { --> se pasa por prop greeting
    // *-- Método para hacer llamada a una API --*
// const ItemListContainer = () => {
//     const [Items, setItems] = useState([]);

// 	useEffect(() => {    
//     setTimeout(() => {
// 	  fetch('https://fakestoreapi.com/products')
// 	  .then(response => response.json())
//       .then(data => setItems(data))
//       .catch(err => console.error(err));  
//     }, 2000);
//         },[]);
    

//     return ( 
//     <div className= "itemList">
//         {/* <p className = "greeting"> --> se renderiza la prop
//             {greeting}
//         </p> */}
//         < ItemList data={Items}/>
//     </div>
//     )
// }


// aplicación de la llamada a Firebase
const ItemListContainer = () => {
    const [Items, setItems] = useState([]);
    const getSneaker = async () => { // --> firebase trae un await, por eso hay que meterlo dentro de una función asíncrona
        const q = query(collection(Db, "Sneakers")) // traigo mi base de datos (db) y el nombre que le di en firebase
        // dentro de query y separado por , se agrega where("clave", "==/</>/etc", "valor")--> ejemplo: , where("price", ">", 4000 ) --> esto es un filtro
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
       // //console.log(doc.id, " => ", doc.data()); --> queda el id por fuera de mi objeto      
       docs.push({...doc.data(),id: doc.id}) // --> de esta manera sumo el id a cada doc.data()
    }) 
    setItems(docs); 
    }

	useEffect(() => {
        getSneaker(); // la llamo para que se ejecute
    },[]); // --> ,[] al cerrar el useEffect para que no se ejecute infinitamente
    

    return ( 
    <div className= "itemList">
        < ItemList data={Items}/>
    </div>
    )
}


export default ItemListContainer;
