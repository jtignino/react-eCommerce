import './CardTitulo.css';

const CardTitulo = () => {
    return (
        <div className='d-flex flex-column'>
            <h1 className='text-white titulo'>Piensa Digital</h1>
            <h2 className='text-white subtitulo'>Publicidad & Marketing Digital.</h2>
            <p className='text-white text-left my-4 parrafoUno'>¡Hola, soy Jesi! Mi trabajo es ayudarte a construir una marca que deje huella. Una marca que comunique con pasión y amor. Estamos hechos de emociones, y los negocios también. Por eso ayudo a las empresas a traspasar la pantalla llegando al corazón del público. ¿Para qué? Para que cada persona que te conozca vea más allá de lo que vendés, para que ame tanto tu trabajo que el precio que tenga sea irrelevante para ellos.</p>
            <button type="button" className='btn btn-outline-light boton my-2'>¿Trabajamos juntos?</button>
        </div>
    );
}

export default CardTitulo;
