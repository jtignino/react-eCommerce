import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    return (
        <div className="row justify-content-between mx-auto pb-5">
            {productsList.map(producto => <Item key={producto.id} prod={producto}/>)}
        </div>
    );
}

export default ItemList;
