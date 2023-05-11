const express = require('express')
const app = express()
const cors = require('cors')

const internGet = require('./get/intern.get')
const mentorGet = require('./get/mentor.get')
const problemGet = require('./get/progproblem.get')
// const internProblemGet = require('./post/internproblem.get')

//all get
const internsGet = require('./get/interns.get')
const mentorsGet = require('./get/mentors.get')
const languagesGet = require('./get/languages.get')
const problemsGet = require('./get/problems.get')
const internProblemsGet = require('./get/internproblems.get')

//POST

const internPost = require('./post/intern.post')
const mentorPost = require('./post/mentor.post')
const problemPost = require('./post/progproblem.post')
const loginPost = require('./post/login.post')
const languagePost = require('./post/language.post')
const internProblemPost = require('./post/internproblem.post')

//all post
// const internsPost = require('./post/interns.post')
// const mentorsPost = require('./post/mentors.post')
// const languagesPost = require('./post/languages.post')

// app.use(express.json())
app.use(express.urlencoded())
app.use(cors(
    {origin: "*"}
))

app.use('/intern', internGet, internPost,loginPost)
app.use('/mentor', mentorGet, mentorPost)
app.use('/problem', problemGet, problemPost)
app.use('/language', languagePost)
app.use('/internproblem',internProblemPost)
app.use('/internproblems',internProblemsGet)

//all
app.use('/interns', internsGet)
app.use('/mentors', mentorsGet)
app.use('/languages', languagesGet)
app.use('/problems', problemsGet)

app.listen(8000,() => {
    console.log("listenng at port 8000");
})