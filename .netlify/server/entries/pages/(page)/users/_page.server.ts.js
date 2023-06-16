import { r as redirect } from "../../../../chunks/index.js";
const actions = {
  delete: async ({ request, fetch }) => {
    const data = await request.formData();
    const id = data.get("id");
    await fetch(`/api/users/${id}`, { method: "DELETE" });
    throw redirect(303, "/");
  }
};
const load = async ({ fetch }) => {
  const users = await fetch("/api/users", { method: "GET" }).then((result) => result.json());
  return { users };
};
export {
  actions,
  load
};
