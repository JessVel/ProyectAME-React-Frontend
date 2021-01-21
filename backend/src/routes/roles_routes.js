const express = require("express");
const router = express.Router();

require("dotenv").config({ path: ".env" });

const { esUnTokenValido, esUnTokenValidoAdmin } = require("../middlewares/auth");
const { mostrarRolesController, crearRoleController, borrarRoleController } = require("../controllers/roles_controller");

//Endpoint para ver todos los roles
router.get("/", esUnTokenValido, mostrarRolesController);

//Endpoint para crear un rol
router.post("/create", esUnTokenValidoAdmin, crearRoleController);

//Endpoint para borrar un rol
router.delete("/delete", esUnTokenValidoAdmin, borrarRoleController);

module.exports = router;
