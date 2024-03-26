import express from 'express'
import mongoose from "mongoose";
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from './labs/Lab5.js'
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from './Kanbas/courses/routes.js'
import ModuleRoutes from './Kanbas/modules/routes.js'
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import TodoRoutes from './Kanbas/todos/routes.js';
import ComingUpRoutes from './Kanbas/comingups/routes.js';

mongoose.connect("mongodb://localhost:27017/kanbas?directConnection=true");
const app = express()
app.use(cors());
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