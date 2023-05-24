import { connect, disconnect } from "mongoose";

const mongoAtlasUri = 'mongodb+srv://juanma:portigol11@cluster0.u2yvxud.mongodb.net/';

export async function dbConnect(){
    await connect(mongoAtlasUri);
    console.log('connected to database');
}

export async function dbDisconnect(){
    await disconnect();
    console.log('disconnected to database');
}