const load = async ({ locals, fetch }) => {
  const me = await fetch(`/api/users?name=${locals.user?.name}`, { method: "GET" }).then((result) => result.json());
  const solutions = await fetch(`/api/solutions?IdUser=${me._id}`, { method: "GET" }).then((result) => result.json());
  return { me, solutions };
};
export {
  load
};
