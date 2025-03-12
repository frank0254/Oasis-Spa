import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Bienvenidos a SPA Relax</h2>} />
        <Route path="/acerca" element={<h2>Acerca</h2>} />
        <Route path="/servicios" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/servicio/:id" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<h2>Contacto</h2>} />
        <Route path="*" element={<h2>Error 404: Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;