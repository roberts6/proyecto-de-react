import React, {useState, useEffect} from 'react'

const ItemList = () => {
    const [sneakers, setSneakers] = useState([]);

    console.log("Esto trae el array de sneakers: ",sneakers);
    

  
    useEffect(() => {    
    fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => setSneakers(data))  
    },[]);

console.log("este es el nombre de los sneakers",sneakers.results[0].name)

  return (
    <div>
      {/* {sneakers.map((sneaker, index) => {
          return <p>{sneaker.results[index].name}</p>
      })} */}
    </div>  
  )
}

export default ItemList