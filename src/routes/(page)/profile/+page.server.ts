import type {  PageServerLoad } from './$types';
import type { TSolution, TUser } from '$utils/types/types';

export const load = (async ({ locals, fetch }) => {

    const me: TUser = await fetch(`/api/users?name=${locals.user?.name}`, { method: 'GET' }).then(result => result.json());

    const solutions: TSolution[] = await fetch(`/api/solutions?IdUser=${me._id}`, { method: 'GET' }).then(result => result.json());

    return { me, solutions };
}) satisfies PageServerLoad;