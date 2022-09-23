
import React, {useEffect, useState} from 'react'
import ItemList from "./ItemList"


// Firebase métodos
import { collection, query, where, getDocs } from "firebase/firestore"

import Db from "../firebase/FirebaseConfig"

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
//     <div className= "seraEste">
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
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());          
}) 
    }

	useEffect(() => {
        getSneaker(); // la llamo para que se ejecute
    },[]); // --> ,[] al cerrar el useEffect para que no se ejecute infinitamente
    

    return ( 
    <div className= "seraEste">
        < ItemList data={Items}/>
    </div>
    )
}


export default ItemListContainer;
