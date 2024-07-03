import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "./user.controller";

const UserRouter = Router();

UserRouter.get("/getAllUsers", getAllUsers)
  .get("/getById/:id", getUserById)
  .post("/createUser", addUser)
  .put("/updateUser/:id", updateUser)
  .delete("/deleteUser/:id", deleteUser);

export default UserRouter;
