import express from "express";
import {
  register,
  userAuthentication,
  confirm,
  profile,
} from "../controllers/user-controllers.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", userAuthentication);
router.get("/confirm/:token", confirm);

router.get("/profile", checkAuth, profile);

export default router;
