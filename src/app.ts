import express, { json, urlencoded } from "express";
import cors from "cors";
import router from "./routes/router";
import helmet from "helmet";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api", router);

export default app;
