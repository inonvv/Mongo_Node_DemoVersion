import { Router } from "express";
import {
  findAllFlightTicket,
  getFlightTicketById
} from "./flightTicket.controller";

const FlightTicketRouter = Router();

FlightTicketRouter
.get("/getAllFlightTickets", findAllFlightTicket)
.get("/getFlightTicketInformationById", getFlightTicketById)
.get("/getFlightTicket");

export default FlightTicketRouter;
