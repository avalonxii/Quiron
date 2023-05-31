import type { challenge } from '$utils/types/types';
import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {

    const challenges: Array<challenge> = await fetch('/api/challenges').then(result => result.json());

    return {
        challenges
    };

}) satisfies PageServerLoad;