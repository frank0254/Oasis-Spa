import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useReservations } from "../Context/ReservationContext";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { db } from "../firebase";  // Importamos Firebase para obtener los datos
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtenemos el ID del servicio
  const { agregarReserva } = useReservations();
  const navigate = useNavigate();
  const [servicio, setServicio] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  
  useEffect(() => {
    const getServicio = async () => {
      try {
        const docRef = doc(db, "Items", id);  // Cambié "servicios" por "Items"
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setServicio(docSnap.data());
        } else {
          console.log("No se encontró el servicio");
        }
      } catch (error) {
        console.error("Error al obtener el servicio:", error);
      }
    };

    getServicio();
  }, [id]);

  const agregarReservaHandler = (cantidad) => {
    if (!fechaSeleccionada || !horarioSeleccionado) {
      alert("Por favor, selecciona una fecha y horario.");
      return;
    }
    const nuevaReserva = {
      id: servicio.id,
      fecha: fechaSeleccionada,
      horario: horarioSeleccionado,
      cantidad,
      nombre: servicio.nombre,
      precio: servicio.precio,
    };

    agregarReserva(nuevaReserva);
    navigate("/cart");
  };

  const horariosDisponibles = (fecha) => {
    const horariosDelDia = [
      "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
    ];
    return horariosDelDia;
  };

  if (!servicio) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle del Servicio</h2>
      <div className="d-flex align-items-center">
        <img src={servicio.imagen} alt={servicio.nombre} style={{ width: '150px', marginRight: '20px' }} />
        <div>
          <h3>{servicio.nombre}</h3>
          <p>{servicio.descripcion}</p>
          <p>Precio: ${servicio.precio}</p>
          <p>Duración: {servicio.duracion} minutos</p>
        </div>
      </div>

      <h4>Selecciona una fecha:</h4>
      <Calendar
        onChange={setFechaSeleccionada}
        value={fechaSeleccionada ? new Date(fechaSeleccionada) : new Date()}
        minDate={new Date()}
      />

      {fechaSeleccionada && (
        <div>
          <h4>Selecciona un horario:</h4>
          {horariosDisponibles(fechaSeleccionada).map((horario, index) => (
            <button
              key={index}
              onClick={() => setHorarioSeleccionado(horario)}
              className={`btn ${horario === horarioSeleccionado ? 'btn-success' : 'btn-outline-primary'} m-2`}
            >
              {horario}
            </button>
          ))}
        </div>
      )}

      <button onClick={() => agregarReservaHandler(1)} className="btn btn-primary mt-3">Reservar</button>
    </div>
  );
};

export default ItemDetailContainer;
