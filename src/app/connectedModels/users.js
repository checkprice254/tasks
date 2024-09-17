import ConnectDB from "../../../mongoConnect/ConnectDB";
// models/User.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["regular", "ITSupport", "admin"],
      default: "regular",
    },
    team: { type: Schema.Types.ObjectId, ref: "Team" },
  },
  { timestamps: true }
);
const User = ConnectDB.models.User || ConnectDB.model("User", userSchema);
export default User;
