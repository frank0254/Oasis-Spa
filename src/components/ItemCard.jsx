import { Link } from "react-router-dom";

const ItemCard = ({ servicio }) => {
  return (
    <div className="col-md-4">
      <div className="card my-3">
        {/* Aquí usamos la ruta de la imagen de Firebase directamente desde public/data/ */}
        <img
          src={`/data/${servicio.imagen}`} // Esto debería acceder correctamente a la carpeta public/data/
          className="card-img-top"
          alt={servicio.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{servicio.nombre}</h5>
          <p className="card-text">{servicio.descripcion}</p>
          <p className="card-text">Precio: ${servicio.precio}</p>
          <Link to={`/servicio/${servicio.id}`} className="btn btn-primary">
            Mostrar Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
