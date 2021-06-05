const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formularioSchema = new Schema({
   nombre: {
        type: String
    }, 
    email: {
        type: String
    },
    telefono: {
        type: Number
    },
    mensaje: {
        type: String
    }

}, 
{ versionKey: false }
);

module.exports = mongoose.model('Formularios', formularioSchema);