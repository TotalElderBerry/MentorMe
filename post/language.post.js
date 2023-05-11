const express = require('express')
const app = express()

const languageModel = require('../models/language.model')


app.post('/',(req,res) =>{
    languageModel.addLanguage(req.body, (language) => {
        res.send(language)
    })
})


module.exports = app