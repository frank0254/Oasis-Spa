import React from 'react';
import trayectoria from '../assets/trayectoria.jpeg'; // Ajusta la ruta de la imagen
import equipo from '../assets/equipo.jpeg'; 

const AcercaDe = () => {
  return (
    <div className="acerca-container container mt-5">
      <h2 className="text-center mb-4">Acerca de Spa Oasis</h2>

      <div className="acerca-row">
        {/* Columna de la imagen */}
        <div className="col-md-4">
          <img 
            src={trayectoria}  // Asegúrate de que la ruta esté bien
            alt="Trayectoria Spa Oasis"
            className="acerca-img img-fluid" 
          />
        </div>

        {/* Columna del texto */}
        <div className="col-md-6">
          <h5 className="acerca-title">Nuestra Trayectoria</h5>
          <p className="acerca-text">
            En Spa Oasis, con más de 10 años de experiencia, nos dedicamos a ofrecer los mejores servicios de relajación,
            masajes terapéuticos y bienestar. Nuestro equipo altamente capacitado se compromete a brindarte una experiencia
            única y rejuvenecedora. Nos enfocamos en ofrecerte una experiencia personalizada, adaptada a tus necesidades y gustos. En SPA Relax,
            cada detalle está pensado para ofrecerte un ambiente relajante y exclusivo. ¡Tu bienestar es nuestra prioridad!
          </p>
        </div>
      </div>

      <div className="acerca-row">
        {/* Columna de la imagen */}
        <div className="col-md-4">
          <img 
            src={equipo}  // Asegúrate de que la ruta esté bien
            alt="Equipo Spa Oasis"
            className="acerca-img img-fluid" 
          />
        </div>

        {/* Columna del texto */}
        <div className="col-md-6">
          <h5 className="acerca-title">Nuestro Equipo</h5>
          <p className="acerca-text">
            Nuestro equipo de profesionales está altamente capacitado en técnicas de relajación y bienestar. Nos apasiona lo
            que hacemos y buscamos siempre ofrecerte la mejor experiencia.  Ofrecemos una variedad de tratamientos exclusivos, desde masajes relajantes hasta terapias para aliviar el estrés
            y mejorar tu bienestar. Todos nuestros servicios están diseñados para brindarte una experiencia única.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
