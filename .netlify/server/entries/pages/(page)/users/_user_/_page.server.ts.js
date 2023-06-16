const load = async ({ params, fetch }) => {
  const user = await fetch(`/api/users?userName=${params.user}`, { method: "GET" }).then((result) => result.json());
  const solutions = await fetch(`/api/solutions?IdUser=${user._id}`, { method: "GET" }).then((result) => result.json());
  return { user, solutions };
};
export {
  load
};
