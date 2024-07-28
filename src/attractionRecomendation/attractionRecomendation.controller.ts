import { Request, Response } from "express";
import { getAttractionM } from "./attractionRecomendation.model";

export async function findAllAttractionRecomendation(req: Request, res: Response) {
  res.json([
    { firstName: "momo", planet: "epsilon" },
    { firstName: "kuku", planet: "zalter" },
  ]);
}

export async function findOneAttractionRecomendation(req: Request, res: Response){
  try {
    let attraction = await getAttractionM();
    res.status(200).json({ attraction });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function registerattractionRecomendation(
  req: Request,
  res: Request
) {}
export async function loginattractionRecomendation(
  req: Request,
  res: Request
) {}
export async function updateattractionRecomendation(
  req: Request,
  res: Request
) {}
export async function deleteattractionRecomendation(
  req: Request,
  res: Request
) {}
