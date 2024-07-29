import { Request, Response } from "express";
import { getAllFlightTickets, getFlightTicketInfoM } from "./flightTicket.model";
import { ObjectId } from "mongodb";

export async function findAllFlightTicket(req: Request, res: Response) {
  try {
    const flightTicket = await getAllFlightTickets();
    return res.status(200).json({ flightTicket });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getFlightTicketById(req: Request, res: Response) {
  try {
    // Extract flightId from the request body and convert it to ObjectId
    let { flightId } = req.body;
    if (!ObjectId.isValid(flightId)) {
      return res.status(400).json({ error: "Invalid flight ID format" });
    }
    let information = await getFlightTicketInfoM(new ObjectId(flightId));
    return res.status(200).json({ information });
  } catch (error) {
    throw error;
  }
}

export async function registerFlightTicket(req: Request, res: Request) {}
export async function loginFlightTicket(req: Request, res: Request) {}
export async function updateFlightTicket(req: Request, res: Request) {}
export async function deleteFlightTicket(req: Request, res: Request) {}
