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
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
      };
    default:
      return state;
  }
};
