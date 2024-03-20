import db from "../Database/index.js";
function AssignmentRoutes(app) {
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((a) => a.courseId === cid);
        res.send(assignments);
    });
}

export default AssignmentRoutes;