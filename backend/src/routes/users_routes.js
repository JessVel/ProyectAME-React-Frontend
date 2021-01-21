const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });

const { esUnTokenValido, esUnTokenValidoAdmin } = require("../middlewares/auth");
const { getUserController, loginController, crearUsuarioController, crearAdminController } = require("../controllers/users_controller");

//Endpoint para mostrar los datos del usuario autenticado
router.get("/", esUnTokenValido, getUserController);

//Endpoint para autenticarse como usuario
router.post("/login", loginController);

//Endpoint para crear un usuario
router.post("/singin", crearUsuarioController);

//Endpoint para crear admin
router.post("/singinAdmin", esUnTokenValidoAdmin, crearAdminController);

module.exports = router;
