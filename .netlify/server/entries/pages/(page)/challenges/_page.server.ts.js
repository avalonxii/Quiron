const load = async ({ fetch }) => {
  const challenges = await fetch("/api/challenges").then((result) => result.json());
  return {
    challenges
  };
};
export {
  load
};
