import React, { useState } from 'react';
import './edit.css';

// Definición de la función obtenerUserId
function obtenerUserId() {
  // Aquí deberías implementar la lógica para obtener el ID del usuario
  return 'userId'; // Por ahora, devolveremos un valor de ejemplo
}

function Edit() {
  const [id, setId] = useState('');
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = obtenerUserId(); // Aquí se llama a la función obtenerUserId
      const response = await fetch(`http://localhost:4000/api/usuarios/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, user, username, password, tipo_usuario: tipoUsuario }), // Asegúrate de pasar el tipo_usuario con el nombre correcto
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="user">Nombre:</label>
          <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
          <input type="text" id="tipoUsuario" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default Edit;
