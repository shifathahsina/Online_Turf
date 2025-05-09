import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Custom string _id
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ["admin", "owner"], default: "owner" },
});



export default mongoose.model("Owner", ownerSchema);
