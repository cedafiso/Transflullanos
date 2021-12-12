const express = require('express');
const router = express.Router();

//mongodb user model

const User = require('../models/User');

//Password handler
const bcrypt = require('bcrypt');


//Signup
router.post('/signup', (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if(name == "" || email == "" || password == "" || dateOfBirth == ""){
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    }else if(!/^[a-zA-Z ]*$/.test(name)){
        res.json({
            status: "FALLO",
            message: "Nombre no valido",
        })
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FALLO",
            message: "Email no valido",
        })
    }else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FALLO",
            message: "Fecha de nacimiento no valida"
        })
    }else if(password.length < 8){
        res.json({
            status: "FALLO",
            message: "Contraseña no valida"
        })
    }else{
        //Checking if user already exists
        User.find({email}).then(result => {
            if(result.length){
                //It already exist
                res.json({
                    status: "FALLO",
                    message: "Ya existe un usuario con ese email"
                })
            }else{
                //Try creater new user

                //password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword =>{
                    const newUser = new User({
                        name,
                        email,
                        password: hashedPassword,
                        dateOfBirth
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "EXITOSO",
                            message: "Registro exitoso",
                            data: result,
                        })
                    }).catch(err => {
                        res.json({
                            status: "FALLO",
                            message: "Error guardar al nuevo usuario"
                        })
                    })
                }).catch(err => {
                    res.json({
                        status: "FALLO",
                        message: "Error al encriptar la contrasena"
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FALLO",
                message: "Error al checkear si el usuario ya existe"
            })
        })
    }

})
//Signin
router.post('/signin', (req, res) => {

})

module.exports = router;