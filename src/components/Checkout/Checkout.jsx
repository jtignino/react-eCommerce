import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const datosFormulario = React.useRef();
    let navigate = useNavigate();
    const consultarFormulario = (e) => {
        e.preventDefault();
        console.log(datosFormulario);
        const datForm = new FormData(datosFormulario.current);
        console.log(datForm);
        const cliente = Object.fromEntries(datForm);
        console.log(cliente);
        console.log(cliente.email);
        if (cliente.email === cliente.emailDos) {
            console.log("bien!");
            e.target.reset();
            navigate("/");
        } else {
            console.log("mal!"); 
        }
        
    }

    return (
        <div className="container mb-5">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailDos" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="emailDos" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-secondary">Finalizar compra</button>
            </form>
        </div>
    );
}

export default Checkout;
