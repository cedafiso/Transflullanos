const express = require('express');
const router = express.Router();
const verify = require('./VerifyToken')

//mongodb orden model

const Puerto = require('../models/Puerto');


//Create order
router.post('/create', verify,  (req, res) => {
    let { puerto1, puerto2, tarifa} = req.body;
    puerto1 = puerto1.trim();
    puerto2 = puerto2.trim();
    tarifa = tarifa.trim();

    if (puerto1 == "" || puerto2 == "" || tarifa == "") {
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    }else {
        const newPuerto = new Puerto({
            puerto1,
            puerto2,
            tarifa
        });
        newPuerto.save().then(result => {
            res.json({
                status: "EXITOSO",
                message: "Registro de puertos exitoso",
                data: result,
            })
        }).catch(err => {
            res.json({
                status: "FALLO",
                message: "Error guardar la nueva ruta"
            })
        })
    }
});

//Search Order
router.post('/search', verify, (req, res) => {
    let { puerto1, puerto2} = req.body;
    puerto1 = puerto1.trim();
    puerto2 = puerto2.trim();

    if (puerto1 == "" || puerto2 == "") {
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    }else{
        Puerto.find({puerto1, puerto2})
        .then(data =>{
            if(data.length){
                console.log(data[0].tarifa);
                res.json({
                    status: 'EXITOSO',
                    message: "Se encontro la ruta",
                    data
                })
            }else{
                res.json({
                    status: 'FALLO',
                    message: "No se encontro la ruta"
                })
            }
        })
        .catch(err => {
            res.json({
                status: 'FALLO',
                message: "Se encontro un error mientras se buscaba la ruta"
            })
        })
    }
})

router.post('/delete', verify, (req, res) => {
    let{ puerto1, puerto2 } = req.body;
    puerto1 = puerto1.trim();
    puerto2 = puerto2.trim();

    Puerto.deleteOne({puerto1, puerto2}).then(result =>{
        res.json({
            status : "EXITOSA",
            message: "Se ha eliminado la ruta con exito"
        })
    }).catch(err => {
        res.json({
            status: "FALLO",
            message: "Error al intentar eliminar la ruta"
        })
    })
})

module.exports = router;