import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import React from "react"
import { useItemContext } from '../CartContext';



const CartWidget = () => {
    const {totalProductsCart} = useItemContext()
    console.log("cartWidget = ",totalProductsCart());
    
    
if (totalProductsCart() === 0) {
    return(
        <div className = "CartWidget">
            <ShoppingCartTwoToneIcon />
        </div>
        )
} else {
    return(
        <div className = "CartWidget">
            <ShoppingCartTwoToneIcon />
            <p>{totalProductsCart()}</p>
        </div>
        )
}


    
    
    // if (totalProductsCart.length >= 1) {
    //     return(
    //         <div className = "CartWidget">
    //         <ShoppingCartTwoToneIcon />
    //         <p>{totalProductsCart()}</p>
    //     </div> 
    //     )
    // } else{

    //     return (
    //         <div className = "CartWidget">
    //             <ShoppingCartTwoToneIcon /> 
    //         </div>
    //     )}
        
}

export default CartWidget;