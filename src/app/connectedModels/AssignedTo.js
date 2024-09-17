import ConnectDB from "../../../mongoConnect/ConnectDB";
import mongoose from "mongoose";

// Schema for the 'assignedTo' field
const assignedToSchema = new mongoose.Schema({
  assignedToType: { type: String, required: true, enum: ["User", "Team"] },
  assignedToId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const AssignedTo =
  ConnectDB.models.AssignedTo || ("AssignedTo", assignedToSchema);
export default AssignedTo;
