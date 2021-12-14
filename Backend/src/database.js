const mongoose = require('mongoose');

//url asociada a la DB
const URL = "mongodb+srv://Admin:equipo9@transflullanosback01.zvjto.mongodb.net/TransflullanosBack01?retryWrites=true&w=majority";

//alerta de conexion exitosa
mongoose.connect(URL)
	.then(db => console.log('Base de datos conectada...'))
	.catch(error => console.error(error))

module.exports = mongoose
