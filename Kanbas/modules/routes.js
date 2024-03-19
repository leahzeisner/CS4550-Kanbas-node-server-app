import db from "../Database/index.js";

function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules
      .filter((m) => m.courseId === cid);
    res.send(modules);
  });

  app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      courseId: cid,
      _id: new Date().getTime().toString(),
    };
    db.modules.push(newModule);
    res.send(newModule);
  });

  app.delete("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    db.modules = db.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });

  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex(
      (m) => m._id === mid);
    db.modules[moduleIndex] = {
      ...db.modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

  app.put("/api/modules/:mid/section/:sid", (req, res) => {
    const { mid, sid } = req.params;
    const moduleIndex = db.modules.findIndex((m) => m._id === mid);
    const module = db.modules[moduleIndex]

    db.modules[moduleIndex] = {
      ...module,
      sections: module.sections.map((s) => s._id === sid ? {...s, ...req.body} : s)
    };

    res.sendStatus(204);
  });

  app.delete("/api/modules/:mid/section/:sid", (req, res) => {
    const { mid, sid } = req.params;
    const moduleIndex = db.modules.findIndex((m) => m._id === mid);
    const module = db.modules[moduleIndex]

    db.modules[moduleIndex] = {
      ...module,
      sections: module.sections.filter((s) => s._id !== sid)
    };

    res.sendStatus(204);
  });

  app.put("/api/modules/:mid/section/:sid/lesson/:lid", (req, res) => {
    const { mid, sid, lid } = req.params;
    const moduleIndex = db.modules.findIndex((m) => m._id === mid);
    const module = db.modules[moduleIndex]

    db.modules[moduleIndex] = {
      ...module,
      sections: module.sections.map(
        (s) => s._id === sid ? {...s, lessons: s.lessons.map((l) => l._id === lid ? {...l, ...req.body} : l)} : s)
    };

    res.sendStatus(204);
  });

  app.delete("/api/modules/:mid/section/:sid/lesson/:lid", (req, res) => {
    const { mid, sid, lid } = req.params;
    const moduleIndex = db.modules.findIndex((m) => m._id === mid);
    const module = db.modules[moduleIndex]

    db.modules[moduleIndex] = {
      ...module,
      sections: module.sections.map(
        (s) => s._id === sid ? {...s, lessons: s.lessons.filter((l) => l._id !== lid)} : s)
    };

    res.sendStatus(204);
  });
}
export default ModuleRoutes;