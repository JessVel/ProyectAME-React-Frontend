const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });

const { getUsuario, buscarUsuario, crearUsuario } = require("../services/users_services");

exports.getUserController = async (req, res) => {
  const tokenDelRequest = jwt.verify(req.headers.authorization.split(" ")[1], process.env.CLAVE_CIFRADO);
  const token = getUsuario(tokenDelRequest.user, tokenDelRequest.password);
  token.then(function (resultado) {
    console.log(resultado);
    if (resultado) {
      res.status(200).json({ resultado });
    } else {
      res.status(401).send("Usuario Invalido");
    }
  });
};

exports.loginController = async (req, res) => {
  const { user, password } = req.body;
  const token = buscarUsuario(user, password);
  token.then(function (resultado) {
    console.log(resultado);
    if (resultado) {
      res.status(200).json({ resultado });
    } else {
      res.status(401).send("Usuario Invalido");
    }
  });
};

exports.crearUsuarioController = async (req, res) => {
  const resultados = await crearUsuario(req.body.user, req.body.name, req.body.lastname, req.body.email, req.body.password, req.body.es_admin);
  res.send(resultados);
  console.log("Usuario creado correctamente!");
};

exports.crearAdminController = async (req, res) => {
  const tokenDelRequest = jwt.verify(req.headers.authorization.split(" ")[1], process.env.CLAVE_CIFRADO);
  if (tokenDelRequest.admin === "T") {
    const resultados = await crearAdmin(req.body.user, req.body.name, req.body.lastname, req.body.email, req.body.password, req.body.es_admin);
    res.send(resultados);
    console.log("admin creado correctamente!");
  } else {
    console.log(err);
  }
};
