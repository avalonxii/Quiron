import type { TSolution, TUser } from '$utils/types/types';
import type { PageServerLoad } from './$types';

export const load = (async ({params, fetch}) => {

    const user: TUser = await fetch(`/api/users?userName=${params.user}`,{method: 'GET'}).then(result => result.json())

    const solutions: TSolution[] = await fetch(`/api/solutions?IdUser=${user._id}`, { method: 'GET' }).then(result => result.json());

    return {user, solutions};
}) satisfies PageServerLoad;