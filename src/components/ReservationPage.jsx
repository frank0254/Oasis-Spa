import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';  // Importamos el formulario

const ReservationPage = () => {
  // Definimos los detalles de la reserva y calculamos el total
  const [reservation, setReservation] = useState({
    nombre: 'Masaje Relajante',
    fecha: '2025-03-30',
    hora: '14:00',
    duracion: 60,
    precio: 100,  // Precio por sesión, por ejemplo
    cantidad: 1,  // Número de sesiones o cantidad de productos
  });

  // Calculamos el total
  const total = reservation.precio * reservation.cantidad;

  // Función que maneja la confirmación de la reserva
  const handleConfirm = (userData) => {
    console.log('Reserva confirmada:', userData);
    alert('¡Reserva confirmada!');
  };

  // Incluir el total calculado en los datos de la reserva
  return (
    <div>
      <h1>Reserva tu servicio</h1>
      <CheckoutForm 
        reservation={{ ...reservation, total }}  // Pasar el total al formulario
        onConfirm={handleConfirm} 
      />
    </div>
  );
};

export default ReservationPage;
