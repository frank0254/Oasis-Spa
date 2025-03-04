import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";  // Asegúrate de tener el componente del carrito
import logo from '../assets/logotipo.jpg';  // Ruta de tu logo

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo SPA Relax"
            style={{ width: '30px', marginRight: '10px' }}
          />
          SPA Relax
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/acerca">Acerca</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
        <CartWidget /> {/* Aquí va el ícono o widget de carrito */}
      </div>
    </nav>
  );
};

export default NavBar;
