import { d as dbConnect, a as dbDisconnect } from "../../../../../chunks/db.js";
import { C as Challenge } from "../../../../../chunks/Challenge.js";
import { v4 } from "uuid";
import fs from "fs";
const GET = async ({ params }) => {
  const id = params.challengeId;
  try {
    await dbConnect();
    const challenge = await Challenge.findById(id);
    await dbDisconnect();
    return new Response(JSON.stringify(challenge), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
const DELETE = async ({ params }) => {
  const id = params.challengeId;
  try {
    await dbConnect();
    const challengeDeleted = await Challenge.findByIdAndRemove(id);
    await dbDisconnect();
    const imgsName = challengeDeleted?.imgsPath;
    if (imgsName)
      imgsName.map((imgName) => {
        fs.unlinkSync(`src/uploads/challenges/${imgName}`);
      });
    return new Response(JSON.stringify({
      message: "challange deleted",
      challengeDeleted
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
const PUT = async ({ params, request }) => {
  const id = params.challengeId;
  try {
    const datos = await request.formData();
    const imgs = datos.getAll("image");
    let imgsName = [""];
    imgsName = [];
    if (imgs) {
      imgs.map(async (img) => {
        const imgType = img.type.split("/").pop();
        const imgName = `${v4()}.${imgType}`;
        imgsName.push(imgName);
        const buffer = Buffer.from(await img.arrayBuffer());
        fs.writeFileSync(`src/uploads/challenges/${imgName}`, buffer, "base64");
      });
    }
    const editedChallenge = {
      title: datos.get("title"),
      description: datos.get("description"),
      imgsPath: [...imgsName],
      diffuculty: datos.get("diffuculty"),
      type: datos.get("type"),
      tags: datos.getAll("tags")
    };
    await dbConnect();
    const challengeUpdated = await Challenge.findByIdAndUpdate(id, editedChallenge);
    await dbDisconnect();
    const imgsDeleted = challengeUpdated?.imgsPath;
    if (imgsDeleted)
      imgsDeleted.map((imgDeleted) => {
        fs.unlinkSync(`src/uploads/challenges/${imgDeleted}`);
      });
    return new Response(JSON.stringify({ challengeUpdated }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
export {
  DELETE,
  GET,
  PUT
};
