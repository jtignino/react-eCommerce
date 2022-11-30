import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import consultarBDD from "../../assets/funciones";
import { useState, useEffect } from "react";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarBDD().then(productList => {
            const cardProductos = ItemList({productList})
            setProductos(cardProductos)
        })
    }, []);
    console.log(productos)
    
    // si pongo [] se ejecuta cuando sucede un cambio en todo el array (o sea, cuando se llene). Yo en este caso tengo que consultar la BDD una sola vez.
    // si hay un cambio de algun objeto interno, como al aplicar un filtro o al modifica el stock, pongo [propiedad].
    // Con esto (el useEffect) le estoy diciendo a mi app cuándo tengo que hacer uso del asincronismo. Esto surge de que si no utilizo el useEffect, hace la consulta todo el tiempo porque es una función asincrónica.

    return (
        <div className="container-xl">
            <ItemCount stock={5}/>
            <p className="">{greeting}</p>
            {productos}
        </div>
    );
}

export default ItemListContainer;
