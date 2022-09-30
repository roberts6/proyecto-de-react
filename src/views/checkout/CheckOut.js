import React from 'react'
import { useItemContext } from '../../CartContext';

const CheckOut = () => {
    const {cartList, totalPriceCart} = useItemContext()
    console.log("esto veo en mi checkout", cartList, "por un total de", totalPriceCart());
  return (
    <div>
      <h1>Este es el checkout</h1>
    </div>
    
    )
}

export default CheckOut
