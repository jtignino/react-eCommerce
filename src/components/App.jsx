import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import SectionPrincipal from './SectionPrincipal/SectionPrincipal';

const App = () => {
  return (
    <>
      <Navbar/>
      <SectionPrincipal/>
      <ItemListContainer greeting={"Este es un 'ItemListContainer' vacío. Acá se visualizarán los productos."}/>
    </>
  );
}

export default App;
