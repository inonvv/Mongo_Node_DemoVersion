import { Router } from "express";
import {
  deleteHotels,
  findAllHotels,
  loginHotels,
  updateHotels,
  findHotelByName,
  findHotelsByCity,
} from "./hotels.controller";
const hotelsRouter = Router();

export default hotelsRouter
  .get("/findAllHotels", findAllHotels)
  .get("/findHotelByName", findHotelByName)
  .get("/findHotelsByCity", findHotelsByCity)
  .post("/login", loginHotels)
  .put("/updateHotels", updateHotels)
  .delete("/deleteHotels", deleteHotels);
