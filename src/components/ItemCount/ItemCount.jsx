import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1);

    function decrementar2(){
        if (contador > 1) {
            document.getElementById("minus").disabled = false;
            document.getElementById("plus").disabled = false;
            setContador(contador - 1);
            contador === 2 && (document.getElementById("minus").disabled = true);
        } 
    }

    function incrementar2() {
        if (contador < stock) {
            document.getElementById("plus").disabled = false;
            document.getElementById("minus").disabled = false;
            setContador(contador + 1);
            contador === stock-1 && (document.getElementById("plus").disabled = true);
        } 
    }

    const agregarCarrito = () => console.log(`Agregaste al carrito la cantidad: ${contador}`);

    return (
        <>
        <div className="btn-group btnDivGroup" role="group" aria-label="">
            <button disabled={contador === 1} type="button" className="btn btnCount" id="minus" onClick={() => decrementar2()}><i className="fa-solid fa-minus"></i></button>
            <input type="number" className="text-center inputCount" value={contador} />
            <button type="button" className="btn btnCount" id="plus" onClick={() => incrementar2()}><i className="fa-solid fa-plus"></i></button> 
        </div>
        <button type="button" className="btn btn-outline-secondary ms-5" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
