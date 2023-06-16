import { d as dbConnect, a as dbDisconnect } from "../../../../chunks/db.js";
import { C as Challenge } from "../../../../chunks/Challenge.js";
import { v4 } from "uuid";
import fs from "fs";
const GET = async () => {
  try {
    await dbConnect();
    const challenges = await Challenge.find();
    await dbDisconnect();
    return new Response(JSON.stringify(challenges), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
const POST = async ({ request }) => {
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
    const newChallenge = {
      title: datos.get("title"),
      description: datos.get("description"),
      imgsPath: [...imgsName],
      diffuculty: datos.get("diffuculty"),
      type: datos.get("type"),
      tags: datos.getAll("tags")
    };
    await dbConnect();
    await Challenge.create(newChallenge);
    await dbDisconnect();
    return new Response(JSON.stringify({
      message: "datos enviados",
      newChallenge
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
export {
  GET,
  POST
};
