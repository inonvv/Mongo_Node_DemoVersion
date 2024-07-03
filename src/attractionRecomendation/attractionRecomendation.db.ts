import { IAttraction } from "./attaracionRecomendation.type";
import DBConnection from "../DB/DBconnction";
import "dotenv/config";

export async function createAttractionDB(attraction: IAttraction) {
  const DB_INFO = {
    db: process.env.DB_NAME,
    collection: "attaracionRecomendation",
  };

  let mongo = await DBConnection.getInstance();
  try {
    return await mongo
      .db(DB_INFO.db)
      .collection(DB_INFO.collection)
      .insertOne(attraction);
  } catch (error) {
    throw error;
  }
}
