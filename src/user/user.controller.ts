import { Request, Response } from "express";
import { getAll, getById, createUser, update, deleteById } from "./user.model";

export async function testy(req: Request, res: Response) {
  res.status(200).json({ message: "hello" });
}
export async function getAllUsers(req: Request, res: Response) {
  try {
    let users = await getAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    let { id } = req.params;

    if (id.length != 24) {
      return res.status(403).json({ message: "id is required" });
    }

    let user = await getById(id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function addUser(req: Request, res: Response) {
  try {
    let user = req.body;
    if (!user) {
      return res.status(403).json({ message: "user is required" });
    }
    let result = await createUser(user.firstName, user.lastName, user.email);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    let { id } = req.params;
    let user = req.body;
    if (!user || !id) {
      return res
        .status(403)
        .json({ message: "User ID and update data are required" });
    }
    let result = await update(id, user);
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    let { id } = req.params;
    if (!id) {
      return res.status(403).json({ message: "User ID is required" });
    }
    let result = await deleteById(id);
    // if (result.deletedCount === 0) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
}
