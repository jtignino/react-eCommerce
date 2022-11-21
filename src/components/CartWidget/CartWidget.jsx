import './CartWidget.css';
const CartWidget = () => {
    return (
        <ul className="navbar-nav ms-auto align-items-center">
            <button className='btn btn-lg'>
                <i className="fa-solid fa-cart-shopping colorIcon"></i>
            </button>
            <p className='text-light'>0</p>
        </ul>
    );
}

export default CartWidget;
