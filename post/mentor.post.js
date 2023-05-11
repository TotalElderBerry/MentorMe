const express = require('express')
const app = express()
const mentorModel =  require('../models/mentor.model')

app.post('/',(req,res) =>{
    console.log(req.body);
    mentorModel.addMentor(req.body, (result) => {
        console.log(result);
        res.send({result})
    })
})

app.post('/login',(req,res) =>{
    const {username,password} = req.body

    mentorModel.getMentors((mentors) => {
        for(let i = 0; i < mentors.length; i++){
            if(mentors[i].username === username && mentors[i].password === password){
                res.status(200).send({mentor: mentors[i]})
                return
            }
        }
        res.status(401).send({message: "Failed"})
    })    
})


module.exports = app