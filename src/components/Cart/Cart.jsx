import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";


const Cart = () => {  
    document.querySelector('title').textContent = "Carrito | Piensa Digital" ;
    const {carrito} = useCarritoContext();

    return (
        <div className='container-xl'>
            {carrito.length === 0 ?
            <>
                <h1 className='fs-3'>Carrito vacío</h1>
                <Link className="nav-link" to={"/"}><button className="d-grid btn btn-secondary my-3">Continuar comprando</button></Link>
            </>
            :
            <>
                <h1 className='fs-3'>Productos</h1>
                <Link className="nav-link" to={"/checkout"}><button className="d-grid btn btn-secondary my-3">Finalizar compra</button></Link>
            </>
            }
        </div>
    )
}

export default Cart;
