import express from "express";

import { appRoutes } from "./routes";

// import { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());

appRoutes(app);

// app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
//   if (err instanceof Error) {
//     return response.status(401).send({
//       error: err.name,
//       message: err.message,
//     });
//   }
//   return response.status(500).json({
//     status: "error",
//     message: "Internal server error",
//   });
// }

app.listen(3000, () => {
  console.log("Servidor executando");
});
