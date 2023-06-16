import { d as dbConnect, a as dbDisconnect } from "../../../../../chunks/db.js";
import { U as User } from "../../../../../chunks/User.js";
import { v4 } from "uuid";
import fs from "fs";
import { e as encryptPassword } from "../../../../../chunks/bcrypt.js";
const GET = async ({ params }) => {
  const id = params.userId;
  try {
    await dbConnect();
    const user = await User.findById(id);
    await dbDisconnect();
    return new Response(
      JSON.stringify(user),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
const DELETE = async ({ params }) => {
  const id = params.userId;
  try {
    await dbConnect();
    const userDeleted = await User.findByIdAndRemove(id);
    await dbDisconnect();
    const imgName = userDeleted?.avatarPhotoPath;
    if (imgName !== "" && imgName && !imgName.includes("fotounknown"))
      fs.unlinkSync(`src/uploads/users/${imgName}`);
    return new Response(JSON.stringify({
      message: "user deleted",
      userDeleted
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
const PUT = async ({ params, request }) => {
  const id = params.userId;
  try {
    const datos = await request.formData();
    const encryptedPassword = await encryptPassword(datos.get("password"));
    const img = datos.get("image");
    let imgName = "";
    if (img && img.size !== 0) {
      const imgType = img.type.split("/").pop();
      imgName = `${v4()}.${imgType}`;
      const buffer = Buffer.from(await img.arrayBuffer());
      fs.writeFileSync(`src/uploads/users/${imgName}`, buffer, "base64");
      const updateUser2 = {
        name: datos.get("name"),
        userName: datos.get("userName"),
        email: datos.get("email"),
        password: encryptedPassword,
        aboutme: datos.get("aboutme"),
        avatarPhotoPath: imgName,
        type: "admin"
      };
      await dbConnect();
      const userUpdated2 = await User.findByIdAndUpdate(id, updateUser2);
      await dbDisconnect();
      const imgDeleted = userUpdated2?.avatarPhotoPath;
      if (imgDeleted !== "" && imgDeleted)
        fs.unlinkSync(`src/uploads/users/${imgDeleted}`);
      return new Response(JSON.stringify({
        message: "usuario editado",
        userUpdated: userUpdated2
      }), { status: 200 });
    }
    const updateUser = {
      name: datos.get("name"),
      userName: datos.get("userName"),
      email: datos.get("email"),
      password: encryptedPassword,
      aboutme: datos.get("aboutme")
    };
    await dbConnect();
    const userUpdated = await User.findByIdAndUpdate(id, updateUser, { new: true });
    await dbDisconnect();
    return new Response(JSON.stringify({
      message: "usuario editado",
      userUpdated
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
};
export {
  DELETE,
  GET,
  PUT
};
