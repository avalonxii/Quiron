import User from '$utils/models/User';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event , resolve }) => {

    //svae info into locals
    const name = event.cookies.get("auth")?.split("/").shift() || '';
    const role = event.cookies.get("auth")?.split("/").pop() || '';

   if(name!=''){
        event.locals.user = {
            name,
            role
        }
   }
   else{event.locals.user = null}

    if (event.url.pathname.startsWith('/register')) 
        if(event.locals.user)
            throw redirect(303, "/alreadyLogged")

    if (event.url.pathname.startsWith('/login')) 
        if(event.locals.user)
            throw redirect(303, "/alreadyLogged")

    if (event.url.pathname.startsWith('/profile')) 
        if(!event.locals.user)
            throw redirect(303, "/login")

    if (event.url.pathname.startsWith('/admin')) 
        if(event.locals.user?.role !== 'ADMIN')
            throw redirect(303, "/noPermission")

    const response = await resolve(event);
    return response;
    
}) satisfies Handle;