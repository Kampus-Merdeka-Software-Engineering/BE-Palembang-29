import { Router } from "express";
import {
  getDoctor,
  getDoctorbyId,
  postDoctor,
} from "../controllers/doctors.js";

const doctorsRouter = Router();

doctorsRouter.get("/", getDoctor);

doctorsRouter.get("/:id", getDoctorbyId);

doctorsRouter.post("/", postDoctor);

export default doctorsRouter;
