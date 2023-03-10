import express, { json } from "express";
import cors from "cors";

import router from "./routes";

const app = express();

app.use(cors());
app.use(json());

app.use(router);

app.get("/api/status", (req, res) => {
  res.status(200).send("OK");
});

export default app;
