import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import consultarBDD from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        consultarBDD('../json/catalogo.json').then(productos => {
            const prod = productos.find(product => product.id === parseInt(id));
            setProducto(prod);
        })
    }, []);

    return (
        <div className="container-xl pt-5">
            <h1 className="fs-3 mb-4">Detalle de producto</h1>
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
