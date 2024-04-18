import model from "./model.js";
export const createAssignment = (assignment) => model.create(assignment);
export const findAllAssignments = () => model.find();
export const findAssignmentById = (assignmentId) => model.findById(assignmentId);
export const updateAssignment = (assignmentId, assignment) =>  model.updateOne({ _id: assignmentId }, { $set: assignment });
export const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });