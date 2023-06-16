import { Schema, model } from "mongoose";
const ChallangeSchema = new Schema({
  title: String,
  description: String,
  imgsPath: [String],
  diffuculty: Number,
  type: String,
  tags: [String]
});
const Challenge = model("Challenges", ChallangeSchema);
export {
  Challenge as C
};
