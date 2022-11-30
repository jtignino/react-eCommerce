import Item from "../Item/Item";

const ItemList = ({productList}) => {
    return (
        <div className="row justify-content-between mx-auto">
            {productList.map(producto => <Item key={producto.id} prod={producto}/>)}
        </div>
    );
}

export default ItemList;
