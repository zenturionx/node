import jwt from 'jsonwebtoken';
import {response} from "express";

import Usuario from "../models/usuario.js";

const validarJwt = async( req, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // Leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        // Verificar si el usuario existe
        if ( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en BD'
            });
        }

        // Verificar si el uid tiene estado en true
        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            });
        }

        req.usuario = usuario;


        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }

}

export {
    validarJwt
}