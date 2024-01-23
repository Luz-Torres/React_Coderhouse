import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer
        greeting="¡Bienvenidos a "
        marca="Cubic Store"
        frasefinal=" El lugar con objetos para crear recuerdos."
      />

      <Item
        img='public/productos/qiyi-megaminx.png'
        name='Megaminx 3x3'
        price={10000}
        brand='Qiyi'
        description='lalalalalalalal'
      />

      <Item
        img='public/productos/time-2x2.png'
        name='Time Machine 2x2'
        price={16000}
        description='lalalalalalalal'
      />

      <Item
        img='public/productos/qiyi-warrior3x3.png'
        name='Warrior 3x3'
        price={16000}
        brand='Qiyi'
        description='lalalalalalalal'
      />

      <Item
        img='public/productos/qiyi-pyraminx.png'
        name='Pyraminx'
        price={8000}
        brand='Qiyi'
        description='lalalalalalalal'
      />

      <Item
        img='public/productos/sidgman-fisher-brick-wall.png'
        name='Sidgman 2x4x6 Fisher Brick Wall'
        price={18000}
        brand='Calvins Puzzle'
        description='Es un 2x4x6 fisher pero en su estado resuelto las piezas de las capas centrales están desfasadas, debido a esto hay que realizar unos giros previos para desbloquear todos los giros'
      />

      <Footer/>
    </>
  )
}

export default App