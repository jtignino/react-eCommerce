import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { CarritoProvider } from './context/CarritoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>.
    <CarritoProvider>
      <App />
    </CarritoProvider>
    
  </React.StrictMode>
);

// el modo estricto me ejecuta dos veces, una es de prueba y la otra es la ejecución normal