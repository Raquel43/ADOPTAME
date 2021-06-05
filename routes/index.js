const express = require('express');
const router = express.Router();

const mascotasController = require('../controllers/mascotasController');
const usuariosController = require('../controllers/usuariosController');
const formulariosController = require('../controllers/formulariosController');

module.exports = function() {
     
    // Muestra todos los mascotas
    router.get('/mascotas',mascotasController.mostrarMascotas);

    // muestra un Mascota en especifico por su ID
    router.get('/mascotas/:idMascota',  mascotasController.mostrarMascota);

    // nuevo Mascota
    router.post('/mascotas', mascotasController.nuevoMascota);    

    // Actualizar Mascotas
    router.put('/mascotas', mascotasController.actualizarMascota);

    // Eliminar Mascotas
    router.delete('/mascotas/:idMascota', mascotasController.eliminarMascota);


    //FORMULARIOS
    // Muestra todos los formularios
    router.get('/formularios',formulariosController.mostrarFormularios);

    // muestra un formulario en especifico por su ID
    router.get('/formularios/:idFormulario',  formulariosController.mostrarFormulario);

    // nuevo formulario
    router.post('/formularios', formulariosController.nuevoFormulario);    

    // Actualizar formularios
    router.put('/formularios', formulariosController.actualizarFormulario);

    // Eliminar formularios
    router.delete('/formularios/:idFormulario', formulariosController.eliminarFormulario);

//USUARIOS
    // Muestra todos los usuarios
    router.get('/usuarios',usuariosController.mostrarUsuarios);

    // muestra un usuario en especifico por su ID
    router.get('/usuarios/:idUsuario',  usuariosController.mostrarUsuario);

    // nuevo Usuario
    router.post('/usuarios', usuariosController.nuevoUsuario);    

    // Actualizar Usuarios
    router.put('/usuarios', usuariosController.actualizarUsuario);

    // Eliminar Usuarios
    router.delete('/usuarios/:idUsuario', usuariosController.eliminarUsuario);

    return router;
};