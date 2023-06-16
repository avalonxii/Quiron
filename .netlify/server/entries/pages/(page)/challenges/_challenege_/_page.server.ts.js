import { f as fail } from "../../../../../chunks/index.js";
const load = async ({ params, fetch }) => {
  const challenge = await fetch(`/api/challenges/${params.challenege}`).then((result) => result.json());
  if (!challenge)
    throw fail(404);
  return { challenge };
};
export {
  load
};
