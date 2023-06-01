import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event , resolve }) => {

    //svae info into locals
    event.locals.role = event.cookies.get("auth")?.split("/").pop() || null;

    if (event.url.pathname.startsWith('/register')) 
        if(event.locals.role)
            throw redirect(303, "/")

    if (event.url.pathname.startsWith('/login')) 
        if(event.locals.role)
            throw redirect(303, "/")

    if (event.url.pathname.startsWith('/admin')) 
        if(event.locals.role !== 'ADMIN')
            throw redirect(303, "/")

    const response = await resolve(event);
    return response;
    
}) satisfies Handle;