import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from '../assets/logotipo.jpg'; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo Spa Oasis"
            style={{ width: '30px', marginRight: '10px' }}
          />
          Spa Oasis
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
              <NavLink className="nav-link" to="/acerca">Acerca</NavLink> {/* Ruta a Acerca */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Contacto</NavLink> {/* Ruta a Contacto */}
            </li>
          </ul>
        </div>
        <CartWidget /> 
      </div>
    </nav>
  );
};

export default NavBar;
