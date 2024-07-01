import CartWidget from "./CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="container">

      <div className="image">
        <img src="image/logo.png " alt="Logo" width={100} />
        <p className="logoP"> VintageClothing</p>
      </div>


      <div className="navbar">
        <ul className="nav justify-content-center ulNavbar" >
          <li className="nav-item liNavbar">
            <a className="nav-link text-black aNavbar" href="#">Novedades</a>
          </li>
          <li className="nav-item liNavbar">
            <a className="nav-link text-black aNavbar" href="#">Rebajas</a>
          </li>
          <li className="nav-item liNavbar">
            <a className="nav-link text-black aNavbar " href="#">Mas Buscado</a>
          </li>
        </ul>

        <div className="carrito">
          <CartWidget />
        </div>
      </div>
    </div>
  )
}

export default NavBar