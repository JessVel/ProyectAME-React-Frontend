import { REGISTER_SUCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authentication: true,
        message: null,
        user: action.payload,
        cargando: false,
      };

    case GET_USER:
      return {
        ...state,
        authentication: true,
        user: action.payload,
        cargando: false,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authentication: null,
        cargando: false,
      };

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authentication: null,
        message: action.payload,
        cargando: false,
      };
    default:
      return state;
  }
};
