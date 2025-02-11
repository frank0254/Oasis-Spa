import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <div>
      <NavBar />
      <ItemListContainer mensaje="✨ Bienvenido a SpA Bienestar, tu lugar de relajación ✨" />
    </div>

    </>
  )
}

export default App
