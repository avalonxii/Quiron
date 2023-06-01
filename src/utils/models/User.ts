import { Schema, model, Document } from "mongoose";

//definir Schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    aboutme: String,
    avatarPhotoPath: String,
    followers: [String], //id users
    following: [String], //idusers
    challenging: [String], // no mayor a 2
    favorites: [String], //id challanges
    role: String, // normal or admin
    points: Number
})

// interfaz de objeto
interface IUser extends Document {
    name: string,
    userName: string,
    email: string,
    password: string,
    aboutme: string,
    avatarPhotoPath: string,
    followers: [string], //id users
    following: [string], //idusers
    challenging: [string], // no mayor a 2
    favorites: [string], //id challanges
    role: string, // normal or admin
    points : number
};

// crear schema en la bse de datos
// el modela debera seguir la estructura de interfaz
export default model<IUser>('User', UserSchema);