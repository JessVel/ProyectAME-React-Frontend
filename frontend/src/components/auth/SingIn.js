import { useState, useContext } from "react";
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';

const SingIn = () => {

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;



  // State para iniciar sesion
  const [user, setUser] = useState({
    name:'',
    email:'',
    password: "",
    confirm:'',
    token:''
  });

  // Extraer datos de usuario
  const { name, email, password, confirm } = user;

  const onChange = e =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  //iniciar sesion
  const onSubmit = e =>{
    e.preventDefault();

    if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === ''){
      
      showAlert('Todos los campos son obligatios', 'alerta-error')
    }
  }



  
  return (
    <div className="form-usuario">
      {alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        <form
         onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="user">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" value={name} onChange={onChange} />
          </div>

          
          <div className="campo-form">
            <label htmlFor="password">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Ingresa tu e-mail" value={email} onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar contraseña</label>
            <input type="password" id="confirmar" name="confirm" placeholder="Confirma tu contraseña" value={confirm} onChange={onChange} />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default SingIn;
