import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import SectionPrincipal from './SectionPrincipal/SectionPrincipal';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <SectionPrincipal/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>  
          <Route path='/category/:category' element={<ItemListContainer/>}/>  
        </Routes>
        
      </BrowserRouter>  
    </>
  );
}

export default App;
