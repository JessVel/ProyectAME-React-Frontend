const express = require("express");
const router = express.Router();

require("dotenv").config({ path: ".env" });

const { esUnTokenValido, esUnTokenValidoAdmin } = require("../middlewares/auth");
const { mostrarCompaniesController, borrarCompanyController, crearCompanyController, actualizarCompanyController } = require("../controllers/company_controller");

//Endpoint para ver todos los contactos
router.get("/", esUnTokenValido, mostrarCompaniesController);

//Endpoint para crear un contacto
router.post("/create", esUnTokenValidoAdmin, crearCompanyController);

//Endpoint para borrar un contacto
router.delete("/delete/:id", esUnTokenValidoAdmin, borrarCompanyController);

//Endpoint para editar un contacto
router.put("/update/:id", esUnTokenValidoAdmin, actualizarCompanyController);

module.exports = router;
