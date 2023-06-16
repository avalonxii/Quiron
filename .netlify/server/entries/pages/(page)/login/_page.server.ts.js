import { r as redirect } from "../../../../chunks/index.js";
import { v as verifyPassword } from "../../../../chunks/bcrypt.js";
const actions = {
  login: async ({ request, cookies, fetch }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const passw = formData.get("password");
    const user = await fetch(`/api/users?email=${email}`, { method: "GET" }).then((result) => result.json());
    if (user) {
      const { password, name, role } = user;
      const passwordMatch = await verifyPassword(passw, password);
      if (passwordMatch) {
        cookies.set("auth", `${name}/${role}`, {
          // send cookie for every page
          path: "/",
          // server side only cookie so you can't use `document.cookie`
          httpOnly: true,
          // only requests from same site can send cookies
          // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
          sameSite: "strict",
          // only sent over HTTPS in production
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 30
          //1 month
        });
        throw redirect(302, "/");
      }
    }
    return {
      email,
      error: "email or password is not valid"
    };
  }
};
export {
  actions
};
