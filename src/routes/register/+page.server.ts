import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type ChangeIt ={
    name: {name:string, error:string},
    userName: {userName:string, error:string},
    email: {email:string, error:string},
    passw: {passw:string, error:string},
    passw2: {passw2:string, error:string}
}

export const actions = {

    register: async ({request, fetch}) => {
        const data = await request.formData()

        const name = data.get('name') as string;
        const userName = data.get('userName') as string;
        const email = data.get('email') as string;
        const passw = data.get('password') as string;
        const passw2 = data.get('password2') as string;

        console.log(name, userName, email, passw, passw2);

        const changeIt: ChangeIt =  validateForm(name, userName, email, passw, passw2);


        return changeIt as ChangeIt;
    }

}satisfies Actions;

function validateForm(name:string, userName:string, email:string, passw:string, passw2:string): ChangeIt{

    //The entries the user will change
    let changeIt: ChangeIt = {
        name: {name: name, error:''},
        userName: {userName: userName , error:''},
        email: {email: email, error:''},
        passw: {passw: passw, error:''},
        passw2: {passw2: passw2, error:''}
    }

    //regular expression -> name and user name must contains letter and numbers
    let redExp = /^[a-zA-Z][\w\d]*$/;
    if((name?.length < 4 || name?.length > 15) || !redExp.test(name)) 
        changeIt = {
            ...changeIt, 
            name:{name, error: "Your 'name' must have 4 to 15 characters and starts whit a letter"}
        }
    
    if((userName?.length < 4 || userName?.length > 15) || !redExp.test(userName))
        changeIt = {
            ...changeIt, 
            userName:{userName, error: "Your 'userName' must have 4 to 15 characters and starts whit a letter"}
        }

    //regular experssion -> email must contant '@' and '.'
    redExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if(!redExp.test(email))
        changeIt = {
            ...changeIt, 
            email:{email, error: "Check if email constains '@' and '.'"}
        }
    
    //regular experssion -> password must contain at least one uppercase, lowercase, and number
    redExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z].+$/;
    if(!redExp.test(passw))
        changeIt = {
            ...changeIt, 
            passw:{passw, error: "password must starts whit a letter and contain at least one uppercase, lowercase, and number"},
        }
    else
        if(!(passw === passw2))
            changeIt = {
                ...changeIt, 
                passw:{passw, error: "these fields do not match"},
                passw2:{passw2, error: "these fields do not match"}
            }

    return changeIt;
}


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;