const db_data = require("./db_connection_data");
const Sequelize = require("sequelize");
const connection = new Sequelize(db_data.conf_db_name, db_data.conf_user, db_data.conf_password, {
  host: db_data.conf_db_host,
  dialect: "mysql",
  port: db_data.conf_port,
  dialectOptions: {
    multipleStatements: true,
  },
});
module.exports.connection = connection;
