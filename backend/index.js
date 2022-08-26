import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import usersRoutes from "./routes/users-routes.js";
import projectsRoutes from "./routes/project-routes.js";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//Routing

app.use("/api/users", usersRoutes);
app.use("/api/proyects", projectsRoutes);
