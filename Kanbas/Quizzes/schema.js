import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    courseId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    availableDate: { type: Date },
    availableUntilDate: { type: Date },
    points: { type: String, required: true },
    published: { type: Boolean, required: true },
    questions: [{
      questionId: {type: String, required: true },
      type: {
        type: String,
        required: true,
        enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_BLANKS"],
        default: "MULTIPLE_CHOICE",
      },
      title: { type: String, required: true },
      question: { type: String, required: true },
      answers: [{
        answerId: {type: String, required: true },
        answer: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      }],
      points: { type: String, required: true },
    }],
    quizType: { type: String, required: true },
    assignmentGroup: { type: String, required: true },
    shuffleAnswers: { type: Boolean, required: true },
    timeLimit: { type: String, required: true },
    multipleAttempts: { type: Boolean, required: true },
    accessCode: { type: String},
    oneQuestionAtATime: { type: Boolean, required: true },
    webcamRequired: { type: Boolean, required: true },
    lockQuestionsAfterAnswering: { type: Boolean, required: true },
    showCorrectAnswers: String,
  },
  { collection: "quizzes" }
);

export default quizSchema;
