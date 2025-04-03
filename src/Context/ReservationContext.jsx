import { createContext, useContext, useState } from 'react';

// Crear el contexto
const ReservationContext = createContext();

// Crear el provider del contexto
export const ReservationProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  // Función para agregar una reserva
  const agregarReserva = (servicio) => {
    setReservas((prevReservas) => [...prevReservas, servicio]);
  };

  // Función para eliminar una reserva
  const eliminarReserva = (id) => {
    setReservas((prevReservas) => prevReservas.filter((reserva) => reserva.id !== id));
  };

  // Función para limpiar el carrito
  const limpiarReservas = () => {
    setReservas([]);
  };

  return (
    <ReservationContext.Provider value={{ reservas, agregarReserva, eliminarReserva, limpiarReservas }}>
      {children}
    </ReservationContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useReservations = () => {
  return useContext(ReservationContext);
};
