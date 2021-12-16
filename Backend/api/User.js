require('dotenv').config()
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verify = require('./VerifyToken')

//mongodb user model

const User = require('../models/User');

//Password handler
const bcrypt = require('bcrypt');


//Signup
router.post('/signup', (req, res) => {
    let { idNumber, firstName, lastName, cellphone, email, rol, password } = req.body;
    idNumber = idNumber.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    cellphone = cellphone.trim();
    email = email.trim();
    rol = rol.trim();
    password = password.trim();

    if (idNumber == "" || firstName == "" || lastName == "" || cellphone == "" || rol == "" || email == "" || password == "") {
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    } else if (!/^[a-zA-Z ]*$/.test(firstName)) {
        res.json({
            status: "FALLO",
            message: "Nombre no valido",
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FALLO",
            message: "Email no valido",
        })
    } else if (password.length < 8) {
        res.json({
            status: "FALLO",
            message: "Contraseña no valida"
        })
    } else {
        //Checking if user already exists
        User.find({ email }).then(result => {
            if (result.length) {
                //It already exist
                res.json({
                    status: "FALLO",
                    message: "Ya existe un usuario con ese email"
                })
            } else {
                //Try creater new user

                //password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        idNumber,
                        firstName,
                        lastName,
                        cellphone,
                        email,
                        rol,
                        password: hashedPassword
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
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();
    if (email == "" || password == "") {
        res.json({
            status: "FALLO",
            message: "Credecenciales de ingreso vacio"
        });
    } else {
        User.find({ email })
            .then(data => {
                if (data.length) {
                    //User Exist
                    const hashedPassword = data[0].password;
                    bcrypt.compare(password, hashedPassword).then(result => {
                        if (result) {
                            const token = jwt.sign({ _id: data[0]._id }, process.env.ACCESS_TOKEN_SECRET);
                            res.header('auth-token', token);
                            res.json({
                                status: 'EXITOSO',
                                message: "Ingreso exitoso",
                            })
                        } else {
                            res.json({
                                status: 'FALLO',
                                message: "Contraseña incorrecta"
                            })
                        }
                    }).catch(err => {
                        res.json({
                            status: 'FALLO',
                            message: "Error al verificar contraseña",
                            err
                        })
                    })
                } else {
                    res.json({
                        status: 'FALLO',
                        message: "Credenciales no validas"
                    })
                }
            }).catch(err => {
                res.json({
                    status: 'FALLO',
                    message: "Error al verificar el usuario",
                })
            })
    }
})

//Modify user
router.post('/edit', verify, (req, res) => {
    let { idNumber, firstName, lastName, cellphone, email, rol, password} = req.body;
    idNumber = idNumber.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    cellphone = cellphone.trim();
    email = email.trim();
    rol = rol.trim();
    password = password.trim();

    if (idNumber == "" || firstName == "" || lastName == "" || cellphone == "" || rol == "" || email == "" || password == "") {
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    } else if (!/^[a-zA-Z ]*$/.test(firstName)) {
        res.json({
            status: "FALLO",
            message: "Nombre no valido",
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FALLO",
            message: "Email no valido",
        })
    } else if (password.length < 8) {
        res.json({
            status: "FALLO",
            message: "Contraseña no valida"
        })
    } else {
        User.updateOne({ idNumber }, { $set: { firstName, lastName, cellphone, email, rol} }).then(result => {
            res.json({
                status: "EXITOSO",
                message: "Update exitoso",
                data: result,
            })
        }).catch(err => {
            res.json({
                status: "FALLO",
                message: "Error actualizar al nuevo usuario"
            })
        })
    }
})

module.exports = router;