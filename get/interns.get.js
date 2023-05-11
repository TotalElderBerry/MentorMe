const express = require('express')
const app = express()

const internModel = require('../models/intern.model')


app.get('/',(req,res) =>{
    internModel.getInterns((results) => {
        res.send(results)
    })
})

module.exports = app
