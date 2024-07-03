import { Router } from "express";
import {
  deleteattractionRecomendation,
  findAllattractionRecomendation,
  registerattractionRecomendation,
  loginattractionRecomendation,
  updateattractionRecomendation,
} from "./attractionRecomendation.controller";
const attractionRecomendationRouter = Router();

export default attractionRecomendationRouter
  .get("/", findAllattractionRecomendation)
  .post("/register", registerattractionRecomendation)
  .post("/login", loginattractionRecomendation)
  .put("/updateattractionRecomendation", updateattractionRecomendation)
  .delete("/deleteattractionRecomendation", deleteattractionRecomendation);
