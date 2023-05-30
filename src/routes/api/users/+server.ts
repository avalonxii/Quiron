import { dbConnect, dbDisconnect } from '$utils/db';
import User from '$utils/models/User';
import type { RequestHandler } from './$types';
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const GET: RequestHandler = async ({ url }) => {

    try {
        //conectamos a la BD, obtenemos los usuarios y nos desconectamos
        await dbConnect();

        // si en la url como param buscamos usuarios por email
        if (url.searchParams.has('email')) {
            const users = await User.findOne({ email: url.searchParams.get('email') });

            await dbDisconnect();

            return new Response(JSON.stringify(users), { status: 200 });
        }

        // si en la url como param buscamos usuarios por name
        if (url.searchParams.has('name')) {
            const users = await User.findOne({ name: url.searchParams.get('name') });

            await dbDisconnect();

            return new Response(JSON.stringify(users), { status: 200 });
        }

        // si en la url como param buscamos usuarios por userName
        if (url.searchParams.has('userName')) {
            const users = await User.findOne({ userName: url.searchParams.get('userName') });

            await dbDisconnect();

            return new Response(JSON.stringify(users), { status: 200 });
        }


        //su buscamos todos los usuarios 
        const users = await User.find();

        await dbDisconnect();

        // si todo esta bien retorna los usuarios con uno status de 200 (todo ok)
        return new Response(JSON.stringify(users), { status: 200 });

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify({
            error
        }), { status: 404 });
    }
};

export const POST: RequestHandler = async ({ request }) => {

    try {

        const datos = await request.formData();

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
        } else {

            if (Math.floor(Math.random() * 99) === 1)
                imgName = 'fotobase.jpg';
            else
                imgName = 'fotounknown.jpg';
        }

        // crar nuevo usuario
        const newUser = {
            name: datos.get('name'),
            userName: datos.get('userName'),
            email: datos.get('email'),
            password: datos.get('password'),
            aboutme: datos.get('aboutme'),
            avatarPhotoPath: imgName,
            type: 'user'
        }

        // crea un dopcumento en la base de datos
        await dbConnect();
        await User.create(newUser);
        await dbDisconnect();

        return new Response(JSON.stringify({
            message: 'datos enviados',
            newUser
        }), { status: 200 });

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (bad request) 
        return new Response(JSON.stringify({
            error
        }), { status: 400 });
    }
}