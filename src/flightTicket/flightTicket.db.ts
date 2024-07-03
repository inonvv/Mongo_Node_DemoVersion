import { IFlightTicket } from "./flightTicket.type";
import DBConnection, { DB_INFO } from "../DB/DBconnction";
const collection = "flight_ticket";

export async function addFlightTicketDB(flightTicket: IFlightTicket) {
  let mongo = await DBConnection.getInstance();
  try {
    return await mongo
      .db(DB_INFO.db)
      .collection(collection)
      .insertOne(flightTicket);
  } catch (error) {
    throw error;
  }
}

export async function getAllFlightTicketsDB() {
  let mongo = await DBConnection.getInstance();
  try {
    return await mongo.db(DB_INFO.db).collection(collection).find({}).toArray();
  } catch (error) {
    throw error;
  }
}
