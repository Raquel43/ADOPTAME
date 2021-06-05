const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
   nombre: {
        type: String
    }, 
    email: {
        type: String
    },
    password: {
        type: String
    }

}, 
{ versionKey: false }
);

module.exports = mongoose.model('Usuarios', usuarioSchema);