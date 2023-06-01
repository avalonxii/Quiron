import { authUser } from '$lib/server/auth';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {

    //svae info into locals
    event.locals.user = authUser(event);

    if (event.url.pathname.startsWith('/register')) 
        if(event.locals.user)
            throw redirect(303, "/")

    if (event.url.pathname.startsWith('/login')) 
        if(event.locals.user)
            throw redirect(303, "/")

    if (event.url.pathname.startsWith('/admin')) 
        if(event.locals.user?.role === 'ADMIN')
            throw redirect(303, "/")

    const response = await resolve(event);
    return response;
    
}) satisfies Handle;