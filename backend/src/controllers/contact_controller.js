const { mostrarContacts, mostrarContact, crearContact, borrarContact, actualizarContact } = require("../services/contacts_services");

exports.crearContactController = async (req, res) => {
  const { firstname, lastname, email, id_country, id_company, id_role } = req.body;
  try {
    const resultados = await crearContact(firstname, lastname, email, id_country, id_company, id_role);
    res.status(200).json({ msg: `se creo con exito, ${resultados}` });
    console.log(resultados);
  } catch (err) {
    console.log(err.message);
  }
};

exports.mostrarContactController = async (req, res) => {
  const resultados = await mostrarContact(req.params.id);
  res.status(200).json({ resultados });
  console.log(resultados);
};

exports.mostrarContactsController = async (req, res) => {
  const resultados = await mostrarContacts();
  res.status(200).json({ resultados });
  console.log(resultados);
};

exports.borrarContactController = async (req, res) => {
  const resultados = await borrarContact(req.params.id);
  try {
    res.status(200).json({ msg: `Contacto eliminado con exito!` });
    console.log(resultados);
  } catch (e) {
    return res.status(400).json({ error: true, message: `Hubo un error al intentar eliminar un contacto, vuelva a intentarlo.${e.errsmg}` });
  }
};

exports.actualizarContactController = async (req, res) => {
  const id = req.params.id;
  const { nuevoFirstname, nuevoLastname, nuevoEmail, nuevoId_company, nuevoId_role } = req.body;
  try {
    const resultados = await actualizarContact(id, nuevoFirstname, nuevoLastname, nuevoEmail, nuevoId_company, nuevoId_role);
    res.status(200).json({ msg: `Se actualizo contacto con exito` });
    console.log(resultados);
  } catch (e) {
    return res.status(400).json({ error: true, message: `Hubo un error al intentar actualizar, vuelve a intentarlo.${e.errsmg}` });
  }
};
