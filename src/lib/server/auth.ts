import type { RequestEvent } from "@sveltejs/kit";

export const authUser = (event: RequestEvent) => {

    //get cookies from the rquest
    const { cookies } = event;

    //get the user token from the cookie
    const userToken = cookies.get('auth') 

    if(userToken == 'regularusertoken'){
        const user = {
            id:1,
            name:'juan',
            userName: 'avalon',
            email: 'admin@gmail.com',
            role: 'USER'
        }

        return user;
    }

    if(userToken == 'adminusertoken'){
        const user = {
            id:1,
            name:'pepe',
            userName: 'Viyuela',
            email: 'user@gmail.com',
            role: 'USER'
        }

        return user;
    }


    return null;

}