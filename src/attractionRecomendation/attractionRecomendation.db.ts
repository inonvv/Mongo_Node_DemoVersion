import { IAttraction } from "./attaracionRecomendation.type";
import DBConnection, { DB_INFO } from "../DB/DBconnction";
import "dotenv/config";

const collection = "attaracionRecomendation";

export async function createAttractionDB(attraction: IAttraction) {
  let mongo = await DBConnection.getInstance();
  try {
    return await mongo
      .db(DB_INFO.db)
      .collection(collection)
      .insertOne(attraction);
  } catch (error) {
    throw error;
  }
}

export async function getAttractionDB(){
  let mongo = await DBConnection.getInstance();
  try {
    return await mongo.db(DB_INFO.db).collection(collection).findOne({});
  } catch (error) {
    throw error;
  }
}
