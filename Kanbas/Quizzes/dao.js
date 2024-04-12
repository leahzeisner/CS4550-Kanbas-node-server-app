import model from "./model.js";
export const createQuiz = (quiz) => model.create(quiz);
export const findQuizById = (quizId) => model.findById(quizId);
export const findCourseQuizzes = (courseId) => model.findById(courseId);
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });