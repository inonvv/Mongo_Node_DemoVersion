import { Request, Response } from "express";

export async function findAllHotels(req: Request, res: Response) {
  res.json([
    { firstName: "momo", planet: "epsilon" },
    { firstName: "kuku", planet: "zalter" },
  ]);
}

export async function registerHotels(req: Request, res: Request) {}
export async function loginHotels(req: Request, res: Request) {}
export async function updateHotels(req: Request, res: Request) {}
export async function deleteHotels(req: Request, res: Request) {}
