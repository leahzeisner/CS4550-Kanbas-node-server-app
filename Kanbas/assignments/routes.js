import * as dao from "./dao.js";

function AssignmentRoutes(app) {
    const findAllAssignments = async (req, res) => {
        const { cid } = req.params;
        const assignments = await dao.findAllAssignments();
        res.json(assignments.filter((a) => a.courseId === cid));
    };

    const findAssignmentById = async (req, res) => {
        const assignment = await dao.findAssignmentById(req.params.aid);
        res.json(assignment);
    };

    const createAssignment = async (req, res) => {
        delete req.body._id;
        const assignment = await dao.createAssignment(req.body);
        res.json(assignment);
    };

    const updateAssignment = async (req, res) => {
        const { aid } = req.params;
        const status = await dao.updateAssignment(aid, req.body);
        res.json(status);
    };

    const deleteAssignment = async (req, res) => {
        const status = await dao.deleteAssignment(req.params.aid);
        res.json(status);
    };

    app.get("/api/courses/:cid/assignments", findAllAssignments);
    app.get("/api/assignments/:aid", findAssignmentById);
    app.post("/api/courses/:cid/assignments", createAssignment);
    app.put("/api/assignments/:aid", updateAssignment);
    app.delete("/api/assignments/:aid", deleteAssignment);
}

export default AssignmentRoutes;