import { Schema, model } from "mongoose";
const SolutionSchema = new Schema({
  IdChallenge: String,
  IdUser: String,
  title: String,
  hashtags: [String],
  tags: [String],
  imgsPath: [String],
  description: String,
  github: String,
  likes: [String]
});
const Solution = model("Solutions", SolutionSchema);
export {
  Solution as S
};
