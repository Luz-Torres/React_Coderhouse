import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailContainer';
import Inicio from './components/Pages/Inicio/Inicio';
import Resolucion from './components/Pages/Resolucion/Resolucion';
import Contacto from './components/Pages/Contacto/Contacto';
import Productos from './components/Pages/Productos/Productos';
import { CartProvider } from './context/context';
import Cart from './components/Cart/Cart';
import NotFound from './components/Pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/resolucion" element={<Resolucion/>}/>
          <Route path="/productos" element={<Productos/>} />
          <Route path='/productos/:id' element={<ItemDetailConteiner />} />
          {/* <Route path="/productos/:category/2x2" element={<Productos/>} />
          <Route path="/productos/:category/3x3" element={<Productos/>} />
          <Route path="/productos/:category/minx" element={<Productos/>} />
          <Route path="/productos/:category/otros" element={<Productos/>} /> */}
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App