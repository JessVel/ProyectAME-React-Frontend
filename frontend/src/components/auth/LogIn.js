import { useState } from "react";
import {Link} from 'react-router-dom';


const LogIn = () => {
  // State para iniciar sesion
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  // Extraer datos de usuario
  const { usuario, password } = user;

  const onChange = e =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  //iniciar sesion
  const onSubmit = e =>{
    e.preventDefault();
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form
         onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="user">Usuario</label>
            <input type="user" id="user" name="user" placeholder="Ingresa tu usuario" value={usuario} onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChange} />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión" />
          </div>
        </form>

        <Link to={'/singin'} className="enlace-cuenta">Obtener cuenta</Link>
      </div>
    </div>
  );
};

export default LogIn;
