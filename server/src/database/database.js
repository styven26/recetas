import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "123", {
  host: "localhost",
  logging: false,
  dialect: "postgres",
  port: 5432
});


