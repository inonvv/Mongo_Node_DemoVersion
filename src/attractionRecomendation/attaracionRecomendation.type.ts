import { ObjectId } from "mongodb";

export type IAttraction = {
  _id?: ObjectId;
  name: string;
  address: string;
  city: string;
  country: string;
  description: string;
  image?: string;
};
