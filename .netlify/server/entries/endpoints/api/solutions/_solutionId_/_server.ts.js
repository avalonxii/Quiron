import { v4 } from "uuid";
import fs from "fs";
import { d as dbConnect, a as dbDisconnect } from "../../../../../chunks/db.js";
import { S as Solution } from "../../../../../chunks/Solution.js";
const GET = async ({ params }) => {
  const id = params.solutionId;
  try {
    await dbConnect();
    const solution = await Solution.findById(id);
    await dbDisconnect();
    return new Response(JSON.stringify(solution), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
const DELETE = async ({ params }) => {
  const id = params.solutionId;
  try {
    await dbConnect();
    const solutionDeleted = await Solution.findByIdAndRemove(id);
    await dbDisconnect();
    const imgsName = solutionDeleted?.imgsPath;
    if (imgsName)
      imgsName.map((imgName) => {
        fs.unlinkSync(`src/uploads/solutions/${imgName}`);
      });
    return new Response(JSON.stringify({
      message: "solution deleted",
      solutionDeleted
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
const PUT = async ({ params, request }) => {
  const id = params.solutionId;
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
        fs.writeFileSync(`src/uploads/solutions/${imgName}`, buffer, "base64");
      });
    }
    const editedSolution = {
      title: datos.get("title"),
      description: datos.get("description"),
      imgsPath: [...imgsName],
      diffuculty: datos.get("diffuculty"),
      type: datos.get("type"),
      tags: datos.getAll("tags")
    };
    await dbConnect();
    const solutionUpdated = await Solution.findByIdAndUpdate(id, editedSolution);
    await dbDisconnect();
    const imgsDeleted = solutionUpdated?.imgsPath;
    if (imgsDeleted)
      imgsDeleted.map((imgDeleted) => {
        fs.unlinkSync(`src/uploads/solutions/${imgDeleted}`);
      });
    return new Response(JSON.stringify({ solutionUpdated }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
export {
  DELETE,
  GET,
  PUT
};
