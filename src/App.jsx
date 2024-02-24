import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Inicio from './components/Pages/Inicio/Inicio';
import Resolucion from './components/Pages/Resolucion/Resolucion';
import Contacto from './components/Pages/Contacto/Contacto';
import Productos from './components/Pages/Productos/Productos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import NotFound from './components/Pages/NotFound/NotFound'; */

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/resolucion" element={<Resolucion/>}/>
          <Route path="/productos" element={<Productos/>} />
          <Route path="/contacto" element={<Contacto/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App