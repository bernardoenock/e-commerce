import { Router } from "express";

import userCreateController from "../controllers/userCreate.controller";
import userDeleteSelfController from "../controllers/userDeleteSelf.controller";
import userListController from "../controllers/userList.controller";
import userListOneController from "../controllers/userListOne.controller";
import userLoginController from "../controllers/userLogin.controller";

import { authUser } from "../middlewares/authUser.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("", userCreateController);
  routes.get("", userListController);

  routes.post("/login", userLoginController);
  routes.get("/me", authUser, userListOneController);

  routes.delete("/me", authUser, userDeleteSelfController);

  return routes;
};
