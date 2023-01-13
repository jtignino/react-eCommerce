import ItemList from "../ItemList/ItemList";
import SectionPrincipal from "../SectionPrincipal/SectionPrincipal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../assets/firebase";
// import consultarBDD from "../../assets/funciones";

const ItemListContainer = ({}) => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        if (category) {
            document.title = `${category} | Piensa Digital`;
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            document.title = `Piensa Digital`;
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        // getProductos().then(prod => console.log(prod));
        // getProducto("2Doc6yJRM46Q1tnxsvOq").then(prod => {
        //     prod.stock -= 10
        //     delete prod.id
        //     updateProducto("2Doc6yJRM46Q1tnxsvOq", prod).then(estado => console.log(estado))
        // }); 

    }, [category]);
    
    // si pongo [] se ejecuta cuando sucede un cambio en todo el array (o sea, cuando se llene). Yo en este caso tengo que consultar la BDD una sola vez.
    // si hay un cambio de algun objeto interno, como al aplicar un filtro o al modifica el stock, pongo [propiedad].
    // Con esto (el useEffect) le estoy diciendo a mi app cuándo tengo que hacer uso del asincronismo. Esto surge de que si no utilizo el useEffect, hace la consulta todo el tiempo porque es una función asincrónica.

    return (
        <>
            <SectionPrincipal/>
            <div className="container-xl">
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;
