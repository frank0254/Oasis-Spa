import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    fetch("/Data/Servicios.json")
      .then(response => response.json())
      .then(data => setServicio(data.find(serv => serv.id === parseInt(id))))
      .catch(error => console.error("Error cargando detalles:", error));
  }, [id]);

  return servicio ? (
    <div className="container">
      <h2>{servicio.nombre}</h2>
      <img src={servicio.imagen} alt={servicio.nombre} style={{ width: "200px" }} />
      <p>{servicio.descripcion}</p>
      <p>Precio: ${servicio.precio}</p>
      <button className="btn btn-success">Reservar Servicio</button>
    </div>
  ) : <p>Cargando...</p>;
};

export default ItemDetailContainer;