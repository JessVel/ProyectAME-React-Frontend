import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTOS, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return {
        ...state,
        listaProyectos: action.payload,
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        listaProyectos: [...state.listaProyectos, action.payload],
        formulario: false,
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyectoSeleccionado: state.listaProyectos.filter((proyecto) => proyecto.id === action.payload),
      };
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        listaProyectos: state.listaProyectos.filter((proyecto) => proyecto.id !== action.payload),
        proyectoSeleccionado: null,
      };
    default:
      return state;
  }
};
