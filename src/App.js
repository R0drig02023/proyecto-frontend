import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import './App.css';
import Home from './Home';
import Register from './Register';
import Tablas from './tablas';
import Edit from './edit';
import Invitado from './invitado';
import Usuario from './usuario';
import Acerca from './acerca';
import Vista from './vista'; // Importa el componente Vista

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Aquí puedes añadir tus elementos de navegación si es necesario */}
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tablas" element={<Tablas />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={<Login />} />
          <Route path="/invitado" element={<Invitado />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/vista" element={<Vista />} /> {/* Ruta para el componente Vista */}
        </Routes>
      </div>
    </Router>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Obtener el tipo de usuario desde la respuesta
        const tipoUsuario = data.tipo_usuario;
        // Redireccionar según el tipo de usuario
        switch (tipoUsuario) {
          case 1:
            navigate('/invitado'); // Redirigir a la página de Invitado
            break;
          case 2:
            navigate('/usuario'); // Redirigir a la página de Usuario
            break;
          case 3:
            navigate('/home'); // Redirigir a la página de Home para el administrador
            break;
          default:
            setError('Tipo de usuario no válido');
            break;
        }
      } else {
        const errorMessage = await response.text();
        setError(errorMessage || 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error de conexión');
    }
  };

  return (
    <Container className="login-container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Control type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin}>
            Iniciar sesión
          </Button>
          {error && <p>{error}</p>}
        </Form>
      </div>
    </Container>
  );
}

export default App;
