import { redirect } from '@sveltejs/kit';
import type {  Actions, PageServerLoad } from './$types';

export const actions = {

    sendOpinion: async ({request}) => {

        const data  = await request.formData();

        const opinion = data.get('opinion');

        return {opinion};
    },

    logOut: async ({ cookies }) => {
        cookies.set('auth', '', { path: "/", expires: new Date(0) });

        throw redirect(303, "/")
    }

} satisfies Actions


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;