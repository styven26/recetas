import Sequelize from "sequelize";

// conexion a la base de datos


//export const sequelize = new Sequelize("recetasdb", "postgres", "2607", {


// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "awayouname11", {
  host: "localhost",
  dialect: "postgres",
  port: 5432
});


