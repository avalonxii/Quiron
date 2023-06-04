import type { TUser } from '$utils/types/types';
import { redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import type { PageServerLoad } from './$types';

export const actions = {

    delete: async ({ request, fetch }) => { 

        const data = await request.formData()
        const id = data.get('id') as string;

        await fetch(`/api/users/${id}`,{method:'DELETE'})
        throw redirect(303,"/");
    }

}satisfies Actions

export const load = (async ({fetch}) => {

    const users:TUser[] = await fetch("/api/users", {method: "GET"}).then(result => result.json())

    return {users};
}) satisfies PageServerLoad;