import mongoose from "mongoose";

const projectsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    description: {
      type: toString,
      trim: true,
      require: true,
    },
    fecha: {
      type: Date,
      default: Date.now(),
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectsSchema);
export default Project;
