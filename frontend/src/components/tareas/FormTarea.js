import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tarea/tareaContext";
import Swal from "sweetalert2";

const FormTarea = () => {
  const { proyectoSeleccionado } = useContext(proyectoContext);

  const { agregarTarea, obtenerTareas, tareaSeleccionada, actualizarTarea } = useContext(tareaContext);

  const [tarea, setTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTarea(tareaSeleccionada);
    } else {
      setTarea({
        nombre: "",
      });
    }
  }, [tareaSeleccionada]);

  if (!proyectoSeleccionado) {
    return null;
  }

  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!nombre) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre es obligatorio",
      });
      return;
    }

    if (tareaSeleccionada === null) {
      tarea.proyecto = proyectoSeleccionado[0]._id;
      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea);
      Swal.fire("Listo!", "Se actualizó la tarea", "success");
    }

    obtenerTareas(proyectoSeleccionado[0]._id);

    setTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input type="text" className="input-text" placeholder="Nombre Tarea..." name="nombre" value={nombre} onChange={handleChange} />
        </div>

        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-block" value={tareaSeleccionada ? "Editar tarea" : "Agregar tarea"} />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
