import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import React, {useContext} from "react"
import {ItemContext} from "./CartContext"


const CartWidget = () => {
    const [data, setData] = useContext(ItemContext)
        return(
        <div className = "CartWidget">
            <ShoppingCartTwoToneIcon />
        </div>
    )
}

export default CartWidget;