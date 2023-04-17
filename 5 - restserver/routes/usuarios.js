import express from "express";
import {usuariosDelete, usuariosGet, usuariosPatch, usuariosPost, usuariosPut} from "../controllers/usuarios.js";
import {check} from "express-validator";
import {
    validarCampos,
    validarJwt,
    esAdminRole,
    tieneRole
} from "../middlewares/index.js";
import {emailExiste, esRoleValido, existeUsuarioPorId} from "../helpers/db-validators.js";

export const routerUsuario = express.Router();

routerUsuario.get('/', usuariosGet);
routerUsuario.put('/:id', [
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        check('rol').custom(esRoleValido),
        validarCampos
],usuariosPut);
routerUsuario.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({min: 6}),
    check('correo').custom(emailExiste),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPost);
routerUsuario.delete('/:id', [
    validarJwt,
    //esAdminRole,
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);
routerUsuario.patch('/', usuariosPatch);

