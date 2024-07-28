import { Request, Response } from "express";
import { getAllFlightTickets } from "./flightTicket.model";

export async function findAllFlightTicket(req: Request, res: Response) {
  try {
    const flightTicket = await getAllFlightTickets();
    return res.status(200).json({ flightTicket });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function registerFlightTicket(req: Request, res: Request) {}
export async function loginFlightTicket(req: Request, res: Request) {}
export async function updateFlightTicket(req: Request, res: Request) {}
export async function deleteFlightTicket(req: Request, res: Request) {}
