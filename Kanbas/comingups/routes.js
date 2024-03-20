import db from "../Database/index.js";
function ComingUpRoutes(app) {
    app.get("/api/courses/:cid/comingups", (req, res) => {
        const { cid } = req.params;
        const comingups = db.comingUpItems
            .filter((c) => c.courseId === cid);
        res.send(comingups);
    });
}

export default ComingUpRoutes;