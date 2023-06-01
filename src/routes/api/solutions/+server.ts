import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import type { RequestHandler } from './$types';
import { dbConnect, dbDisconnect } from "$utils/db";
import Solution from "$utils/models/Solution";

export const GET: RequestHandler = async ({ url }) => {

    try {
        await dbConnect();

        if (url.searchParams.has('IdUser')) {

            const solution = await Solution.find({ IdUser: url.searchParams.get('IdUser') });

            await dbDisconnect();

            // si todo esta bien retorna los usuarios con uno status de 200 (todo ok) 
            return new Response(JSON.stringify(solution), { status: 200 });
        }

        const solutions = await Solution.find();
        await dbDisconnect();

        // si todo esta bien retorna los usuarios con uno status de 200 (todo ok) 
        return new Response(JSON.stringify(solutions), { status: 200 });

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (not found) 
        return new Response(JSON.stringify(error), { status: 400 });
    }
};

export const POST: RequestHandler = async ({ request }) => {
    try {
        //obtenemos los datos que nos llegan de la request
        const datos = await request.formData();

        //optenemos las imagenes que nos ha llegado de la request
        const imgs = datos.getAll("image") as Blob[];
        let imgsName: string[] = [''];
        imgsName = [];

        if (imgs) {
            imgs.map(async (img) => {
                //creamos el nombre de la imagen que se guardara en la base de datos
                const imgType = img.type.split('/').pop();
                const imgName = `${uuidv4()}.${imgType}`;

                imgsName.push(imgName);

                //guardar la imagen en la carpeta de uploads
                const buffer = Buffer.from(await img.arrayBuffer());
                fs.writeFileSync(`src/uploads/solutions/${imgName}`, buffer, "base64");
            });
        }

        //creamos el nuevo objeto challenge
        const newSolution = {
            IdChallenge: datos.get('IdChallenge'),
            IdUser: datos.get('IdUser'),
            title: datos.get('title'),
            hashtags: datos.getAll('hashtags'),
            imgsPath: [...imgsName],
            description: datos.get('description'),
            github: datos.get('github'),
            likes: datos.getAll('likes')
        }

        // crea un dopcumento en la base de datos
        await dbConnect();
        await Solution.create(newSolution);
        await dbDisconnect();

        return new Response(JSON.stringify({
            message: 'datos enviados',
            newSolution
        }), { status: 200 });

    } catch (error) {
        // si va mal retorna un mensaje de error con uno status de 400 (bad request) 
        return new Response(JSON.stringify(error), { status: 400 });
    }
}