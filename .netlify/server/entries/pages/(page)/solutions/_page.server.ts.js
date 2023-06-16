const load = async ({ fetch }) => {
  let solutionWUser = [];
  const solutions = await fetch("/api/solutions").then((result) => result.json());
  const users = await fetch("/api/users").then((result) => result.json());
  solutions.map((solution) => {
    const user = users.find((user2) => user2._id === solution.IdUser);
    solutionWUser.push({ solution, user });
  });
  return {
    solutionWUser
  };
};
export {
  load
};
