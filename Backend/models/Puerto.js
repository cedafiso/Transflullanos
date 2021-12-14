const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuertoRutaSchema = new Schema({
    origen: String,
    destino: String,
    precio: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;