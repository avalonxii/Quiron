import { connect, disconnect } from "mongoose";
const MONGO_USER = "juanma";
const MONGO_PSSW = "portigol11";
const mongoAtlasUri = `mongodb+srv://${MONGO_USER}:${MONGO_PSSW}@cluster0.u2yvxud.mongodb.net/`;
async function dbConnect() {
  await connect(mongoAtlasUri);
}
async function dbDisconnect() {
  await disconnect();
}
export {
  dbDisconnect as a,
  dbConnect as d
};
