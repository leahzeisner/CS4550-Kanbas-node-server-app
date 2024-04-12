import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    delete req.body._id;
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.quizId);
    res.json(status);
  };

  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.quizId);
    res.json(quiz);
  };

  const findCourseQuizzes = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.courseId);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    const currentQuiz = await dao.findQuizById(quizId);
    req.session["currentQuiz"] = currentQuiz;
    res.json(status);
  };

  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.get("/api/courses/:courseId/quizzes", findCourseQuizzes);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
}
