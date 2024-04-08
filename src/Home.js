import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import pclogo from "./img/pclogo.png"; // Corrected import path for pclogo


function Home() {
  const handleOpenApp = () => {
    window.location.href = 'intent://open/temp_hum#Intent;scheme=myapp;end';
  };

  return (
    <div className="home-container">
      <header>
        <div className="logo">
          <img src={pclogo} alt="Logo de la aplicación" /> {/* Use pclogo variable */}
        </div>
        <nav>
          <ul>
            <li><Link to="/">cerrar secion</Link></li>
            <li><Link to="/tablas">tablas</Link></li>
            <li><Link to="/edit">editar</Link></li>
            <li><Link to="/acerca">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2 className="home-title">Encuentra el estacionamiento perfecto</h2>
        <p className="subtitle">Encuentra y reserva estacionamientos en cualquier momento y en cualquier lugar</p>
        {/* Utiliza Link para redirigir a Vista.js */}
        <Link to="/vista" className="button-open-app">Ver Estacionamientos Disponibles</Link>
        <div className="image-container">
          <img src="https://t4.ftcdn.net/jpg/05/01/09/53/360_F_501095306_ULHfm6QpHhuLkZUbBxOIduV8Jbn0sTyC.jpg" alt="Estacionamiento" />
        </div>
      </main>
      <footer>
        <p>Derechos de autor © 2024 App de Estacionamiento. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;

