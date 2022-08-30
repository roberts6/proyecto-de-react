import React, {useState, useEffect} from 'react'
import Item from "./CardComponent/Item"


const ItemList = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {    
    setTimeout(() => {
      fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));  
    }, 2000);
        },[]);
    


   
console.log("este es el nombre del sneaker en el index 0",Items.results[0].name)

  return (
    <div >
      {/* {Items.map((product) => {
        return (
          <Item
            key={product.id}
            name={product.name}
            img={product.img}
            price= {product.price}
            description={product.role}
          />
        );
      })} */}
    </div>
  );
};

export default ItemList;