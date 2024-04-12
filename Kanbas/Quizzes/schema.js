import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    courseId: { String, required: true },
    title: { String, required: true },
    description: { String, required: true },
    dueDate: { Date, required: true },
    availableDate: { Date, required: true },
    availableUntilDate: { Date, required: true },
    points: { String, required: true },
    published: { Boolean, required: true },
    questions: [{
      type: {
        type: { String, required: true },
        enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_BLANKS"],
        default: "MULTIPLE_CHOICE",
      },
      title: { String, required: true },
      question: { String, required: true },
      answers: [{
        answer: { String, required: true },
        isCorrect: { Boolean, required: true },
      }],
      points: { String, required: true },
    }],
    quizType: { String, required: true },
    assignmentGroup: { String, required: true },
    shuffleAnswers: { Boolean, required: true },
    timeLimit: { String, required: true },
    multipleAttempts: { Boolean, required: true },
    accessCode: { String, required: true },
    oneQuestionAtATime: { Boolean, required: true },
    webcamRequired: { Boolean, required: true },
    lockQuestionsAfterAnswering: { Boolean, required: true },
    showCorrectAnswers: String,
  },
  { collection: "quizzes" }
);

const questionSchema = new mongoose.Schema({
  type: {
    type: { String, required: true },
    enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_BLANKS"],
    default: "MULTIPLE_CHOICE",
  },
  title: { String, required: true },
  question: { String, required: true },
  answers: {
    answer: { String, required: true },
    isCorrect: { Boolean, required: true },
  },
  points: { String, required: true },
});

export default quizSchema;
