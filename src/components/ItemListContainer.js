import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
    return ( 
    <div>
        <p className = "greeting">
            {greeting}
        </p>
        <ItemCount 
        image = "https://static2.bigstockphoto.com/0/7/3/large1500/370803004.jpg"/>
    </div>
    )
}

export default ItemListContainer;