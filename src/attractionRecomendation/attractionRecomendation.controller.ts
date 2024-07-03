import { Request, Response } from "express";

export async function findAllattractionRecomendation(
  req: Request,
  res: Response
) {
  res.json([
    { firstName: "momo", planet: "epsilon" },
    { firstName: "kuku", planet: "zalter" },
  ]);
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
