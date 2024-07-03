import DBConnection, { DB_INFO } from "../DB/DBconnction";
import "dotenv/config";
import { IHotel } from "./hotel.type";
const collection = "hotels";
export async function createHotelDB(hotel: IHotel) {
  let mongo = await DBConnection.getInstance();
  try {
    return await mongo.db(DB_INFO.db).collection(collection).insertOne(hotel);
  } catch (error) {
    throw error;
  }
}
