import { v4 } from "uuid";
import fs from "fs";
import { d as dbConnect, a as dbDisconnect } from "../../../../chunks/db.js";
import { S as Solution } from "../../../../chunks/Solution.js";
const GET = async ({ url }) => {
  try {
    await dbConnect();
    if (url.searchParams.has("IdUser")) {
      const solution = await Solution.find({ IdUser: url.searchParams.get("IdUser") });
      await dbDisconnect();
      return new Response(JSON.stringify(solution), { status: 200 });
    }
    const solutions = await Solution.find();
    await dbDisconnect();
    return new Response(JSON.stringify(solutions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
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
        fs.writeFileSync(`src/uploads/solutions/${imgName}`, buffer, "base64");
      });
    }
    const newSolution = {
      IdChallenge: datos.get("IdChallenge"),
      IdUser: datos.get("IdUser"),
      title: datos.get("title"),
      hashtags: datos.getAll("hashtags"),
      imgsPath: [...imgsName],
      description: datos.get("description"),
      github: datos.get("github"),
      likes: datos.getAll("likes")
    };
    await dbConnect();
    await Solution.create(newSolution);
    await dbDisconnect();
    return new Response(JSON.stringify({
      message: "datos enviados",
      newSolution
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
export {
  GET,
  POST
};
