import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";

import AniWelcome from "../animation/animationWelcome";
import Swal from "sweetalert2";

const LogIn = props => {
  const { message, authentication, logInUser } = useContext(AuthContext);

  const { alert, showAlert } = useContext(AlertContext);

  //toma errores de validacion de usuario
  useEffect(() => {
    if (authentication) {
      props.history.push("/home");
      Swal.fire("Bienvenido 😄", `Te extrañamos, ${user}!`, "success");
    }
    if (message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message.msg,
      });
    }
    // eslint-disable-next-line
  }, [authentication, message, props.history]);

  // State para iniciar sesion
  const [userValues, setUserValues] = useState({
    user: "",
    password: "",
  });

  // Extraer datos de usuario
  const { user, password } = userValues;

  const onChange = e => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  //iniciar sesion
  const onSubmit = e => {
    e.preventDefault();

    if (user.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    logInUser({ user, password });
  };

  return (
    <div className="form-usuario">
      <AniWelcome />
      {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="user">Usuario</label>
            <input className="input-focus" type="user" id="user" name="user" placeholder="Ingresa tu usuario" value={user} onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input className="input-focus" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChange} />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión" />
          </div>
        </form>

        <Link to={"/singin"} className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
