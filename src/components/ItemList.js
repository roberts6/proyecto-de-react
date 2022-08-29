import React, {useState, useEffect} from 'react'

const ItemList = () => {
    const [sneakers, setSneakers] = useState([]);

    console.log("Esto trae el array de sneakers: ",sneakers);
    

  
    useEffect(() => {    
    fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => setSneakers(data))  
    },[]);

console.log(sneakers.name)

  return (
    <div>
      {sneakers.map((sneaker) => {
          return <p>{sneaker.name}</p>
      })}
    </div>  
  )
}

export default ItemList