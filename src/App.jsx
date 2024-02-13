import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Inicio from './components/Inicio/Inicio';
import Resolucion from './components/Resolucion/Resolucion';
import Contacto from './components/Contacto/Contacto';
import Productos from './components/Productos/Productos';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Inicio/>}/>
        <Route path="/resolucion" element={<Resolucion/>}/>
        <Route path="/productos" element={<Productos/>} />
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App