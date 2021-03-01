import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import ClienteAxios from "../../config/axios";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  // const listaProyectos = [
  //   { id: 1, nombre: "Api sakura card capture" },
  //   { id: 2, nombre: "Pokedex" },
  //   { id: 3, nombre: "Buscador de peliculas" },
  // ];

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

  const obtenerProyectos = async () => {
    try {
      const response = await ClienteAxios.get("/api/proyectos");
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: response.data.proyectos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProyecto = async (proyecto) => {
    try {
      const response = await ClienteAxios.post("/api/proyectos", proyecto);

      dispatch({
        type: AGREGAR_PROYECTO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  const eliminarProyecto = async (proyectoId) => {
    try {
      await ClienteAxios.delete(`/api/proyectos/${proyectoId}`);

      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId,
      });
    } catch (error) {
      console.log(error);
    }
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
