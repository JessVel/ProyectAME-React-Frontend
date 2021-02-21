import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { v4 as uuidv4 } from "uuid";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  const listaProyectos = [
    { id: 1, nombre: "Api sakura card capture" },
    { id: 2, nombre: "Pokedex" },
    { id: 3, nombre: "Buscador de peliculas" },
  ];

  const initialState = {
    listaProyectos: [],
    formulario: false,
    proyectoSeleccionado: null,
  };

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: listaProyectos,
    });
  };

  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        listaProyectos: state.listaProyectos,
        formulario: state.formulario,
        proyectoSeleccionado: state.proyectoSeleccionado,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
