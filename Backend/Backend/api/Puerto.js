const express = require('express');
const router = express.Router();
const verify = require('./VerifyToken')

//mongodb orden model

const Puerto = require('../models/Puerto');


//Create order
router.post('/create',   (req, res) => {
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
router.post('/search',  (req, res) => {
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

//lista

router.get("/lista", async (req, res) => {
    try {
      const user = await Puerto.find();
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //consultar
  router.post("/consultar", function (req, res) {
    // Captura el nombre del producto a buscar
    const { puerto1, puerto2} = req.body; 
    // Busca el producto en la BD
    Puerto.findOne({ puerto1, puerto2 }, function (error, id) {
        // Si hubo error
        if (error) {
            res.send({ estado: "error", msg: "Ruta NO encontrada" })
            return false;
        } else {
            if (puerto1, puerto2 !== null) {
                res.send({ estado: "ok", msg: "Ruta Encontrada", data: id })
            } else {
                res.send({ estado: "error", msg: "Ruta NO encontrada" })
            }
        }
        
    }) 
    
});

//delete
router.post('/delete',  (req, res) => {
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

//edit

router.post('/edit', (req, res) => {
    let { puerto1, puerto2, tarifa } = req.body;
    puerto1 = puerto1.trim();
    puerto2 = puerto2.trim();
    tarifa = tarifa.trim();
    

    if (puerto1 = "" || puerto2 == "" || tarifa == "" ) {
        res.json({
            status: "FALLO",
            message: "Campo vacio"
        });
    } 

    else {
        Puerto.updateOne({ puerto1, puerto2 }, { $set: { tarifa} }).then(result => {
            res.json({
                status: "EXITOSO",
                message: "Update exitoso",
                data: result,
            })
        }).catch(err => {
            res.json({
                status: "FALLO",
                message: "Error actualizar la ruta"
            })
        })
    }
})

router.delete('/borrar/:id', (req, res) => {
    const id = req.params.id;
    Puerto.deleteOne({_id: id}).then((result)=>{
        res.status(200).json({result})
    })
})

module.exports = router;