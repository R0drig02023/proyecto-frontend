import React, { useState, useEffect } from 'react';
import './tablas.css';

function Tablas() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/usuarios');
      if (response.ok) {
        const data = await response.json();
        setUsuarios(data);
      } else {
        console.error('Error al obtener usuarios:', response.statusText);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  const handleEliminarUsuario = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/usuarios/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Usuario eliminado correctamente');
        // Actualizar la lista de usuarios después de eliminar uno
        fetchUsuarios();
      } else {
        console.error('Error al eliminar usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.user}</td>
              <td>{usuario.username}</td>
              <td>{usuario.password}</td>
              <td>
                <button onClick={() => handleEliminarUsuario(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablas;
