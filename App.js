import express from 'express'
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from './labs/Lab5.js'
const app = express()
app.use(cors());
Lab5(app);
Hello(app)
app.listen(4000)