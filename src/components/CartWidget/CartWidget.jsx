import './CartWidget.css';
const CartWidget = () => {
    return (
        <ul className="navbar-nav ms-auto align-items-center">
            {/* <button className='btn btn-lg position-relative p-2'>
                <i className="fa-solid fa-cart-shopping colorIcon p-0"></i>
                <span class="position-absolute top-0 start-100 translate-middle contadorCarrito">0</span>
            </button> */}

            <div className='position-relative'>
                <button className='btn btn-lg position-relative- p-2'>
                    <i className="fa-solid fa-cart-shopping colorIcon p-0"></i>   
                </button>
                <span class="position-absolute top-0 start-100 translate-middle contadorCarrito">0</span>
            </div>
        </ul>
    );
}

export default CartWidget;
