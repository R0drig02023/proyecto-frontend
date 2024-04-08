import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import './Register.css';

import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory

function Register() {
  const [id, setId] = useState('');
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//  const [tipo_usuario, settipo_usuario] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, user, username, password }),
      });

      if (response.ok) {
        console.log('Registration successful');
        // Redirecciona al usuario a la página de inicio después del registro exitoso
        navigate('/home'); // Utiliza navigate en lugar de history.push
      } else {
        const errorMessage = await response.text();
        setError(errorMessage || 'Error al registrarse');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error de conexión');
    }
  };

  return (
    <Container className="register-container">
      <div className="register-box">
        <h2>Registrarse</h2>
        <Form>
          <Form.Group controlId="formId">
            <Form.Control type="text" placeholder="Matricula" value={id} onChange={(e) => setId(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formUser">
            <Form.Control type="text" placeholder="Nombre" value={user} onChange={(e) => setUser(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Control type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={handleRegister}>
            Registrarse
          </Button>
          {error && <p>{error}</p>}
        </Form>
      </div>
    </Container>
  );
}

export default Register;
