import { Request, Response } from "express";

import buyCreateService from "../../services/buy/buyCreate.service";

const buyCreateController = async (req: Request, res: Response) => {
  try {
    const { email } = req.user;

    const buy = await buyCreateService(email);

    return res.status(201).json(buy);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default buyCreateController;
