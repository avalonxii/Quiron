import { redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import type { PageServerLoad } from './$types';

export const actions = {

    logOut: async ({  cookies }) => {
        cookies.set('auth', '' ,{path: "/" , expires: new Date(0)});

        throw redirect(303, "/")
    }

}satisfies Actions

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;