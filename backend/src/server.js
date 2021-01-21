const express = require("express");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 8080;

const userRoutes = require("./routes/users_routes");
const contactRoutes = require("./routes/contacts_routes");
const countryRoutes = require("./routes/country_routes");
const rolesRoutes = require("./routes/roles_routes");
const companyRoutes = require("./routes/company_routes");

const app = express();
app.use(express.json()).use(cors());

app.use("/user", userRoutes);
app.use("/contacts", contactRoutes);
app.use("/countries", countryRoutes);
app.use("/roles", rolesRoutes);
app.use("/companies", companyRoutes);

app.listen(port, () => {
  console.log(`Server listening in ${port}`);
});
