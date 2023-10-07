import express from "express";
import { Router } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";

import "./models/index.js";
import usersRouter from "./routes/users.js";
import doctorsRouter from "./routes/doctors.js";
import appointmentsRouter from "./routes/appointments.js";

dotenv.config();

const app = express();
const router = Router();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

// app.use(express.static("public"));
// app.use("/index", express.static("/public/index.html"));

app.use(router);
router.use("/api/users", usersRouter);
router.use("/api/doctors", doctorsRouter);
router.use("/api/appointments", appointmentsRouter);

startSequelize(sequelize);

app.listen(port, () => {
  console.log("Server is running at port : " + port);
});
