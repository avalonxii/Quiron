import { dbConnect, dbDisconnect } from '$utils/db';
import User from '$utils/models/User';
import fs from "fs";
import type { RequestHandler } from './$types';

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
        return new Response(JSON.stringify({
            error
        }), {status: 404});
    }
};

export const DELETE: RequestHandler = async ({params}) =>{

    // obtenemos el id de los params de la request _> editamos el RouteParams
    const id = params.userId;

    try {
        //conectamos a la BD, obtenemos el usuario por le id para obtener el nombre de la imagen para borarlo primero
        await dbConnect();
        const deleteFoto = await User.findById(id);
        await dbDisconnect();

        const imgName = deleteFoto?.avatarPhotoPath;

        if(imgName !== '' && imgName )
            //eliminar imagen de uploads
            fs.unlinkSync(`src/uploads/${imgName}`);

        //conectamos a la BD, obtenemos el usuario por le id , lo eliminamos y nos desconectamos
        await dbConnect();
        const userDeleted = await User.findByIdAndRemove(id);
        await dbDisconnect();

        // si todo esta bien retorna el usuario con uno status de 200 (todo ok) 
        return new Response(JSON.stringify(userDeleted), {status: 200}); 

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify({error}), {status: 404});
        
    }
}