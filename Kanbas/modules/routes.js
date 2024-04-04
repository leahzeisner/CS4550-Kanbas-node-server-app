import * as dao from "./dao.js";

function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    delete req.body._id;
    const module = await dao.createModule(req.body);
    res.json(module);
  };

  const findAllModules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModules();
    res.json(modules.filter((m) => m.courseId === cid));
  };

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.mid);
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  const createSection = async (req, res) => {
    const { mid } = req.params;
    const { module, section } = req.body
    delete section._id;

    const updatedModule = {
      ...module,
      sections: [...module.sections, section]
    }
    const status = await dao.updateModule(mid, updatedModule);
    res.json(status);
  };

  const createLesson = async (req, res) => {
    const { mid, sid } = req.params;
    const { module, lesson } = req.body
    delete lesson._id;

    const updatedModule = {
      ...module,
      sections: module.sections.map((s) =>
        s._id === sid
        ? {...s, lessons: [...s.lessons, lesson]}
        : s
      )
    }
    const status = await dao.updateModule(mid, updatedModule);
    res.json(status);
  };

  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", findAllModules);
  app.get("/api/modules/:mid", findModuleById);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
  app.post("/api/modules/:mid", createSection);
  app.post("/api/modules/:mid/section/:sid", createLesson);
}
export default ModuleRoutes;