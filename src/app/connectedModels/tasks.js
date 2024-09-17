import ConnectDB from "../../../mongoConnect/ConnectDB";
import mongoose from "mongoose";

// models/Task.js

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    status: {
      type: String,

      enum: ["To Do", "In Progress", "Completed"],
      default: "To Do",
    },
    category: {
      type: String,
      enum: [
        "Bug",
        "Feature",
        "Documentation",
        "Hardware Problem",
        "Software Problem",
        "Application Development",
        "Network Problem",
        "Project",
      ],
      default: "Hardware Problem",
    },
    priority: {
      type: String,
      enum: ["1", "2", "3", "4", "5"],
      default: "1",
    },
    progress: { type: String, min: "0", max: "100", default: "2 " },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AssignedTo",
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Comment: {
      type: String,
      enum: ["", "Write your comment here"],
      default: "",
    },
  },
  { timestamps: true }
);
const Task = ConnectDB.models.Task || ConnectDB.model("Task", taskSchema);
export default Task;
