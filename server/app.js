import express from "express";
import cors from  "cors";
import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();

import productRouter from "./routers/productRouter.js";

const app = express();

//configure express to recive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configure cors
app.use(cors());
app.use(morgan("dev"));

app.use("/api", productRouter);

app.get('/', (req, res) => {
    res.send(`<h1>Product CRUD Example</h1>`)
})

export default app;