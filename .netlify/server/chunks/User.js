import { Schema, model } from "mongoose";
const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  aboutme: String,
  avatarPhotoPath: String,
  challenging: [String],
  // no mayor a 2
  favorites: [String],
  //id challanges
  role: String,
  // normal or admin
  points: Number
});
const User = model("Users", UserSchema);
export {
  User as U
};
