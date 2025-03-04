import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const servicios = [
  { id: 1, nombre: "Masaje Relajante", categoria: "relajante", precio: 5000, descripcion: "Un masaje suave para relajar el cuerpo y la mente." },
  { id: 2, nombre: "Masaje Descontracturante", categoria: "terapeutico", precio: 7000, descripcion: "Ideal para aliviar tensiones musculares." }
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(servicios.find(serv => serv.id === parseInt(id)));
      }, 1000);
    }).then((res) => setServicio(res));
  }, [id]);

  return servicio ? (
    <div className="container">
      <h2>{servicio.nombre}</h2>
      <p>{servicio.descripcion}</p>
      <p>Precio: ${servicio.precio}</p>
      <button className="btn btn-success">Reservar Servicio</button>
    </div>
  ) : <p>Cargando...</p>;
};

export default ItemDetailContainer;