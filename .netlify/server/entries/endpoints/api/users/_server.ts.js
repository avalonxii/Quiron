import { d as dbConnect, a as dbDisconnect } from "../../../../chunks/db.js";
import { U as User } from "../../../../chunks/User.js";
import { v4 } from "uuid";
import fs from "fs";
import { e as encryptPassword } from "../../../../chunks/bcrypt.js";
const GET = async ({ url }) => {
  try {
    await dbConnect();
    if (url.searchParams.has("email")) {
      const users2 = await User.findOne({ email: url.searchParams.get("email") });
      await dbDisconnect();
      return new Response(JSON.stringify(users2), { status: 200 });
    }
    if (url.searchParams.has("name")) {
      const users2 = await User.findOne({ name: url.searchParams.get("name") });
      await dbDisconnect();
      return new Response(JSON.stringify(users2), { status: 200 });
    }
    if (url.searchParams.has("userName")) {
      const users2 = await User.findOne({ userName: url.searchParams.get("userName") });
      await dbDisconnect();
      return new Response(JSON.stringify(users2), { status: 200 });
    }
    const users = await User.find();
    await dbDisconnect();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      error
    }), { status: 404 });
  }
};
const POST = async ({ request }) => {
  try {
    const datos = await request.formData();
    const img = datos.get("image");
    let imgName = "";
    if (img && img.size !== 0) {
      const imgType = img.type.split("/").pop();
      imgName = `${v4()}.${imgType}`;
      const buffer = Buffer.from(await img.arrayBuffer());
      fs.writeFileSync(`src/uploads/users/${imgName}`, buffer, "base64");
    } else {
      if (Math.floor(Math.random() * 99) === 1)
        imgName = "fotobase.jpg";
      else
        imgName = "fotounknown.jpg";
    }
    const encryptedPassword = await encryptPassword(datos.get("password"));
    const newUser = {
      name: datos.get("name"),
      userName: datos.get("userName"),
      email: datos.get("email"),
      password: encryptedPassword,
      aboutme: datos.get("aboutme"),
      avatarPhotoPath: imgName,
      points: 0,
      role: "USER"
    };
    await dbConnect();
    await User.create(newUser);
    await dbDisconnect();
    return new Response(JSON.stringify({
      message: "datos enviados",
      newUser
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      error
    }), { status: 400 });
  }
};
export {
  GET,
  POST
};
