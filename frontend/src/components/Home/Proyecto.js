import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tarea/tareaContext";

const Proyecto = ({ item }) => {
  const { proyectoActual } = useContext(proyectoContext);
  const { obtenerTareas } = useContext(tareaContext);

  const seleccionarProyecto = (id) => {
    proyectoActual(id);
    obtenerTareas(id);
  };
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={() => seleccionarProyecto(item._id)}>
        {item.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
