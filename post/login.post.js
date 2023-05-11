const express = require('express')
const app = express()

const internModel = require('../models/intern.model')


app.post('/login',(req,res) =>{
    const {username,password} = req.body

    internModel.getInterns((interns) => {
        for(let i = 0; i < interns.length; i++){
            if(interns[i].username === username && interns[i].password === password){
                res.status(200).send({intern: interns[i]})
                return
            }
        }
        res.status(401).send({message: "Failed"})
    })    
})


module.exports = app