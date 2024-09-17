import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import db from "./services/db.services.js"
import APIRouter from "./router/api.router.js"

dotenv.config()

const app = express()

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', async (req, res) => {
  try {
    const data = await db.select('*')
    res.json({ message: 'ok', data });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

app.use("/api", APIRouter);


export default app
