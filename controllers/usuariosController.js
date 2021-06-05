const Usuarios = require('../models/Usuarios');

// Muestra todos los usuarios
exports.mostrarUsuarios = async (req, res, next) => {
    try {
        // obtener todos los usuarios
        const usuarios = await Usuarios.find({});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un usuario en especifico por su ID
exports.mostrarUsuario = async (req, res, next) => {
    const usuario = await Usuarios.findById(req.params.idUsuario);

    if(!usuario) {
        res.json({mensaje : 'Ese Usuario no existe'});
        return next();
    }

    // Mostrar el usuario
    res.json(usuario);
};


// agrega un nuevo usuario
exports.nuevoUsuario = async (req, res, next) => {
    const usuario = new Usuarios(req.body);
    try {
        // almacenar el registro
        await usuario.save();
        res.json({ mensaje : 'Se agrego un nuevo usuario' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
};

// Actualiza un usuario via id
exports.actualizarUsuario = async (req, res, next) => {
    try {
        console.log("datos", req.body);
        const usuario = await Usuarios.findOneAndUpdate(
            { _id : req.body.id }, 
            {
                nombre:req.body.nombre,
                descripcion:req.body.descripcion
            }, 
            //Opciones, devolver el nuevo objeto modificado
            {new : true}
        );
        res.json(usuario);
    } catch (error) {
        res.send(error);
        next();
    }
};

// Elimina un usuario via ID
exports.eliminarUsuario = async (req, res, next) => {
    try {
        await Usuarios.findByIdAndDelete({ _id : req.params.idUsuario });
        res.json({mensaje : 'El Usuario se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};
