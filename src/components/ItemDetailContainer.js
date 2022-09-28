import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from "react-router-dom"


// LLAMADA A LA API
// const ItemDetailContainer = () => {
//   const [item, setItem] = useState([]);
// let {id} = useParams();

// useEffect(() => {    
//   setTimeout(() => {
//   fetch(`https://fakestoreapi.com/products/${id}`)
//   .then(response => response.json())
//     .then(data => setItem(data))
//     .catch(err => console.error(err));  
//   }, 2000);
//       },[id]);
 
// return (
//       <ItemDetail data={item} stock={4}/>
// )
// }


// Firebase métodos
import { collection, query, getDocs, where, documentId } from "firebase/firestore"

import {Db} from "../firebase/FirebaseConfig"


// aplicación de la llamada a Firebase
const ItemDetailContainer = () => {
  const [Item, setItem] = useState([]);
  console.log("este es mi item",Item);
  

  let { id } = useParams()
  
useEffect(() => {
  const getSneaker = async () => { // --> firebase trae un await, por eso hay que meterlo dentro de una función asíncrona
    const q = query(collection(Db, "Sneakers"), where(documentId(), "==", id)) // traigo mi base de datos (db) y el nombre que le di en firebase
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
   // console.log(doc.id, " => ", doc.data()); --> queda el id por fuera de mi objeto      
   docs.push({...doc.data(),id: doc.id}) // --> de esta manera sumo el id a cada doc.data()
}) 
setItem(docs); 
}
      getSneaker(); // la llamo para que se ejecute
  },[id]); // --> ,[] al cerrar el useEffect para que no se ejecute infinitamente
  

  return ( 
    <ItemDetail data={Item} />  
  )
}

export default ItemDetailContainer
