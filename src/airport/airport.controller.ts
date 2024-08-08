import { Request, Response } from "express";
import { getAirportByCityM, getAllAirports } from "./airport.model";

export async function findAllAirport(req: Request, res: Response) {
  try {
    let airports = await getAllAirports();
    res.status(200).json({ airports });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getAirPortByCity(req: Request, res: Response) {
  try {
    let { city } = req.body;
    let airport = await getAirportByCityM(city);
    res.status(200).json({ airport });
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function loginAirport(req: Request, res: Request) {}
export async function updateAirport(req: Request, res: Request) {}
export async function deleteAirport(req: Request, res: Request) {}
