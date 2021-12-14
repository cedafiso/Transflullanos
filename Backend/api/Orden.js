const express = require('express');
const router = express.Router();
const verify = require('./VerifyToken')

//mongodb orden model

const Orden = require('../models/Orden');


//Create order
router.post('/create', verify,  (req, res) => {
    let { cliente, origen, destino, createDate } = req.body;
    cliente = cliente.trim();
    origen = origen.trim();
    destino = destino.trim();
    createDate = createDate.trim();

    if (cliente == "" || createDate == "" || destino == "" || origen == "") {
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    } else if (!new Date(createDate).getTime()) {
        res.json({
            status: "FALLO",
            message: "Fecha de registro no valida"
        })
    } else {
        const newOrden = new Orden({
            cliente,
            origen,
            destino,
            createDate
        });
        newOrden.save().then(result => {
            res.json({
                status: "EXITOSO",
                message: "Registro exitoso",
                data: result,
            })
        }).catch(err => {
            res.json({
                status: "FALLO",
                message: "Error guardar la nueva orden"
            })
        })
    }
});

//Search Order
router.post('/search', verify, (req, res) => {
    let{cliente = "", origen = "", destino = ""} = req.body;
    cliente = cliente.trim();
    origen = origen.trim();
    destino = destino.trim();
    let value = {cliente, origen, destino};
    Object.keys(value).forEach((k) => obj[k] == null && delete obj[k]);

    if(cliente == "" && origen == "" && destino == ""){
        res.json({
            status: "FALLO",
            message: "Campos vacios"
        });
    }else{
        // if(cliente == "" && origen == ""){
        //     value = {destino};
        // }else if(cliente == "" && destino == ""){
        //     value = {origen};
        // }
        Orden.find(value)
        .then(data =>{
            if(data.length){
                res.json({
                    status: 'EXITOSO',
                    message: "Se encontro la orden",
                    data
                })
            }else{
                res.json({
                    status: 'FALLO',
                    message: "No se encontro la orden"
                })
            }
        })
        .catch(err => {
            res.json({
                status: 'FALLO',
                message: "Se encontro un error mientras se buscaba la orden"
            })
        })
    }
})

// router.post('/update', verify, (req, res) => {
//     let {} = req.body;

// })


module.exports = router;