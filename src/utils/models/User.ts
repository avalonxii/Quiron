import { Schema, model, Document } from "mongoose";

//definir Schema
const UserSchema = new Schema({
    name: String,
    userName: String,
    email: String,
    password: String,
    aboutme: String,
    avatarPhotoPath: String,
    followers: [String], //id users
    following: [String], //idusers
    challenging: [String], // no mayor a 2
    favorites: [String], //id challanges
    type: String // normal or admin
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
    type: string // normal or admin
};

// crear schema en la bse de datos
// el modela debera seguir la estructura de interfaz
export default model<IUser>('User', UserSchema);