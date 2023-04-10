import express from "express";
import {usuariosDelete, usuariosGet, usuariosPatch, usuariosPost, usuariosPut} from "../controllers/usuarios.js";

export const router = express.Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);

