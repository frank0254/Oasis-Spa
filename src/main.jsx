import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App.jsx';
import { ReservationProvider } from './Context/ReservationContext'; // Importamos el contexto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReservationProvider> {/* Aquí envolvemos la app con el contexto */}
      <App />
    </ReservationProvider>
  </StrictMode>
);
