import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutForm = ({ onConfirm }) => {
  const location = useLocation();
  const { reservas } = location.state || {};

  if (!reservas || reservas.length === 0) {
    return <h2>No hay reservas en tu carrito.</h2>;
  }

  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    fecha: reservas[0].fecha,
    hora: reservas[0].horario,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ ...userData, reservas });
  };

  return (
    <div className="container">
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            value={userData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="form-control"
            value={userData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            className="form-control"
            value={userData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            className="form-control"
            value={userData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Confirmar Reserva</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
