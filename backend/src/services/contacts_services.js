const express = require("express");
const sequelize = require("sequelize");
const { connection } = require("../db/connection");
require("dotenv").config({ path: ".env" });

//Funcion para mostrar todos los contactos
exports.mostrarContacts = async () => {
  try {
    const resultado = await connection.query("SELECT * FROM contacts ORDER BY firstname", {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
};

//Funcion para mostrar un contacto
exports.mostrarContact = async id => {
  try {
    const resultado = await connection.query("SELECT * FROM contacts WHERE id_contacts = :id", {
      type: sequelize.QueryTypes.SELECT,
      replacements: { id: id },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
};

//Funcion para crar un contacto
exports.crearContact = async (firstname, lastname, email, id_company, id_role) => {
  try {
    const resultado = await connection.query("INSERT INTO contacts VALUES (NULL, ?, ?, ?, ?, ?)", {
      replacements: [firstname, lastname, email, id_company, id_role],
    });
    console.log(resultado);
    return resultado;
  } catch (err) {
    return err;
  }
};

//Funcion para eliminar un contacto
exports.borrarContact = async id => {
  try {
    const resultado = await connection.query("DELETE FROM contacts WHERE id_contacts = :id", {
      type: sequelize.QueryTypes.DELETE,
      replacements: { id: id },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
};

//Funcion para actualizar un contacto
exports.actualizarContact = async (id, nuevoFirstname, nuevoLastname, nuevoEmail, nuevoId_company, nuevoId_role) => {
  try {
    const resultado = await connection.query(
      "UPDATE contacts SET firstname = :nuevoFirstname, lastname = :nuevoLastname, email = :nuevoEmail, id_company = :nuevoId_company, id_role = :nuevoId_role WHERE contacts.id_contacts = :id",
      {
        type: sequelize.QueryTypes.PUT,
        replacements: {
          id: id,
          nuevoFirstname: nuevoFirstname,
          nuevoLastname: nuevoLastname,
          nuevoEmail: nuevoEmail,
          nuevoId_company: nuevoId_company,
          nuevoId_role: nuevoId_role,
        },
      }
    );
    console.log(resultado);
  } catch (err) {
    return err;
  }
};
