import db from "../Database/index.js";
function TodoRoutes(app) {
    app.get("/api/courses/:cid/todos", (req, res) => {
        const { cid } = req.params;
        const todos = db.todos
            .filter((t) => t.courseId === cid);
        res.send(todos);
    });

    app.delete("/api/courses/:cid/todos/:tid", (req, res) => {
        const { cid, tid } = req.params;
        db.todos = db.todos.filter((t) => t.courseId === cid && t._id !== tid);
        res.sendStatus(204);
    });
}

export default TodoRoutes;