// models/Team.js
import ConnectDB from "../../../mongoConnect/ConnectDB";
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  notes: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Team = ConnectDB.models.Team || ConnectDB.model("Team", teamSchema);
export default Team;
