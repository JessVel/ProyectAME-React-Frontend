const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });

//Validar TOKEN
function esUnTokenValido(req, res, next) {
  try {
    const usuario = jwt.verify(req.headers.authorization.split(" ")[1], process.env.CLAVE_CIFRADO);
    req.usuarioValidado = usuario;
    next();
  } catch (err) {
    res.status(403).json({ error: "Usuario no autorizado" });
  }
}

//Validar TOKEN Admin
const esUnTokenValidoAdmin = async (req, res, next) => {
  try {
    const usuario = await jwt.verify(req.headers.authorization.split(" ")[1], process.env.CLAVE_CIFRADO);
    if (usuario.admin == "T") {
      next();
    } else {
      res.status(403).json({ error: "Usuario no autorizado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Hubo un error" });
  }
};

module.exports.esUnTokenValido = esUnTokenValido;
module.exports.esUnTokenValidoAdmin = esUnTokenValidoAdmin;
