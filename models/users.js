import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define("Users", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default User;
