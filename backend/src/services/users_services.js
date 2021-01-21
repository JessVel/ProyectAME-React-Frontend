const express = require("express");
const sequelize = require("sequelize");
const { connection } = require("../db/connection");
require("dotenv").config({ path: ".env" });
const jwt = require("jsonwebtoken");

exports.buscarUsuario = async (user, password) => {
  try {
    const resultado = await connection.query(`SELECT * FROM users WHERE user = :user AND password = :password`, {
      type: sequelize.QueryTypes.SELECT,
      replacements: { user: user, password: password },
    });
    console.log(resultado);
    if (resultado.length > 0) {
      console.log("true");
      var admin = resultado[0].es_admin;
      const token = jwt.sign({ user, password, admin }, process.env.CLAVE_CIFRADO);
      console.log("ESTE ES EL TOKEN --> " + token);
      return token;
    } else {
      console.log("false");
      return false;
    }
  } catch (err) {
    return err;
  }
};

exports.getUsuario = async (user, password) => {
  try {
    const resultado = await connection.query("SELECT * FROM users WHERE user = :user AND password = :password", {
      type: sequelize.QueryTypes.SELECT,
      replacements: { user: user, password: password },
    });
    return resultado;
  } catch (err) {
    return err;
  }
};

// Crear usuario
exports.crearUsuario = async (user, name, lastname, email, password, es_admin) => {
  try {
    const resultado = await connection.query("INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?, 'F')", {
      replacements: [user, name, lastname, email, password, es_admin],
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
};

//Crear admin
exports.crearAdmin = async (user, name, lastname, email, password, es_admin) => {
  try {
    const resultado = await connection.query("INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?, 'T')", {
      replacements: [user, name, lastname, email, password, es_admin],
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
};

//VALIDAR USUARIO y crea token
exports.esUnUsuarioValido = async (user, password) => {
  const usuario = buscarUsuario(user, password);
  console.log(usuario);
  if (usuario === "true") {
    const token = jwt.sign({ user, password }, process.env.CLAVE_CIFRADO);
    console.log("ESTE ES EL TOKEN --> " + token);
    return token;
  } else {
    return false;
  }
};
