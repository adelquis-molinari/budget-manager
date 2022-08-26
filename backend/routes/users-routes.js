import express from "express";
import {
  register,
  userAuthentication,
  confirm,
} from "../controllers/user-controllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", userAuthentication);
router.get("/confirm/:token", confirm);

export default router;
