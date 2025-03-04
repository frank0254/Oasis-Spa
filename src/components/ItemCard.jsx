import { Link } from "react-router-dom";

const ItemCard = ({ servicio }) => {
  return (
    <div className="col-md-4">
      <div className="card my-3">
        {}
        <img
          src={servicio.imagen}
          className="card-img-top"
          alt={servicio.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{servicio.nombre}</h5>
          <p className="card-text">Precio: ${servicio.precio}</p>
          <Link to={`/servicio/${servicio.id}`} className="btn btn-primary">
            Mostrar Detalle
          </Link>
          <button className="btn btn-success ms-2">
            Reservar Servicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
