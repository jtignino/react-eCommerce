import { useEffect } from "react";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

const Cart = () => {  
    document.querySelector('title').textContent = "Carrito | Piensa Digital" ;
    
    return (
        <div className='container-xl'>
            <h1 className='fs-3'>Carrito en construcción.</h1>
            <Link className="nav-link" to={"/checkout"}><button className="d-grid btn btn-secondary my-3">Finalizar compra</button></Link>
        </div>
    );
}

export default Cart;
