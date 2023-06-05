import type { TChallenge } from '$utils/types/types';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({params, fetch}) => {

    const challenge: TChallenge = await fetch(`/api/challenges/${params.challenege}`).then(result => result.json())

    if(!challenge)
        throw fail(404)

    return {challenge};
}) satisfies PageServerLoad;