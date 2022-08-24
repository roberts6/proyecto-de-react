import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
    return ( 
    <div>
        <p className = "greeting">
            {greeting}
        </p>
        <ItemCount />
    </div>
    )
}

export default ItemListContainer;