import type User from '$utils/models/User';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

type User = {
    name: string,
    userName: string,
    email: string,
    password: string,
    aboutme: string,
    avatarPhotoPath: string,
    followers: [string], //id users
    following: [string], //idusers
    challenging: [string], // no mor than 2
    favorites: [string], //id challanges
    type: string // normal or admin
}

export const actions = {

    login: async ({ request, cookies, fetch }) => {

        const formData = await request.formData();
        const email = formData.get('email') as string;
        const passw = formData.get('password');

        const user: User = await fetch(`/api/users?email=${email}`, { method: 'GET' }).then(result => result.json())
        const { password } = user;

        if (password === passw) {
            //create cookie
            cookies.set('session', 'prueba', {
                // send cookie for every page
                path: '/',
                // server side only cookie so you can't use `document.cookie`
                httpOnly: true,
                // only requests from same site can send cookies
                // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
                sameSite: 'strict',
                // only sent over HTTPS in production
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 30, //1 mes
            })

            // redirect the user
            throw redirect(302, '/')
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