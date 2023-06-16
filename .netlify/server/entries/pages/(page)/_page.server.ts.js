import { r as redirect } from "../../../chunks/index.js";
const actions = {
  sendOpinion: async ({ request }) => {
    const data = await request.formData();
    const opinion = data.get("opinion");
    return { opinion };
  },
  logOut: async ({ cookies }) => {
    cookies.set("auth", "", { path: "/", expires: /* @__PURE__ */ new Date(0) });
    throw redirect(303, "/");
  }
};
const load = async () => {
  return {};
};
export {
  actions,
  load
};
