import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    courseId: String,
    title: String,
    sections: [{
        title: String,
        lessons: [{
            title: String,
            url: String,
        }],
    }],
  },
  { collection: "modules" });
export default moduleSchema;