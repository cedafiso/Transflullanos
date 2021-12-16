const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    idNumber : Number,
    firstName : String,
    lastName : String,
    cellphone : Number,
    email : String,
    rol : String,
    password : String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;