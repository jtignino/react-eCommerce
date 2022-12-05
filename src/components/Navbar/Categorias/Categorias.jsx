import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
                <Link className="nav-link" to={'/'}>Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/1'}>Servicios</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/2'}>Cursos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/category/3'}>Herramientas</Link>
            </li>
        </ul>
    );
}

export default Categorias;
