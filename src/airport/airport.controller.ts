import { Request, Response } from "express";
import { getAirportByCityM } from "./airport.model";

export async function findAllAirport(req: Request, res: Response) {}

export async function getAirPortByCity(req: Request, res: Request) {
  //???
  //!!!!
  const airport = await getAirportByCityM();
  //!error try {
  //   return res.status(200);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
}
export async function loginAirport(req: Request, res: Request) {}
export async function updateAirport(req: Request, res: Request) {}
export async function deleteAirport(req: Request, res: Request) {}
