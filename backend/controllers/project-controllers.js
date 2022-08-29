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
const getProject = async (req, res) => {};
const editProject = async (req, res) => {};
const deleteProject = async (req, res) => {};
const getBudget = async (req, res) => {};

export {
  getProjects,
  newProject,
  getProject,
  editProject,
  deleteProject,
  getBudget,
};
