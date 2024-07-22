import { IAirPort } from "./airport.type";
import DBConnection, { DB_INFO } from "../DB/DBconnction";
import { query } from "express";

const collection = "airports";
export async function getAllAirportsDB() {
  let mongo = await DBConnection.getInstance();

  try {
    return await mongo.db(DB_INFO.db).collection(collection).find({}).toArray();
  } catch (error) {
    throw error;
  }
}

export async function addAirPort(airport: IAirPort) {
  const DB_INFO = {
    host: process.env.CONNECTION_STRING as string,
    db: process.env.DB_NAME,
    collection: "airports",
  };

  let mongo = await DBConnection.getInstance();
  try {
    return await mongo.db(DB_INFO.db).collection(collection).insertOne(airport);
  } catch (error) {
    throw error;
  }
}

export async function getAirportByIataDB(iata: string) {
  let mongo = await DBConnection.getInstance();

  let query = {
    iata: iata,
  };
  try {
    return await mongo.db(DB_INFO.db).collection(collection).findOne(query);
  } catch (error) {
    throw error;
  }
}

export async function getAirportByCityDB() {}
