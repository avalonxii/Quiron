import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { User } from '$utils/types/types';
import { verifyPassword } from '$lib/server/bcrypt';

export const actions = {

    login: async ({ request, cookies, fetch }) => {

        const formData = await request.formData();
        const email = formData.get('email') as string;
        const passw = formData.get('password');

        const user: User = await fetch(`/api/users?email=${email}`, { method: 'GET' }).then(result => result.json())
        
        if(user){
            const { password, name, role } = user;

            const passwordMatch = await verifyPassword( passw as string, password);

            if (passwordMatch) {
                //create cookie
                cookies.set('auth', `${name}/${role}`, {
                    // send cookie for every page
                    path: '/',
                    // server side only cookie so you can't use `document.cookie`
                    httpOnly: true,
                    // only requests from same site can send cookies
                    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
                    sameSite: 'strict',
                    // only sent over HTTPS in production
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60 * 24 * 30, //1 month
                })
    
                // redirect the user
                throw redirect(302, '/')
            }
        }

        return{
            email,
            error: 'email or password is not valid'
        };
    }
    
} satisfies Actions;

export const load = (async () => {

    return {};
}) satisfies PageServerLoad;