import { IFlightTicket } from "./flightTicket.type";
import DBConnection, { DB_INFO } from "../DB/DBconnction";
import { ObjectId } from "mongodb";
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



export async function getFlightTicketInfoDB(flightId: ObjectId) {
  let mongo = await DBConnection.getInstance();

  try {
    return await mongo
      .db(DB_INFO.db)
      .collection('flights')
      .aggregate([
        {
          $match: {
            _id: flightId
          }
        },
        {
          $lookup: {
            from: 'airports',
            localField: 'Departure_Id',
            foreignField: '_id',
            as: 'departureAirport'
          }
        },
        {
          $lookup: {
            from: 'airports',
            localField: 'Arrival_Id',
            foreignField: '_id',
            as: 'arrivalAirport'
          }
        },
        {
          $unwind: '$departureAirport'
        },
        {
          $unwind: '$arrivalAirport'
        },
        {
          $project: {
            _id: 0,
            departure: {
              name: '$departureAirport.name',
              city: '$departureAirport.city',
              country: '$departureAirport.country',
              iata: '$departureAirport.iata'
            },
            arrival: {
              name: '$arrivalAirport.name',
              city: '$arrivalAirport.city',
              country: '$arrivalAirport.country',
              iata: '$arrivalAirport.iata'
            }
          }
        }
      ])
      .toArray();
  } catch (error) {
    throw error;
  }
}
