import React, {useEffect, useState} from 'react'
import Item from '../../components/CardComponent/Item';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
// Firebase métodos
import { collection, query, getDocs, where } from "firebase/firestore"

import {Db} from "../../firebase/FirebaseConfig"


// Misma llamada que en ItemDetailContainer pero en uso el parámetro "genre"

const Category = () => {
    const [Vista, setVista] = useState([]);
    let { genre } = useParams()
    
  useEffect(() => {
    const getSneaker = async () => { 
      const q = query(collection(Db, "Sneakers"), where("genre", "==", genre)) 
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
     
     docs.push({...doc.data(),id: doc.id}) 
  }) 
  setVista(docs); 
  }
        getSneaker(); 
    },[genre]); 
    
  
    return ( 
<> 
<div className="cards">
        {Vista.map((data) => {
  return(
<div key={data.id} className = "cards-individual-fetch">
<Link to= {`/detail/${data.id}`}>
    <Item data={data} />  
</Link>
</div>
    )
     
      })}
</div>
</>
    )
}

export default Category
