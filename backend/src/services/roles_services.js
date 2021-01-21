const express = require("express");
const sequelize = require("sequelize");
const { connection } = require("../db/connection");
require("dotenv").config({ path: ".env" });

//Funcion para mostrar todos los roles
exports.mostrarRoles = async () => {
  try {
    const resultado = await connection.query("SELECT * FROM roles ORDER BY name", {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
};

//Funcion para crear un rol
exports.crearRole = async name => {
  try {
    const resultado = await connection.query("INSERT INTO role VALUES (NULL, ?)", {
      replacements: [name],
    });
    console.log(resultado);
    return resultado;
  } catch (err) {
    return err;
  }
};

//Funcion para eliminar un rol
exports.borrarRole = async id => {
  try {
    const resultado = await connection.query("DELETE FROM roles WHERE id = :id", {
      replacements: { id: id },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
};
