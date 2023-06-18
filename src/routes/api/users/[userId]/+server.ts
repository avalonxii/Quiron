import { dbConnect, dbDisconnect } from '$utils/db';
import User from '$utils/models/User';
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import type { RequestHandler } from './$types';
import { encryptPassword } from '$lib/server/bcrypt';

export const GET: RequestHandler = async ({params}) => {

    // obtenemos el id de los params de la request _> editamos el RouteParams
    const id = params.userId;

    try {
        
        //buscamos el ususuario en la bsae de datos mediante su id
        await dbConnect();
        const user = await User.findById(id);
        await dbDisconnect();

        // si todo esta bien retorna el usuario con uno status de 200 (todo ok) 
        return new Response(JSON.stringify(user),
        {status: 200});

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify(error), {status: 404});
    }
};

export const DELETE: RequestHandler = async ({params}) =>{

    // obtenemos el id de los params de la request _> editamos el RouteParams
    const id = params.userId;

    try {
        //conectamos a la BD, obtenemos el usuario por le id , lo eliminamos y nos desconectamos
        await dbConnect();
        const userDeleted = await User.findByIdAndRemove(id);
        await dbDisconnect();

        const imgName = userDeleted?.avatarPhotoPath;

        if(imgName !== '' && imgName && !imgName.includes("fotounknown"))
            //eliminar imagen de uploads
            fs.unlinkSync(`src/uploads/users/${imgName}`);

        // si todo esta bien retorna el usuario con uno status de 200 (todo ok) 
        return new Response(JSON.stringify({
            message: 'user deleted',
            userDeleted
        }), {status: 200}); 

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify(error), {status: 404});
        
    }
}

export const PUT: RequestHandler = async ({params, request}) =>{
    // obtenemos el id de los params de la request _> editamos el RouteParams
    const id = params.userId;

    try {
        //obtiene los datos que le pasan por la request
        const datos = await request.formData();

        const encryptedPassword = await encryptPassword(datos.get('password') as string);

        //optenemos la imagen que nos ha llegado
        const img = datos.get("image") as Blob;
        let imgName = '';

        if (img && img.size !== 0) {
            //creamos el nombre de la imagen que se guardara en la base de datos
            const imgType = img.type.split('/').pop();
            imgName = `${uuidv4()}.${imgType}`;

            //guardar la imagen en la carpeta de uploads
            const buffer = Buffer.from(await img.arrayBuffer());
            fs.writeFileSync(`src/uploads/users/${imgName}`, buffer, "base64");

            // crar nuevo usuario
            const updateUser = {
                name: datos.get('name'),
                userName: datos.get('userName'),
                email: datos.get('email'),
                password: encryptedPassword,
                aboutme: datos.get('aboutme'),
                avatarPhotoPath: imgName,
                type: 'user'
            }

            //Actualzar el usuario
            await dbConnect();
            const userUpdated = await User.findByIdAndUpdate(id , updateUser);
            await dbDisconnect();

            //buscamos al usuario que le pertenece ese id para borrar la foto
            const imgDeleted = userUpdated?.avatarPhotoPath;

            if(imgDeleted !== '' && imgDeleted )
            //eliminar imagen de uploads
            fs.unlinkSync(`src/uploads/users/${imgDeleted}`);

            // si todo esta bien retorna el usuario con uno status de 200 (todo ok) 
            return new Response(JSON.stringify({
                message: 'usuario editado',
                userUpdated
            }),{status: 200});
        }

        // crar nuevo usuario
        const updateUser = {    
            name: datos.get('name'),
            userName: datos.get('userName'),
            email: datos.get('email'),
            password: encryptedPassword,
            aboutme: datos.get('aboutme'),
            type: 'user'
        }

        //Actualzar el usuario
        await dbConnect();
        const userUpdated = await User.findByIdAndUpdate(id, updateUser);
        await dbDisconnect();


        // si todo esta bien retorna el usuario con uno status de 200 (todo ok) 
        return new Response(JSON.stringify({
            message: 'usuario editado',
            userUpdated
        }),{status: 200}); 
        
    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify(error), {status: 404});
    }
}