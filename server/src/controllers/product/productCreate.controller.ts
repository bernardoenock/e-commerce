import { Request, Response } from "express";

import { IProduct } from "../../interfaces/product";
import productCreateService from "../../services/product/productCreate.service";

const productCreateController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const product: IProduct = await productCreateService(data);

    return res.status(201).json(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productCreateController;
