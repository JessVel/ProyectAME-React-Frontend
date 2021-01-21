const express = require("express");
const sequelize = require("sequelize");
const { connection } = require("../db/connection");
require("dotenv").config({ path: ".env" });
const jwt = require("jsonwebtoken");

const { esUnTokenValidoAdmin } = require("../middlewares/auth");

//Funcion para mostrar todos los paises
async function mostrarCountries() {
  try {
    const resultado = await connection.query("SELECT * FROM countries", {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

//Funcion para mostrar un pais
async function mostrarCountry(id) {
  try {
    const resultado = await connection.query("SELECT * FROM countries WHERE id_country = :id", {
      type: sequelize.QueryTypes.SELECT,
      replacements: { id: id },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

module.exports = {
  mostrarCountries: mostrarCountries,
  mostrarCountry: mostrarCountry,
};
