import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Swal from "sweetalert2";

const NuevoProyecto = () => {
  const { formulario, mostrarFormulario, agregarProyecto } = useContext(proyectoContext);

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const handleChange = e => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (nombre === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre es obligatorio",
      });
    }

    agregarProyecto(proyecto);

    setProyecto({
      nombre: "",
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => {
          mostrarFormulario();
        }}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto">
          <input type="text" className="input-text" name="nombre" placeholder="Nombre Proyecto" value={nombre} onChange={handleChange} />

          <input type="submit" className="btn btn-primario btn-block" value="Agregar proyecto" onClick={handleSubmit} />
        </form>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
