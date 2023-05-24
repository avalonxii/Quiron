import { dbConnect, dbDisconnect } from '$utils/db';
import Challenge from '$utils/models/Challenge';
import type { RequestHandler } from './$types';
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const GET: RequestHandler = async () => {

    try {
        await dbConnect();
        const challenges = await Challenge.find();
        await dbDisconnect();

        // si todo esta bien retorna los usuarios con uno status de 200 (todo ok) 
        return new Response(JSON.stringify(challenges), {status: 200});

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify({error}), {status: 404});
    }
};

export const POST: RequestHandler = async ({request}) =>{

    try {
        //obtenemos los datos que nos llegan de la request
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
        const newChallenge = {
            title: datos.get('title'),
            description: datos.get('description'),
            imgsPath: [...imgsName],
            diffuculty: datos.get('diffuculty'),
            type: datos.get('type'),
            tags: datos.getAll('tags')
        }        

        // crea un dopcumento en la base de datos
        await dbConnect();
        await Challenge.create(newChallenge); 
        await dbDisconnect();

        return new Response(JSON.stringify({
            message: 'datos enviados',
            newChallenge
        }), {status: 200});

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (bad request) 
        return new Response(JSON.stringify({error}), {status: 400});
    }
}