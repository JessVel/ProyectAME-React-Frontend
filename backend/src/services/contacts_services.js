const express = require("express");
const sequelize = require("sequelize");
const { connection } = require("../db/connection");
require("dotenv").config({ path: ".env" });

//Funcion para mostrar todos los contactos
async function mostrarContacts() {
  try {
    const resultado = await connection.query("SELECT * FROM contacts ORDER BY firstname", {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

//Funcion para mostrar un contacto
async function mostrarContact(id) {
  try {
    const resultado = await connection.query("SELECT * FROM contacts WHERE id_contacts = :id", {
      type: sequelize.QueryTypes.SELECT,
      replacements: { id: id },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

//Funcion para crar un contacto
async function crearContact(firstname, lastname, email, id_company, id_role) {
  try {
    const resultado = await connection.query("INSERT INTO contacts VALUES (NULL, ?, ?, ?, ?, ?)", {
      replacements: [firstname, lastname, email, id_company, id_role],
    });
    console.log(resultado);
    return resultado;
  } catch (err) {
    return err;
  }
}

//Funcion para eliminar un contacto
async function borrarContact(id) {
  try {
    const resultado = await connection.query("DELETE FROM contacts WHERE id_contacts = :id", {
      type: sequelize.QueryTypes.DELETE,
      replacements: { id: id },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

//Funcion para actualizar un contacto
async function actualizarContact(id, nuevoFirstname, nuevoLastname, nuevoEmail, nuevoId_company, nuevoId_role) {
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
}

module.exports = {
  mostrarContacts: mostrarContacts,
  mostrarContact: mostrarContact,
  crearContact: crearContact,
  borrarContact: borrarContact,
  actualizarContact: actualizarContact,
};
