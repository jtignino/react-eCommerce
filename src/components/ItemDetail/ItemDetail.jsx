import ItemCount from "../ItemCount/ItemCount";
import { useCarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ item }) => {
    const {addItem} = useCarritoContext();

    const onAdd = (contador) => {
        addItem(item, contador);
    }

    return (
        <div className="card mb-5 pb-1" style={{ maxWidth: '600px' }}>
            <div className="row g-0">
                <div className="col-md-4 my-auto">
                    <img src={`../images/${item.img}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                        <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text">Stock: {item.stock}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} inicial={1}/>
                        <button className="d-grid btn btn-secondary my-3">Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
