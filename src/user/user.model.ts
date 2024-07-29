import { ObjectId } from "mongodb";
import { DeleteUser, EditUser, addUser, getUserByIdDB, getUsers } from "./user.db";
import { IUser } from "./user.type";

export async function getAll() {
  console.log("not for public...");
  return await getUsers();
}

export async function getById(id: ObjectId) {
  let test = await getUserByIdDB(id);
  console.log("Model", test);
  return test;
  // return users.find((user) => user._id?.toString() === id);
}

export async function createUser(
  firstName: string,
  lastName: string,
  email: string
) {
  let newUser: IUser = {
    _id: new ObjectId(),
    firstName,
    lastName,
    email,
    role: "user",
  };
  return await addUser(newUser);
}

export async function update(id: string, user: IUser) {
  return await EditUser(id, user);
}

export async function deleteById(id: string) {
  return await DeleteUser(id);
}
