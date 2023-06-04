import { Document, Schema, model } from "mongoose";

//definir Schema
const SolutionSchema = new Schema({
    IdChallenge: String,
    IdUser: String,
    title: String,
    hashtags: [String],
    tags:[String],
    imgsPath: [String],
    description: String,
    github: String,
    likes: [String] 
});

// interfaz de objeto
interface ISolution extends Document {
    IdChallenge: string,
    IdUser: string,
    title: string,
    description: string,
    imgsPath: [string],
    tags: [string]
    hashtags: string,
    github: string,
    likes: [string] 
};

// crear schema en la bse de datos
// el modela debera seguir la estructura de interfaz
export default model<ISolution>('Solutions', SolutionSchema);