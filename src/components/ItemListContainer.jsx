import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";

const ItemListContainer = () => {
  const [servicios, setServicios] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const { categoria } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Data/Servicios.json")
      .then((response) => response.json())
      .then((data) => {
        const categoriasUnicas = [...new Set(data.map((servicio) => servicio.categoria))];
        setCategorias(categoriasUnicas);

        if (categoria) {
          setServicios(data.filter((servicio) => servicio.categoria === categoria));
        } else {
          setServicios(data);
        }
      })
      .catch((error) => console.error("Error cargando datos:", error));
  }, [categoria]);

  const handleCategoriaChange = (e) => {
    const nuevaCategoria = e.target.value;
    if (nuevaCategoria) {
      // Corrigiendo el error en la navegación, agregando las comillas
      navigate(`/categoria/${nuevaCategoria}`);
    } else {
      navigate("/servicios");
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
        {servicios.map((servicio) => (
          <ItemCard key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
