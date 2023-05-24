import { dbConnect, dbDisconnect } from '../../../utils/db';
import User from '../../../utils/models/User';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {

    try {
        //conectamos a la BD, obtenemos los usuarios y nos desconectamos
        await dbConnect();
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