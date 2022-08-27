import { Request, Response } from "express";
import userListOneService from "../services/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const id = req.user.id;

    const user = await userListOneService({
      id,
    });

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;
