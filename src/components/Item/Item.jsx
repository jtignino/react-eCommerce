import { Link } from "react-router-dom";
import './Item.css'; 

const Item = ({ prod }) => {
    return (
        <div className="card my-5 cardItem" style={{ width: '18rem' }}>
            <img src={`../images/${prod.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                <p className="card-text">{prod.marca}</p>
                <button className="btn btn-secondary"><Link className="nav-link" to={`/product/${prod.id}`}>Ver producto</Link></button>
            </div>
        </div>
    );
}

export default Item;
