const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuertoRutaSchema = new Schema({
    puerto1: String,
    puerto2: String,
    tarifa: Number
});

const Puerto = mongoose.model('Puerto', PuertoRutaSchema);

module.exports = Puerto;