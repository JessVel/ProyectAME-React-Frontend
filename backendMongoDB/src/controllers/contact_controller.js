const ContactModel = require("../models/contact_model");

exports.createContact = async (req, res) => {
  try {
    //Crear un nuevo contacto
    const contact = new ContactModel(req.body);

    //

    contact.save();
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};
