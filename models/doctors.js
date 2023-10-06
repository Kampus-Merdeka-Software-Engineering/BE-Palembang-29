import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Doctor = sequelize.define("Doctors", {
  idDoctor: DataTypes.STRING,
  namaDoctor: DataTypes.STRING,
  spesialisasi: DataTypes.STRING,
  picture: DataTypes.STRING,
  bio: DataTypes.STRING,
});

export default Doctor;
