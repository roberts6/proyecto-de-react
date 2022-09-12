
import React, {useEffect, useState} from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


// const ItemListContainer = ({greeting}) => {
const ItemListContainer = () => {
    const [Items, setItems] = useState([]);
    const { categoryId } = useParams()

	// useEffect(() => {    
    // setTimeout(() => {
	//   fetch('https://fakestoreapi.com/products')
	//   .then(response => response.json())
    //   .then(data => setItems(data))
    //   .catch(err => console.error(err));  
    // }, 2000);
    //     },[]);
    
useEffect(() => {
    const getData = () => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                if (categoryId) {
                    getData.then(data => setItems(data.filter(data.category === categoryId))) 
                } else {  
                    getData.then(data => setItems(data))
                }
                getData.catch(err => console.error(err));  
        }, 2000);
    }
}, [categoryId])

    return ( 
    <div className= "seraEste">
        {/* <p className = "greeting">
            {greeting}
        </p> */}
        < ItemList data={Items}/>
    </div>
    )
}

export default ItemListContainer;
