import React from 'react';
import Inicio from './components/Inicio/Inicio';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar/>

      {/* saludo personalizado de inicio */}
      <Inicio
        greeting="¡Bienvenidos a "
        marca="Cubic Store"
        frasefinal=" El lugar con objetos para crear recuerdos."
      />

      <ItemListContainer/>
      <Footer/>
    </>
  )
}

export default App