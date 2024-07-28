import { Address } from "../types/Address";
import { DateInterval } from "../types/DateInterval";
import { IAttraction } from "./attaracionRecomendation.type";
import { createAttractionDB, getAttractionDB } from "./attractionRecomendation.db";

export function getAttraction(
  userId: string,
  address: Address,
  dates: DateInterval
) {}

export async function addAttraction(attaracionRecomendation: IAttraction) {
  await createAttractionDB(attaracionRecomendation);
}

export async function getAttractionM() { return await getAttractionDB(); }
