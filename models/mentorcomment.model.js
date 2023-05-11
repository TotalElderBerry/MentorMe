const db_conn = require('../db/db')

const mentorcomment = {}

mentorcomment.getMentorCommentById = (id,callback) => {
    const query = `select * from mentorcomment where problem_id = ${id}`

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

mentorcomment.getMentorComment = (callback) => {
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

mentorComment.addMentorComment = (fields, callback) => {
    const {internproblem_id,mentor_id, rating, comment} = fields

    const query = 'insert into mentorcomment (internproblem_id,mentor_id, rating, comment) values (?,?,?,?)'

    db_conn.query(query,[internproblem_id,mentor_id, rating, comment],(err,res) => {
        if(err) throw err
        if(res){
            callback(res.insertId)
        }
    })
}

module.exports = problem