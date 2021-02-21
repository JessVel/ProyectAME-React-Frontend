import React, { useReducer } from "react";
import TareaContext from "../../context/tarea/tareaContext";
import TareaReducer from "../../context/tarea/tareaReducer";
import { v4 as uuidv4 } from "uuid";
import { TAREAS_PROYECTO, AGREGAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 0, nombre: "Elegir colores", estado: true, proyectoId: 1 },
      { id: 1, nombre: "Elegir hosting", estado: false, proyectoId: 2 },
      { id: 2, nombre: "Armar diseño en figma", estado: false, proyectoId: 3 },
      { id: 3, nombre: "Elegir colores", estado: true, proyectoId: 3 },
      { id: 4, nombre: "Elegir hosting", estado: false, proyectoId: 2 },
      { id: 5, nombre: "Armar diseño en figma", estado: false, proyectoId: 1 },
      { id: 6, nombre: "Elegir colores", estado: true, proyectoId: 3 },
      { id: 7, nombre: "Elegir hosting", estado: false, proyectoId: 1 },
      { id: 8, nombre: "Armar diseño en figma", estado: false, proyectoId: 2 },
    ],
    tareasProyecto: null,
    tareaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
