import React, { useReducer } from "react";
import TareaContext from "../../context/tarea/tareaContext";
import TareaReducer from "../../context/tarea/tareaReducer";
import ClienteAxios from "../../config/axios";
import { TAREAS_PROYECTO, AGREGAR_TAREA, ELIMINAR_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA } from "../../types";

const TareaState = props => {
  const initialState = {
    tareasProyecto: [],
    tareaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = async proyectoId => {
    try {
      const response = await ClienteAxios.get(`/api/tareas/${proyectoId}`);
      dispatch({
        type: TAREAS_PROYECTO,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarTarea = async tarea => {
    try {
      await ClienteAxios.post("/api/tareas", tarea);
      dispatch({
        type: AGREGAR_TAREA,
        payload: tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarTarea = async (id, proyecto) => {
    try {
      await ClienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } });
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const guardarTareaActual = tarea => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = async tarea => {
    try {
      await ClienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TareaContext.Provider
      value={{
        tareasProyecto: state.tareasProyecto,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
