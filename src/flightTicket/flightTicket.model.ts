import { ObjectId } from "mongodb";
import { IAirPort } from "../airport/airport.type";
import { DateInterval } from "../types/DateInterval";
import { addFlightTicketDB, getAllFlightTicketsDB } from "./flightTicket.db";
import { IFlightTicket } from "./flightTicket.type";
import { getAirportByIata } from "../airport/airport.model";
import { getFlightsByDate } from "../flight/flight.db";

export async function createFlightTicket(
  userId: string,
  departure: IAirPort,
  arrival: IAirPort,
  dates: DateInterval
) {
  const departureDate = dates.startDate;
  const departureAirport = await getAirportByIata(departure?.iata);
  const arrivalAirport = await getAirportByIata(arrival.iata);

  if (!departureAirport || !arrivalAirport) {
    throw new Error("airport not found");
  }

  // give us the whole flights in the particular day date
  const flightsDay = await getFlightsByDate(
    new ObjectId(departureAirport?._id),
    new ObjectId(arrivalAirport?._id),
    departureDate
  );

  if (!Array.isArray(flightsDay) || flightsDay.length === 0) {
    throw new Error("flights not found");
  }

  const flightId = flightsDay[0]._id;

  const flightTicket: IFlightTicket = {
    userId: new ObjectId(userId),
    flightId: flightId,
  };

  return await addFlightTicketDB(flightTicket);
}

export async function getAllFlightTickets() {
  return await getAllFlightTicketsDB();
}
