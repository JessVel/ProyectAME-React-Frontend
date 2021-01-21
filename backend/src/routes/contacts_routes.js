const express = require("express");
const router = express.Router();

require("dotenv").config({ path: ".env" });

const { esUnTokenValido, esUnTokenValidoAdmin } = require("../middlewares/auth");
const { mostrarContactsController, mostrarContactController, crearContactController, borrarContactController, actualizarContactController } = require("../controllers/contact_controller");

//Endpoint para ver todos los contactos
router.get("/", esUnTokenValido, mostrarContactsController);

//Endpoint para ver un contacto
router.get("/:id", esUnTokenValido, mostrarContactController);

//Endpoint para crear un contacto
router.post("/create", esUnTokenValidoAdmin, crearContactController);

//Endpoint para borrar un contacto
router.delete("/delete/:id", esUnTokenValidoAdmin, borrarContactController);

//Endpoint para editar un contacto
router.put("/update/:id", esUnTokenValidoAdmin, actualizarContactController);

module.exports = router;
