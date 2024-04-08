import React from "react";
import './acerca.css'; // Importar estilos CSS

function Acerca() {
  return (
    <div className="acerca-container">
      <header className="acerca-header">
        <h1 className="acerca-title">¡Bienvenido a DARA!</h1>
        <p className="acerca-subtitle">Solucionando el problema de encontrar estacionamiento</p>
      </header>

      <main className="acerca-main">
        <section className="acerca-section">
          <h2 className="acerca-section-title">El problema</h2>
          <p className="acerca-section-text">
            Encontrar estacionamiento puede ser una tarea frustrante y consumir mucho tiempo. Con el crecimiento de las ciudades, la falta de espacios de estacionamiento disponibles se ha convertido en un problema común, lo que lleva a estrés, pérdida de tiempo y contaminación.
          </p>
        </section>

        <section className="acerca-section">
          <h2 className="acerca-section-title">Nuestra solución</h2>
          <p className="acerca-section-text">
            DARA ofrece una solución innovadora para este problema. Utilizamos sensores de movimiento instalados en los estacionamientos para detectar la disponibilidad de espacios en tiempo real. Estos datos se integran en nuestra aplicación, que muestra a los usuarios dónde pueden encontrar estacionamiento de manera rápida y conveniente.
          </p>
        </section>
      </main>

      <footer className="acerca-footer">
        <p className="acerca-footer-text">¡Únete a nosotros para simplificar tu experiencia de estacionamiento!</p>
      </footer>
    </div>
  );
}

export default Acerca;
