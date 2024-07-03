import { Router } from "express";
import {
  deleteFlightTicket,
  findAllFlightTicket,
  registerFlightTicket,
  loginFlightTicket,
  updateFlightTicket,
} from "./flightTicket.controller";

const FlightTicketRouter = Router();

FlightTicketRouter.get("/getAllFlightTickets", findAllFlightTicket);

export default FlightTicketRouter;
