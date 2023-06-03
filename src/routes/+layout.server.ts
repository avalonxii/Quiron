import type { User } from '$utils/types/types';
import type { LayoutServerLoad } from './$types';

export const load = (async ({locals, fetch}) => {
    const userAuth:User = await fetch(`/api/users?name=${locals.user?.name}`).then(res => res.json());

    return {userAuth};
}) satisfies LayoutServerLoad;