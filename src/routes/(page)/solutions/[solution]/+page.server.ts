import type { TSolution } from '$utils/types/types';
import type { PageServerLoad } from './$types';

export const load = (async ({params, fetch}) => {

   const solution:TSolution = await fetch(`/api/solutions/${params.solution}`).then(result => result.json())

    return {solution};
}) satisfies PageServerLoad;