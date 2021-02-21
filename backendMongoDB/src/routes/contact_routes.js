const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact_controller");
const auth = require("../middleware/auth");

//crear un contacto
// api/contactos
router.post("/", auth, contactController.createContact);

router.get("/", auth, contactController.createContact);

module.exports = router;
