var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EstudianteSchema = new Schema({
    cod: { type: Number, required: true},
    nombre: { type: String, required: true, max: 20 },
    apellido: { type: String, required: true, max: 20 },
    edad: { type: Number, required: true},
    universidad: { type: String, required: true, max: 30 },
});
module.exports = mongoose.model('Estudiante', EstudianteSchema);