import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import AcercaDe from "./components/AcercaDe";
import Contacto from "./components/Contacto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div className="home-container text-center">
            <img src="/Data/foto de portada.jpeg" alt="Spa Oasis" className="home-banner" />
            <div className="home-text">
              <h1>Bienvenidos a Spa Oasis </h1>
              <p>Disfruta de un momento de paz y bienestar con nuestros exclusivos servicios.</p>
              <a href="/servicios" className="btn btn-primary mt-3">Explorar Servicios</a>
            </div>
          </div>
        } />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<ItemListContainer />} />
        <Route path="/servicio/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/formulario" element={<CheckoutForm onConfirm={(data) => console.log(data)} />} />
        <Route path="*" element={<h2>Error 404: Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
