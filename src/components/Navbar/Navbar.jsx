import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-xl">
                <Link className="navbar-brand" to={'/'}><img src="../images/avatar+texto-02.png" alt="" /><p className="text-uppercase fs-5 fw-bold my-0 logoNav">Piensa digital</p></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <Categorias/>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar; 
