import React, { useContext, useEffect } from "react";
import authContext from "../../context/authentication/authContext";

const Barra = () => {
  const { user, authenticUser, cerrarSesion } = useContext(authContext);

  useEffect(() => {
    authenticUser();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hola, <span>{user.user}</span>👋
        </p>
      ) : null}
      <nav className="nav-principal">
        <button onClick={() => cerrarSesion()}>Cerrar sesión</button>
      </nav>
    </header>
  );
};

export default Barra;
