const load = async ({ locals, fetch }) => {
  const userAuth = await fetch(`/api/users?name=${locals.user?.name}`).then((res) => res.json());
  return { userAuth };
};
export {
  load
};
