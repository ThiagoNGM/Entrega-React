import { useState } from 'react'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto={"Nuestra tienda de ropa vintage ofrece una selección exquisita de prendas y accesorios únicos, cuidadosamente seleccionados de diferentes décadas para satisfacer a los amantes de la moda clásica y singular."} />
    </>
  )
}

export default App
