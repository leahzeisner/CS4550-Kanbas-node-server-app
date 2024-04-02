import "dotenv/config";
import express from 'express'
import mongoose from "mongoose";
import session from "express-session";
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from './labs/Lab5.js'
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from './Kanbas/courses/routes.js'
import ModuleRoutes from './Kanbas/modules/routes.js'
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import TodoRoutes from './Kanbas/todos/routes.js';
import ComingUpRoutes from './Kanbas/comingups/routes.js';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/kanbas?directConnection=true"
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.NODE_ENV === "development" ? process.env.FRONTEND_URL : "https://a6--comfy-snickerdoodle-24515c.netlify.app"
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
Lab5(app);
Hello(app)
UserRoutes(app)
CourseRoutes(app)
ModuleRoutes(app)
AssignmentRoutes(app)
TodoRoutes(app)
ComingUpRoutes(app)
app.listen(process.env.PORT || 4000);