import express from "express";
import {
  getProjects,
  newProject,
  getProject,
  editProject,
  deleteProject,
  getBudget,
} from "../controllers/project-controllers.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, getProjects).post(checkAuth, newProject);
router
  .route("/:id")
  .get(checkAuth, getProject)
  .put(checkAuth, editProject)
  .delete(checkAuth, deleteProject);

router.get("/budget/:id", checkAuth, getBudget);

export default router;
