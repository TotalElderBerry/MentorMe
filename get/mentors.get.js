const express = require('express')
const app = express()
const mentorModel = require('../models/mentor.model')
app.get('/',(req,res) =>{
    mentorModel.getMentors((mentors) => {
        res.send(mentors)
    })
})

module.exports = app
