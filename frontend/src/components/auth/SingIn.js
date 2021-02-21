import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";

import Swal from "sweetalert2";
import Animation from "../animation/animation";

const SingIn = (props) => {
  const { alert, showAlert } = useContext(AlertContext);

  const authContext = useContext(AuthContext);
  const { message, authentication, registerUser } = authContext;

  const handleChange = useEffect(() => {
    if (authentication) {
      props.history.push("/home");
      Swal.fire("Usuario creado con éxito!", "Muchas gracias por registrarte con nosotros", "success");
    }

    if (message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message.msg,
      });
    }
  }, [message, authentication, props.history]);

  // State para iniciar sesion
  const [usuario, setUsuario] = useState({
    user: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    es_admin: "F",
    confirm: "",
    token: "",
  });

  // Extraer datos de usuario
  const { user, name, lastname, email, password, token, confirm } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    if (user.trim() === "" || name.trim() === "" || lastname.trim() === "" || email.trim() === "" || password.trim() === "" || confirm.trim() === "") {
      showAlert("Todos los campos son obligatios", "alerta-error");
      return;
    }

    if (password.length < 6) {
      showAlert("La contraseña debe tener al menos 6 caracteres", "alerta-error");
      return;
    }

    if (password.length === 6 && confirm.length === 6 && password !== confirm) {
      showAlert("Las contraseñas deben ser iguales", "alerta-error");
      return;
    }

    registerUser({ user, name, lastname, email, password });
  };

  return (
    <>
      <div className="form-usuario reverse">
        <Animation />
        {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
        <div className="contenedor-form sombra-dark">
          <h1 className="singin-titulo">Obtener una cuenta</h1>
          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="user">usuario</label>
              <input className="input-focus" type="text" id="user" name="user" placeholder="Ingresa tu usuario" value={user} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="user">Nombre</label>
              <input className="input-focus" type="text" id="name" name="name" placeholder="Ingresa tu nombre" value={name} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="user">Apellido</label>
              <input className="input-focus" type="text" id="lastname" name="lastname" placeholder="Ingresa tu apellido" value={lastname} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="password">E-mail</label>
              <input className="input-focus" type="email" id="email" name="email" placeholder="Ingresa tu e-mail" value={email} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Contraseña</label>
              <input className="input-focus" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="confirmar">Confirmar contraseña</label>
              <input className="input-focus" type="password" id="confirmar" name="confirm" placeholder="Confirma tu contraseña" value={confirm} onChange={onChange} />
            </div>

            <div className="campo-form">
              <input type="submit" className="btn btn-primario btn-block" value="Registrarme" onClick={handleChange} />
            </div>
          </form>

          <Link to={"/"} className="enlace-cuenta">
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingIn;
