import express from "express";
import {
  addBudget,
  getBudget,
  updateBudget,
  deleteBudget,
} from "../controllers/budget-controllers.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", addBudget);
router
  .route("/:id")
  .get(checkAuth, getBudget)
  .put(checkAuth, updateBudget)
  .delete(checkAuth, deleteBudget);

export default router;
