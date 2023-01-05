import './CartWidget.css';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <ul className="navbar-nav">
            <div className='position-relative'>
                <button className='btn btn-lg position-relative- p-2'>
                    <Link to={"/cart"}>
                        <i className="fa-solid fa-cart-shopping colorIcon p-0"></i>
                        <span class="position-absolute top-0 start-100 translate-middle contadorCarrito">0</span>
                    </Link>      
                </button>
                
            </div>
        </ul>
    );
}

export default CartWidget;
