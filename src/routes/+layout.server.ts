import type { LayoutServerLoad } from './$types';

export const load = (async ({cookies, fetch}) => {

    //buscar al usuario con el name cookie
    const name = cookies.get("auth")?.split("/").shift();
    
    const userAuth = await fetch(`/api/users?name=${name}`).then(res => res.json());

    return {userAuth};
}) satisfies LayoutServerLoad;