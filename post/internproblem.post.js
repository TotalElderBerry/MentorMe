const express = require('express')
const app = express()

const internProblemModel = require('../models/internproblem.model')


app.post('/',(req,res) =>{
    internProblemModel.addInternProblem(req.body,(resultId) => {
        res.send({resultId})
    })
})


module.exports = app