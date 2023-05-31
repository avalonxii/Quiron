import type { User, Solutions } from '$utils/types/types';
import type { PageServerLoad } from './$types';

type solutionWUser = {
    solution: Solutions,
    user: User
}

export const load = (async ({fetch}) => {

    let solutionWUser: solutionWUser[] = [];

    const solutions: Array<Solutions> = await fetch('/api/solutions').then(result => result.json());

    const users: Array<User> = await fetch('/api/users').then(result => result.json());

    solutions.map((solution) => {
        const user = users.find(user => user._id === solution.IdUser);
        solutionWUser.push({solution, user})
    })

    return {
        solutionWUser,
    };
}) satisfies PageServerLoad;