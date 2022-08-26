import express from "express"
import { register, userAuthentication } from "../controllers/user-controllers.js"

const router = express.Router()

router.post('/register',register)
router.post('/login',userAuthentication)

export default router