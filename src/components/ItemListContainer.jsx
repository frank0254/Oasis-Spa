import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";  // Importamos la configuración de Firebase
import ItemCard from "./ItemCard"; // Asegúrate de importar el componente ItemCard

const ItemListContainer = () => {
  const [servicios, setServicios] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const { categoria } = useParams(); // Obtén la categoría desde la URL
  const navigate = useNavigate();

  useEffect(() => {
    const getServicios = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Items"));  // Cambié "servicios" por "Items"
        console.log("Snapshot de Firestore:", querySnapshot); // Verifica que tienes un snapshot
         
        const serviciosArray = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        console.log("Servicios obtenidos:", serviciosArray); // Verifica los servicios obtenidos

        // Filtrar los servicios si hay una categoría seleccionada
        const serviciosFiltrados = categoria 
          ? serviciosArray.filter(servicio => servicio.categoria === categoria)
          : serviciosArray;

        setServicios(serviciosFiltrados);

        // Extraemos las categorías únicas para el filtro
        const categoriasUnicas = [...new Set(serviciosArray.map(servicio => servicio.categoria))];
        setCategorias(categoriasUnicas);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };

    getServicios();
  }, [categoria]);

  const handleCategoriaChange = (e) => {
    const nuevaCategoria = e.target.value;
    if (nuevaCategoria) {
      navigate(`/categoria/${nuevaCategoria}`); // Navegamos con la nueva categoría
    } else {
      navigate("/servicios"); // Si no seleccionamos categoría, mostramos todos los servicios
    }
  };

  return (
    <div>
      <h2>Servicios de Spa</h2>

      <select onChange={handleCategoriaChange} value={categoria || ""}>
        <option value="">Todos los Servicios</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <div className="row">
        {servicios.length > 0 ? (
          servicios.map((servicio) => (
            <ItemCard key={servicio.id} servicio={servicio} />
          ))
        ) : (
          <p>No hay servicios disponibles para esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
