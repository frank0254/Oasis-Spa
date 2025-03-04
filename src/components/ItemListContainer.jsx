import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";  // Asegúrate de que este componente esté importado correctamente

const ItemListContainer = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("/Data/Servicios.json")
      .then((response) => response.json())
      .then((data) => setServicios(data))
      .catch((error) => console.error("Error cargando datos:", error));
  }, []);

  return (
    <div>
      <h2>Servicios de Spa</h2>
      <div className="row">
        {servicios.map((servicio) => (
          <ItemCard key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
