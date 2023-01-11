import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext();

    return (
        <ul className="navbar-nav">
            <div className='position-relative'>
                <Link to={"/cart"}>
                    <button className='btn btn-lg position-relative- p-2'>
                        <i className="fa-solid fa-cart-shopping colorIcon p-0"></i>
                        { getItemQuantity() > 0 && <span class="position-absolute top-0 start-100 translate-middle contadorCarrito"> {getItemQuantity()} </span> }   
                    </button>
                </Link>      
            </div>
        </ul>
    )
}

export default CartWidget;
