const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });

const { esUnTokenValido, esUnTokenValidoAdmin } = require("../middlewares/auth");
const { mostrarCountriesController, mostrarCountryController } = require("../controllers/country_controller");

//Endpoint para ver todos los paises
router.get("/", esUnTokenValido, mostrarCountriesController);

//Endpoint para ver un pais
router.get("/:id", esUnTokenValido, mostrarCountryController);

module.exports = router;
