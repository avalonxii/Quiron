import type { TUser, TSolution } from '$utils/types/types';
import type { PageServerLoad } from './$types';

type solutionWUser = {
    solution: TSolution,
    user: TUser | undefined
}

export const load = (async ({fetch}) => {

    let solutionWUser: solutionWUser[] = [];

    const solutions: TSolution[] = await fetch('/api/solutions').then(result => result.json());

    const users: TUser[] = await fetch('/api/users').then(result => result.json());

    solutions.map((solution) => {
        const user = users.find(user => user._id === solution.IdUser);
        solutionWUser.push({solution, user})
    })

    return {
        solutionWUser,
    };
}) satisfies PageServerLoad;