import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import React, {useContext} from "react"
import {useItemContext} from "./CartContext"


const CartWidget = () => {
    const [data, setData] = useContext(useItemContext)
        return(
        <div className = "CartWidget">
            <ShoppingCartTwoToneIcon />
        </div>
    )
}

export default CartWidget;