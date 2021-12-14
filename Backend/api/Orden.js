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
    let{cliente, origen, destino} = req.body;
    cliente = cliente.trim();
    origen = origen.trim();
    destino = destino.trim();

    if(cliente == "" || origen == "" || destino == ""){
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    }else{
        Orden.find({cliente, origen, destino})
        .then(data =>{
            if(data.length){
                console.log(data[0].cliente);
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


module.exports = router;