import { response } from "express";

const usuariosGet = (req, res = response) => {
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    })
}

const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'post API - usuariosPut',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    })
}

export {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
    usuariosPost
}