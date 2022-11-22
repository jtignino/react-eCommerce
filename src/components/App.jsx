import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import SectionPrincipal from './SectionPrincipal/SectionPrincipal';

const App = () => {
  return (
    <>
      <Navbar/>
      
      {/* <p className='container-xxl text-center mb-5 parrafoUno'>¡Hola, soy Jesi! Mi trabajo es ayudarte a construir una marca que deje huella. Una marca que comunique con pasión y amor. Estamos hechos de emociones, y los negocios también. Por eso ayudo a las empresas a traspasar la pantalla llegando al corazón del público. ¿Para qué? Para que cada persona que te conozca vea más allá de lo que vendés, para que ame tanto tu trabajo que el precio que tenga sea irrelevante para ellos.</p> */}
      <SectionPrincipal/>
      <ItemListContainer greeting={"Este es un 'ItemListContainer'. Acá se visualizarán los productos."}/>
    </>
  );
}

export default App;
