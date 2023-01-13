import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducto } from "../../assets/firebase";
// import consultarBDD from "../../assets/funciones";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getProducto(id).then(prod => setProducto(prod))
    }, []);

    return (
        <div className="container-xl pt-5">
            <h1 className="fs-3 mb-4">Detalle de producto</h1>
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
