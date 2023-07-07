import Sequelize from "sequelize";

// conexion a la base de datos

//<<<<<<< HEAD
export const sequelize = new Sequelize("recetasdb", "postgres", "123", {
//=======

//export const sequelize = new Sequelize("recetasdb", "postgres", "2607", {


// conexion a la base de datos

//export const sequelize = new Sequelize("recetasdb", "postgres", "awayouname11", {
//>>>>>>> 03400e9baef5ff0e640778ef024d5aa78e087b8a
  host: "localhost",
  logging: false,
  dialect: "postgres",
  port: 5432
});


