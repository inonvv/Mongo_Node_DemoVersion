import { Address } from "../types/Address";
import { IHotel } from "./hotel.type";
import { createHotelDB } from "./hotels.db";

export async function addHotel(hotel: IHotel) {
  await createHotelDB(hotel);
}
