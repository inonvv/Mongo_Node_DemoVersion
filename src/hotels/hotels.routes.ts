import { Router } from "express";
import {
  deleteHotels,
  findAllHotels,
  registerHotels,
  loginHotels,
  updateHotels,
} from "./hotels.controller";
const hotelsRouter = Router();

export default hotelsRouter
  .get("/", findAllHotels)
  .post("/register", registerHotels)
  .post("/login", loginHotels)
  .put("/updateHotels", updateHotels)
  .delete("/deleteHotels", deleteHotels);
