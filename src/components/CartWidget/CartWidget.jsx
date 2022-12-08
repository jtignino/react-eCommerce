import './CartWidget.css';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <ul className="navbar-nav ms-auto align-items-center">
            <div className='position-relative'>
                <button className='btn btn-lg position-relative- p-2'>
                    <Link to={"/cart"}><i className="fa-solid fa-cart-shopping colorIcon p-0"></i></Link>      
                </button>
                <span class="position-absolute top-0 start-100 translate-middle contadorCarrito">0</span>
            </div>
        </ul>
    );
}

export default CartWidget;
