import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    courseId: String,
    title: String,
    dueDate: Date,
    points: String,
  },
  { collection: "assignments" });
export default assignmentSchema;