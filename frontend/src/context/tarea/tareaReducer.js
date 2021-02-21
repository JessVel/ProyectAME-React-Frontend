import { TAREAS_PROYECTO, AGREGAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasProyecto: state.tareas.filter((tarea) => tarea.proyectoId === action.payload),
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case ACTUALIZAR_TAREA:
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((tarea) => (tarea.id === action.payload.id ? action.payload : tarea)),
        tareaSeleccionada: null,
      };
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaSeleccionada: action.payload,
      };
    default:
      return state;
  }
};
