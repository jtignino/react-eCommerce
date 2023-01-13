import React from "react";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../assets/firebase";
import { useCarritoContext } from '../../context/CarritoContext';
import { toast } from "react-toastify";

const Checkout = () => {
    const {totalPrice, carrito, emptyCart} = useCarritoContext();
    const datosFormulario = React.useRef();
    let navigate = useNavigate();

    const consultarFormulario = (e) => {
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        const cliente = Object.fromEntries(datForm);

        if (cliente.email === cliente.emailDos) {
            const aux = [...carrito];
            aux.forEach(productoEnCarrito => {
                getProducto(productoEnCarrito.id).then(prodEnBDD => {
                    if (prodEnBDD.stock >= productoEnCarrito.cant) {
                        prodEnBDD.stock -= productoEnCarrito.cant;
                        updateProducto(productoEnCarrito.id, prodEnBDD);    
                    } else {
                        toast.error(`El producto ${prodEnBDD.nombre} no posee stock suficiente.`);                    
                        emptyCart();
                        e.target.reset();
                        navigate("/");  
                    }
                })
            })

            createOrdenCompra(cliente, totalPrice(), new Date().toISOString().slice(0,10)).then(ordenDeCompra => {
                getOrdenCompra(ordenDeCompra.id).then(item => {
                    toast.success(`¡Gracias por su compra! Su número de orden es ${item.id}`);
                    emptyCart();
                    e.target.reset();
                    navigate("/");
                }).catch(error => {
                    toast.error("Ocurrió un error al generar la orden.")
                })
            });
        } else {
            toast.error("Error al validar el email. Por favor, vuelva a intentar."); 
            e.target.reset();
        }
    }

    return (
        <div className="container my-5">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailDos" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="emailDos" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Número telefónico</label>
                    <input type="number" className="form-control" name="celular" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required/>
                </div>
                <button type="submit" className="btn btn-secondary" disabled={carrito.length === 0}>Finalizar compra</button>
            </form>
        </div>
    );
}

export default Checkout;
