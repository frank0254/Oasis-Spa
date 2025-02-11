import CartWidget from "./CartWidget";
import logo from "../assets/logotipo.jpg"; // Asegúrate de que la ruta sea correcta

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Oasis SpA Logo" width="90" height="90" className="me-2" />
          <h1 className="fw-bold fs-4 mb-0">Oasis Sahar</h1>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Acerca de</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;