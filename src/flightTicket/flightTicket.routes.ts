import { Router } from "express";
import {
  findAllFlightTicket
} from "./flightTicket.controller";

const FlightTicketRouter = Router();

FlightTicketRouter.get("/getAllFlightTickets", findAllFlightTicket);

export default FlightTicketRouter;
