import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservations } from "../Context/ReservationContext";

const Cart = () => {
  const { reservas, eliminarReserva, limpiarReservas } = useReservations();
  const navigate = useNavigate();

  if (reservas.length === 0) {
    return <p className="text-center">Tu carrito está vacío.</p>;
  }

  const handleConfirmarReserva = () => {
    navigate('/formulario', { state: { reservas } });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tu Carrito de Reservas</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Servicio</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva, index) => (
              <tr key={reserva.id || index}>
                <td>{reserva.nombre}</td>
                <td>{new Date(reserva.fecha).toLocaleDateString()}</td>
                <td>{reserva.horario}</td>
                <td>{reserva.cantidad}</td>
                <td>${reserva.precio * reserva.cantidad}</td>
                <td>
                  <button 
                    onClick={() => eliminarReserva(reserva.id)} 
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button 
          onClick={limpiarReservas} 
          className="btn btn-warning"
        >
          Limpiar Carrito
        </button>

        <div className="h4">
          <strong>Total: </strong>
          ${reservas.reduce((total, reserva) => total + reserva.precio * reserva.cantidad, 0)}
        </div>

        <button 
          onClick={handleConfirmarReserva}
          className="btn btn-primary"
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default Cart;
