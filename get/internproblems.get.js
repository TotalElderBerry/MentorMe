const express = require('express')
const app = express()
const internProblemModel = require('../models/internproblem.model')
app.get('/',(req,res) =>{
    internProblemModel.getAllInternProblem((results) => {
        if(results.length == 0){
            res.send([])
        }else{
            res.send(results)
        }
        return
    })
})


module.exports = app