import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContextProvider from './components/context/CartContext'
import Cart from './components/cart'
import Cheeckout from './components/Checkout'
import Error404 from './components/Error404'

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Cheeckout />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
