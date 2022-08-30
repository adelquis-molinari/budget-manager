import Project from "../models/project.js";

const newProject = async (req, res) => {
  const project = new Project(req.body);
  project.creator = req.user._id;
  try {
    const projectStorage = await project.save();
    res.json(projectStorage);
  } catch (error) {
    console.log(error.message);
  }
};
const getProjects = async (req, res) => {
  const project = await Project.find().where("creator").equals(req.user);
  res.json(project);
};
const getProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    const error = new Error("Not project.");
    return res.status(404).json({ message: error.message });
  }
  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error(" Invalid action.");
    return res.status(403).json({ message: error.message });
  }
  res.json(project);
};
const editProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    const error = new Error("Not project.");
    return res.status(404).json({ message: error.message });
  }
  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error(" Invalid action.");
    return res.status(403).json({ message: error.message });
  }
  const { name, description, date } = req.body;
  project.name = name || project.name;
  project.description = description || project.description;
  project.date = date || project.date;
  try {
    const projectStorage = await project.save();
    res.json(projectStorage);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    const error = new Error("Not project.");
    return res.status(404).json({ message: error.message });
  }
  if (project.creator.toString() !== req.user._id.toString()) {
    const error = new Error(" Invalid action.");
    return res.status(403).json({ message: error.message });
  }
  try {
    await project.deleteOne();
    res.json({ message: "Deleted project." });
  } catch (error) {
    console.log(error.message);
  }
};
const getBudget = async (req, res) => {};

export {
  getProjects,
  newProject,
  getProject,
  editProject,
  deleteProject,
  getBudget,
};
