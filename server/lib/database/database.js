import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("railway", "postgres", "Ymdvm5cTqtL93A9tfqjJ", {
  host: "containers-us-west-131.railway.app",
  dialect: "postgres",
  port: 7900
});