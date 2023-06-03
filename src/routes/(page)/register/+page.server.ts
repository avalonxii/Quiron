import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { ChangeIt, User, ValidateForm } from '$utils/types/types';

export const actions = {

    register: async ({ request, fetch }) => {
        const data = await request.formData()

        const name = data.get('name') as string;
        const userName = data.get('userName') as string;
        const email = data.get('email') as string;
        const passw = data.get('password') as string;
        const passw2 = data.get('password2') as string;

        const { changeIt, itsOk } = validateForm(name, userName, email, passw, passw2);

        if (!itsOk)
            return changeIt as ChangeIt;
        else {
            const findUserbyName = await fetch(`/api/users?name=${name}`, { method: 'GET' }).then(result => result.json())
            const findUserbyEmail: User = await fetch(`/api/users?email=${email}`, { method: 'GET' }).then(result => result.json())
            const findUserbyUserName: User = await fetch(`/api/users?userName=${userName}`, { method: 'GET' }).then(result => result.json())

            const {changeThat, exist} = userExists(findUserbyName, findUserbyEmail, findUserbyUserName, changeIt)

            if(exist)
                return changeThat as ChangeIt;
            else{

                fetch('/api/users',{
                    method: 'POST', 
                    body: data,
                }).catch((error) => console.log(error));

                throw redirect(302, '/login');
            }
        }
    }

} satisfies Actions;

function userExists(findUserbyName:User, findUserbyEmail:User, findUserbyUserName:User, changeIt:ChangeIt){

    let exist = false;

    if(findUserbyName != null){
        exist = true;
        changeIt.name.error = "this 'name' it's already taken srry";
    }
    
    
    if(findUserbyEmail != null){
        exist = true;
        changeIt.email.error = "this 'email' it's being used by other user srry";
    }
    

    if(findUserbyUserName != null){
        exist = true;
        changeIt.userName.error = "It's a cool 'userName' but it's already taken srry";
    }
  
    const changeThat =  changeIt;

    return {changeThat, exist}
}

function validateForm(name: string, userName: string, email: string, passw: string, passw2: string): ValidateForm {

    let itsOk = true;

    //The entries the user will change
    let changeIt = {
        name: { name: name, error: '' },
        userName: { userName: userName, error: '' },
        email: { email: email, error: '' },
        passw: { passw: passw, error: '' },
        passw2: { passw2: passw2, error: '' }
    }

    //regular expression -> name and user name must contains letter and numbers
    let redExp = /^[a-zA-Z][\w\d]*$/;
    if ((name?.length < 4 || name?.length > 15) || !redExp.test(name)) {
        itsOk = false;
        changeIt = {
            ...changeIt,
            name: { name, error: "Your 'name' must have 4 to 15 characters and starts whit a letter" }
        }
    }

    if ((userName?.length < 4 || userName?.length > 15) || !redExp.test(userName)) {
        itsOk = false;
        changeIt = {
            ...changeIt,
            userName: { userName, error: "Your 'userName' must have 4 to 15 characters and starts whit a letter" }
        }
    }


    //regular experssion -> email must contant '@' and '.'
    redExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!redExp.test(email)) {
        itsOk = false;
        changeIt = {
            ...changeIt,
            email: { email, error: "Check if email constains '@' and '.'" }
        }
    }

    //regular experssion -> password must contain at least one uppercase, lowercase, and number
    redExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z].+$/;
    if (!redExp.test(passw)) {
        itsOk = false;
        changeIt = {
            ...changeIt,
            passw: { passw, error: "password must starts whit a letter and contain at least one uppercase, lowercase, and number" },
        }
    }
    else
        if (!(passw === passw2)) {
            itsOk = false;
            changeIt = {
                ...changeIt,
                passw: { passw, error: "these fields do not match" },
                passw2: { passw2, error: "these fields do not match" }
            }
        }

    return { changeIt, itsOk };
}

export const load = (async () => {

    return {};
}) satisfies PageServerLoad;