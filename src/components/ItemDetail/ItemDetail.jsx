import ItemCount from "../ItemCount/ItemCount";
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ItemDetail = ({ item }) => {
    const {addItem} = useCarritoContext();

    const onAdd = (contador) => {
        addItem(item, contador);
        toast.success(`El producto "${item.nombre}" se agregó al carrito.`)
    }

    return (
        <div className="card mb-5 pb-1" style={{ maxWidth: '700px' }}>
            <div className="row g-0">
                <div className="col-md-4 my-auto">
                    <img src={item.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text">Stock: {item.stock}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} inicial={1}/>
                        <Link className="nav-link d-inline" to={"/"}><button className="d-inline btn btn-outline-secondary my-3 me-2">Continuar comprando</button></Link>
                        <Link className="nav-link d-inline" to={"/cart"}><button className="d-inline btn btn-secondary my-3 ms-2">Finalizar compra</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
