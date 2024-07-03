import { Router } from "express";
import {
  deleteAirport,
  findAllAirport,
  getAirPortByCity,
  loginAirport,
  updateAirport,
} from "./airport.controller";
const AirportRouter = Router();

AirportRouter.get("/", findAllAirport)
  .get("/getAirPortByCity/:airportCity", getAirPortByCity)
  .post("/login", loginAirport)
  .put("/updateAirport", updateAirport)
  .delete("/deleteAirport", deleteAirport);

export default AirportRouter;
