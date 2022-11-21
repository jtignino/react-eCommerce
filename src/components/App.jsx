import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar/>
      <h1 className='container-xxl w-100 my-4 text-center fs-3 pb-4'>¡Hola, soy Jesi!</h1>
      <p className='container-xxl text-center mb-5'>Mi trabajo es ayudarte a construir una marca que deje huella. Una marca que comunique con pasión y amor. Estamos hechos de emociones, y los negocios también. Por eso ayudo a las empresas a traspasar la pantalla llegando al corazón del público. ¿Para qué? Para que cada persona que te conozca vea más allá de lo que vendés, para que ame tanto tu trabajo que el precio que tenga sea irrelevante para ellos. </p>
      <ItemListContainer greeting={"Este es un 'ItemListContainer'. Acá se visualizarán los productos."}/>
    </>
  );
}

export default App;
