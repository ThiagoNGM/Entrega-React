import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="containerNavbar">
      <Link to="/">
        <div className="image">
          <img src="/image/logo.png" alt="Logo" width={100} />
          <p className="logoP">VintageClothing</p>
        </div>
      </Link>
      <div className="navbar">
        <ul className="nav justify-content-center ulNavbar">
          <li className="nav-item liNavbar">
            <NavLink to="/category/Nuevo" className="nav-link text-black aNavbar">Nuevo</NavLink>
          </li>
          <li className="nav-item liNavbar">
            <NavLink to="/category/Rebajas" className="nav-link text-black aNavbar">Rebajas</NavLink>
          </li>
          <li className="nav-item liNavbar">
            <NavLink to="/category/MasBuscado" className="nav-link text-black aNavbar">Más Buscado</NavLink>
          </li>
        </ul>
        <div className="carrito">
          <CartWidget />
        </div>
      </div>
    </div>
  );
}

export default NavBar;