import { REGISTER_SUCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        authentication: true,
        message: null,
        user: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        authentication: true,
        user: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        token: null,
        user: null,
        authentication: null,
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
      };
    default:
      return state;
  }
};
