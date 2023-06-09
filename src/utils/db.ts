import { connect, disconnect } from "mongoose";
import {MONGO_USER, MONGO_PSSW} from "$env/static/private"

const mongoAtlasUri = `mongodb+srv://${MONGO_USER}:${MONGO_PSSW}@cluster0.u2yvxud.mongodb.net/`;

export async function dbConnect(){
    await connect(mongoAtlasUri);
}

export async function dbDisconnect(){
    await disconnect();
}