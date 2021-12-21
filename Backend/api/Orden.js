const express = require('express');
const router = express.Router();
const verify = require('./VerifyToken')

//mongodb orden model

const Orden = require('../models/Orden');


//Create order
router.post('/create', (req, res) => {
    let { idNumber, cliente, origen, destino, createDate } = req.body;
    idNumber = idNumber.trim();
    cliente = cliente.trim();
    origen = origen.trim();
    destino = destino.trim();
    createDate = createDate.trim();

    if (cliente == "" || createDate == "" || destino == "" || origen == "" || idNumber == "") {
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
        Orden.find({ idNumber }).then(result => {
            if (result.length) {
                res.json({
                    status: "FALLO",
                    message: "Ya existe una orden con este id"
                })
            } else {
                const newOrden = new Orden({
                    idNumber,
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
                });
            }
        })
    }
});

//Search Order
router.post('/search', verify, (req, res) => {
    let { idNumber = "", cliente = "", origen = "", destino = "" } = req.body;
    idNumber = idNumber.trim();
    cliente = cliente.trim();
    origen = origen.trim();
    destino = destino.trim();
    let value = { cliente, origen, destino };
    Object.keys(value).forEach((k) => obj[k] == null && delete obj[k]);

    if (cliente == "" && origen == "" && destino == "" && idNumber == "") {
        res.json({
            status: "FALLO",
            message: "Campos vacios"
        });
    } else {
        Orden.find(value)
            .then(data => {
                if (data.length) {
                    res.json({
                        status: 'EXITOSO',
                        message: "Se encontro la orden",
                        data
                    })
                } else {
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

router.post("/consultar", function (req, res) {
    // Captura el nombre del producto a buscar
    const { idNumber } = req.body;
    // Busca el producto en la BD
    Orden.findOne({ idNumber }, function (error, id) {
        // Si hubo error
        if (error) {
            res.send({ estado: "error", msg: "Orden NO encontrada" })
            return false;
        } else {
            if (idNumber !== null) {
                res.send({ estado: "ok", msg: "Orden Encontrada", data: id })
            } else {
                res.send({ estado: "error", msg: "Orden NO encontrada" })
            }
        }

    })

});

router.post('/edit', (req, res) => {
    let { idNumber, cliente, origen, destino, createDate } = req.body;
    idNumber = idNumber.trim();
    cliente = cliente.trim();
    origen = origen.trim();
    destino = destino.trim();
    createDate = createDate.trim();

    if (idNumber = "" || cliente == "" || createDate == "" || destino == "" || origen == "") {
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
        Orden.updateOne({ idNumber }, { $set: { cliente, origen, destino, createDate } }).then(result => {
            res.json({
                status: "EXITOSO",
                message: "Update exitoso",
                data: result,
            })
        }).catch(err => {
            res.json({
                status: "FALLO",
                message: "Error actualizar la orden"
            })
        })
    }
})

router.post('/delete', (req, res) => {
    let { idNumber } = req.body;
    idNumber = idNumber.trim();

    Orden.deleteOne({ idNumber }).then(result => {
        res.json({
            status: "EXITOSA",
            message: "Se ha eliminado la orden con exito"
        })
    }).catch(err => {
        res.json({
            status: "FALLO",
            message: "Error al intentar eliminar la orden"
        })
    })
})

router.get("/lista", async (req, res) => {
    try {
        const order = await Orden.find();
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.delete('/borrar/:id', (req, res) => {
    const id = req.params.id;
    Orden.deleteOne({ _id: id }).then((result) => {
        res.status(200).json({ result })
    })
})

module.exports = router;

