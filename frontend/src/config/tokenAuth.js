import ClientAxios from "./axios";

const tokenAuth = (token) => {
  if (token) {
    ClientAxios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete ClientAxios.defaults.headers.common["x-auth-token"];
  }
};

export default tokenAuth;
