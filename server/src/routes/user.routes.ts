import { Router } from "express";

const userRouter = Router();

import userCreateController from "../controllers/userCreate.controller";
import userListController from "../controllers/userList.controller";

userRouter.post("", userCreateController);
userRouter.get("", userListController);

export default userRouter;
