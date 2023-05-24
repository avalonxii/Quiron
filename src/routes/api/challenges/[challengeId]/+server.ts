import { dbConnect, dbDisconnect } from '$utils/db';
import Challenge from '$utils/models/Challenge';
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({params}) => {

    // obtenemos el id de los params de la request -> editamos el RouteParams
    const id = params.challengeId;

    try {

        //conectamos a la BD, obtenemos el usuario y nos desconectamos
        await dbConnect();
        const challenge = await Challenge.findById(id);
        await dbDisconnect();

        // si todo esta bien retorna el usuario con uno status de 200 (todo ok) 
        return new Response(JSON.stringify(challenge), {status: 200})

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify({error}), {status: 404});
    }
};

export const DELETE: RequestHandler = async ({params}) => {
    // obtenemos el id de los params de la request -> editamos el RouteParams
    const id = params.challengeId;

    try {

        await dbConnect();
        const challengeDeleted = await Challenge.findByIdAndRemove(id);
        await dbDisconnect();

        const imgsName = challengeDeleted?.imgsPath;

        if(imgsName)
            //eliminar imagenes de uploads
            imgsName.map((imgName) => {
                fs.unlinkSync(`src/uploads/${imgName}`);
            })

        return new Response(JSON.stringify({
            message: 'challange deleted',
            challengeDeleted
        }), {status: 200});
        
    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify({error}), {status: 404});
    }
}

export const PUT: RequestHandler = async ({params, request}) => {

    // obtenemos el id de los params de la request -> editamos el RouteParams
    const id = params.challengeId;

    try {

        const datos = await request.formData();

        //optenemos las imagenes que nos ha llegado de la request
        const imgs = datos.getAll("image") as Blob[];
        let imgsName: string[] = [];

        if (imgs) {
            imgs.map( async (img) => {
                //creamos el nombre de la imagen que se guardara en la base de datos
                const imgType = img.type.split('/').pop();
                const imgName = `${uuidv4()}.${imgType}`;

                imgsName.push(imgName);

                //guardar la imagen en la carpeta de uploads
                const buffer = Buffer.from(await img.arrayBuffer());
                fs.writeFileSync(`src/uploads/${imgName}`, buffer, "base64");
            });
        }
        
         //creamos el nuevo objeto challenge
         const editedChallenge = {
            title: datos.get('title'),
            description: datos.get('description'),
            imgsPath: [...imgsName],
            diffuculty: datos.get('diffuculty'),
            type: datos.get('type'),
            tags: datos.getAll('tags')
        }

        //Actualzar el usuario
        await dbConnect();
        const challengeUpdated = await Challenge.findByIdAndUpdate(id, editedChallenge);
        await dbDisconnect();

         //buscamos al usuario que le pertenece ese id para borrar las fotos
         const imgsDeleted = challengeUpdated?.imgsPath;

         if(imgsDeleted)
             //eliminar imagen de uploads
             imgsDeleted.map((imgDeleted) => {
                 fs.unlinkSync(`src/uploads/${imgDeleted}`);
             })
        
        return new Response(JSON.stringify({challengeUpdated}), {status: 200});
        
    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify({error}), {status: 404});
    }
}