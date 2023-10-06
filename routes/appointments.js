import { Router } from "express";
import {
  createAppointment,
  getAppointmentById,
} from "../controllers/appointments.js";

const appointmentsRouter = Router();

appointmentsRouter.get("/:id", getAppointmentById);

appointmentsRouter.post("/", createAppointment);

export default appointmentsRouter;
