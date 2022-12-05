import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    return (
        <div className="row justify-content-between mx-auto">
            {productsList.map(producto => <Item key={producto.id} prod={producto}/>)}
        </div>
    );
}

export default ItemList;
