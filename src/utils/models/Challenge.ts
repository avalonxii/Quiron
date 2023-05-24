import { Schema, model, Document } from "mongoose";

// definir schema
const ChallangeSchema = new Schema({
    title: String,
    description: String,
    imgsPath: [String],
    diffuculty: Number,
    type: String,
    tags: [String]
});

// interfaz de objeto
interface IChallenges extends Document {
    title: string;
    description: string;
    imgsPath: [string];
    diffuculty: number;
    type: string;
    tags: [string];
}

// crear schema en la bse de datos
// el modela debera seguir la estructura de interfaz
export default model<IChallenges>('Challenges', ChallangeSchema);

