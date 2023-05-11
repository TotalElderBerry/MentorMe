const db_conn = require('../db/db')

const problem = {}

problem.getProblemById = (id,callback) => {
    const query = `select * from problem where problem_id = ${id}`

    db_conn.query(query,(err,res) => {
        if(err) throw err
        if(res.length == 0){
            callback([])
        }else{
            callback(res[0])    
        }
        return
    })
}

problem.getProblem = (callback) => {
    const query = 'select * from problem'

    db_conn.query(query,(err,res) => {
        if(err) throw err
        if(res.length == 0){
            callback([])
        }else{
            callback(res)
        }

        return
    })
}

problem.addProblem = (fields, callback) => {
    const {problem_id,problem_description, solution, language, title} = fields

    
    problem.getProblemById(problem_id,(prob) => {
        if(prob != []){
            const query = 'insert into problem (problem_id,problem_description, solution, language, title) values (?,?,?,?,?)'
            db_conn.query(query,[problem_id,problem_description, solution, language, title], (err,res) => {
                if(err) throw err
                if(res.insertId){
                    callback(res.insertId)
                }
            })
        }else{
            callback(problem_id)
        }
        return
    })
}

module.exports = problem