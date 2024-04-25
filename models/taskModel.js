import mongoose, { Mongoose } from "mongoose";

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createBy: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("task", taskSchema);

export default User;
