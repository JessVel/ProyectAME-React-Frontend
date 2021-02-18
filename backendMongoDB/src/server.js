const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const { success } = require("consola");

const app = express();

connectDB();

app.use(cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use("/api/usuarios", require("./routes/user_routes"));
app.use("/api/auth", require("./middleware/auth_routes"));
app.use("/api/contactos", require("./routes/contact_routes"));

app.listen(PORT, () => {
  success({
    badge: true,
    message: `Server running in ${PORT}`,
  });
});
