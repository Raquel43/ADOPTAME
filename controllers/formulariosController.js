const Formularios = require('../models/Formularios');

// Muestra todos los formularios
exports.mostrarFormularios = async (req, res, next) => {
    try {
        // obtener todos los formularios
        const formularios = await Formularios.find({});
        res.json(formularios);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un formulario en especifico por su ID
exports.mostrarFormulario = async (req, res, next) => {
    const formulario = await Formularios.findById(req.params.idFormulario);

    if(!formulario) {
        res.json({mensaje : 'Ese Formulario no existe'});
        return next();
    }

    // Mostrar el formulario
    res.json(formulario);
};


// agrega un nuevo formulario
exports.nuevoFormulario = async (req, res, next) => {
    const formulario = new Formularios(req.body);
    try {
        // almacenar el registro
        await formulario.save();
        res.json({ mensaje : 'Se agrego un nuevo formulario' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
};

// Actualiza un formulario via id
exports.actualizarFormulario = async (req, res, next) => {
    try {
        console.log("datos", req.body);
        const formulario = await Formularios.findOneAndUpdate(
            { _id : req.body.id }, 
            {
                nombre:req.body.nombre,
                descripcion:req.body.descripcion
            }, 
            //Opciones, devolver el nuevo objeto modificado
            {new : true}
        );
        res.json(formulario);
    } catch (error) {
        res.send(error);
        next();
    }
};

// Elimina un formulario via ID
exports.eliminarFormulario = async (req, res, next) => {
    try {
        await Formularios.findByIdAndDelete({ _id : req.params.idFormulario });
        res.json({mensaje : 'El Formulario se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};
