const load = async ({ params, fetch }) => {
  const solution = await fetch(`/api/solutions/${params.solution}`).then((result) => result.json());
  return { solution };
};
export {
  load
};
