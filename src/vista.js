import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import pclogo from "./img/pclogo.png"; // Corrected import path for pclogo
import './vista.css'; // Importa los estilos CSS

function Vista({ volverAHome }) {
  // Array para simular la disponibilidad de los cajones (true = ocupado, false = disponible)
  const disponibilidadCajones = [true, false, false, true, false, true, true, false];

  // Duplicamos el array de disponibilidad para agregar los 8 cajones adicionales
  const disponibilidadCajonesDuplicada = [...disponibilidadCajones, ...disponibilidadCajones];

  return (
    <div className="contenedor">
      <header>
        <div className="logo">
        </div>
        <nav>
          <ul>
            <li><Link to="/usuario">Inicio</Link></li>
          </ul>
        </nav>
      </header>

      <div className="area-estacionamiento">
        <div className="fila">
          {disponibilidadCajonesDuplicada.slice(0, 8).map((ocupado, index) => (
            <div key={index} className="cajon">
              <span className={`circulo ${ocupado ? 'ocupado' : 'libre'}`}></span>
              <span className="numero">{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="fila">
          {disponibilidadCajonesDuplicada.slice(8, 16).map((ocupado, index) => (
            <div key={index + 8} className="cajon">
              <span className={`circulo ${ocupado ? 'ocupado' : 'libre'}`}></span>
              <span className="numero">{index + 9}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vista;
