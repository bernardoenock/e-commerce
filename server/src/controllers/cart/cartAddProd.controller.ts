import { Request, Response } from "express";
import cartAddProdService from "../../services/cart/cartAddProd.service";

const cartAddProdController = async (req: Request, res: Response) => {
  try {
    const { email } = req.user;

    const { product_id } = req.body;

    const cartAdd = await cartAddProdService(product_id, email);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default cartAddProdController;
