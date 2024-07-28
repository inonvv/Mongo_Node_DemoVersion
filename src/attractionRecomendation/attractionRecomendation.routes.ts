import { Router } from "express";
import {
  deleteattractionRecomendation,
  findAllAttractionRecomendation,
  registerattractionRecomendation,
  loginattractionRecomendation,
  updateattractionRecomendation,
  findOneAttractionRecomendation,
} from "./attractionRecomendation.controller";
const attractionRecomendationRouter = Router();

export default attractionRecomendationRouter
  .get("/", findAllAttractionRecomendation)
  .get("/findOneAttraction", findOneAttractionRecomendation)
  .post("/register", registerattractionRecomendation)
  .post("/login", loginattractionRecomendation)
  .put("/updateattractionRecomendation", updateattractionRecomendation)
  .delete("/deleteattractionRecomendation", deleteattractionRecomendation);
