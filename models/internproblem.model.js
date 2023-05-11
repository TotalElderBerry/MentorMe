const db_conn = require('../db/db')
const problemModel = require('./problem.model')
const internModel = require('./intern.model')
const internproblem = {}

internproblem.getInternProblemByInternId = (id,callback) => {

}

internproblem.getAllInternProblem = (callback) => {
    const query = 'select * from internproblem'

    db_conn.query(query,(err,res) => {
        if(err) throw err
        if(res.length == 0){
            callback([])
            return
        }else{
            const internProblems = []
            for(let i =0;i<res.length;i++){
                let singleInternProblem = {}
                singleInternProblem.internProblemId = res[i].internproblem_id
                problemModel.getProblemById(res[i].problem_id,(singleProblem) => {
                    if(singleProblem != null){
                        singleInternProblem.problem = singleProblem

                        internModel.getInternById(res[i].intern_id, (singleIntern) => {
                            if(singleIntern != []){
                                singleInternProblem.intern = singleIntern
                                internProblems.push(singleInternProblem)
                            }
                            if(internProblems.length == res.length){
                                callback(internProblems)
                                return
                            }
                        })

                    }
                })
            }
        }

        return
    })
}

internproblem.addInternProblem = (fields, callback) => {
    const {intern_id,problem_id,date_completed,solution} = fields

    // problemModel.getProblemById(problem_id,(prob) => {
    //     if(prob == []){
    //         problemModel.addProblem(fields,(problems) => {

    //         })
    //     }
    // })

    problemModel.addProblem(fields,(problemId) => {
        const query = 'insert into internproblem (intern_id,problem_id,date_completed,solution) values (?,?,?,?)'
        db_conn.query(query,[intern_id,problemId,date_completed,solution], (err,res) => {
            if(err) throw err
            if(res.insertId){
                callback(res.insertId)
            }
        })
    })

    

}

module.exports = internproblem