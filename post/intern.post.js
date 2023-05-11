const express = require('express')
const app = express()

const internModel = require('../models/intern.model')

app.post('/',(req,res) =>{
    console.log(req.body);
    internModel.addIntern(req.body, (result) => {
        console.log(result);
        res.send({result})
    })
})


module.exports = app