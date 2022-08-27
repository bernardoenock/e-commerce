import { Request, Response } from "express";
import cartDelProdService from "../../services/cart/cartDelProd.service";

const cartDelProdController = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.params;
    const { email } = req.user;

    const cartDel = await cartDelProdService(email, product_id);

    return res.sendStatus(204);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default cartDelProdController;
