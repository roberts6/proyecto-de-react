import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, {useEffect, useState} from 'react'
import Item from '../components/CardComponent/Item';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
// Firebase métodos
import { collection, query, getDocs, where } from "firebase/firestore"

import {Db} from "../firebase/FirebaseConfig"

const Filter = ({data}) => {
  const options = data.map((option) => {
    const firstLetter = option.genre[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const [Vista, setVista] = useState([]);
    let { name } = useParams()
    
  useEffect(() => {
    const getSneaker = async () => { 
      const q = query(collection(Db, "Sneakers"), where("name", "==", name)) 
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
     
     docs.push({...doc.data(),id: doc.id}) 
  }) 
  setVista(docs); 
  }
        getSneaker(); 
    },[name]); 
    
  
    return ( 
<> 
<div className="cards">
        {Vista.map((data) => {
  return(
<div key={data.id} className = "cards-individual-fetch">
<Link to= {`/detail/${data.id}`}>
  <Item data = {data}>
  <div className = "opciones-filtro">
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Filtros" />}
    />
  </div>
  </Item>
</Link>
</div>
    )
     
      })}
</div>
</>
    )

}


export default Filter
