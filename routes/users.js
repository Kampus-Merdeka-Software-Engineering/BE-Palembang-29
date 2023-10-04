import { Router } from "express";
import {
  getUserById,
  createAccount,
  signInAccount,
  deleteUserById,
} from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/:id", getUserById);

usersRouter.post("/", createAccount);

usersRouter.post("/signin", signInAccount);

usersRouter.delete("/:id", deleteUserById);

export default usersRouter;
