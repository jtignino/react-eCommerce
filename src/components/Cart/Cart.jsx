import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";


const Cart = () => {  
    document.querySelector('title').textContent = "Carrito | Piensa Digital" ;
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext();

    return (
        <div className='container-xl pt-5'>
            {carrito.length === 0 ?
            <>
                <h1 className='fs-3 mb-3'>Carrito vacío</h1>
                <Link className="nav-link" to={"/"}><button className="d-grid btn btn-secondary my-3">Continuar comprando</button></Link>
            </>
            :
            <>
                <h1 className='fs-3 mb-3'>Carrito</h1>
                { carrito.map((prod) => 
                    <div className="card mb-5 pb-1" key={prod.id} style={{ maxWidth: '600px' }}>
                        <div className="row g-0">
                            <div className="col-md-4 my-auto">
                                <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{prod.nombre}</h5>
                                    <p className="card-text">Precio unitario: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio total: ${new Intl.NumberFormat('de-DE').format(prod.precio*prod.cant)}</p>
                                    <button className="d-grid btn btn-danger my-3" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) }
                <p className="fs-5">Resumen de la compra: <span className="fw-bold">${new Intl.NumberFormat('de-De').format(totalPrice())}</span> </p>
                <button className="btn btn-danger my-2 d-inline me-2" onClick={emptyCart}>Vaciar carrito</button>
                <Link className="nav-link d-inline ms-2" to={"/checkout"}><button className="btn btn-outline-secondary my-2">Finalizar compra</button></Link>
            </>
            }
        </div>
    )
}

export default Cart;
