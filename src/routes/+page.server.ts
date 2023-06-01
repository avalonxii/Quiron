import type {  Actions, PageServerLoad } from './$types';

export const actions = {

    sendOpinion: async ({request}) => {

        const data  = await request.formData();

        const opinion = data.get('opinion');

        return {opinion};
    }

} satisfies Actions


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;