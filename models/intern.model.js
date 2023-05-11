const db_conn = require('../db/db')

const intern = {}

intern.getInternById = (id,callback) => {
    const query = `select * from intern where intern_id = ${id}`

    db_conn.query(query,(err,res)=>{
        if(err) throw err
        if(res.length == 0){
            callback([])
        }else{
            callback(res[0])
        }
    })
}

intern.getInterns = (callback) => {
    const query = 'select * from intern'

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

intern.addIntern = (fields, callback) => {
    const {username,password,name,level, age} = fields

    const query = 'insert into intern (name,age,level,username,password) values (?,?,?,?,?)'

    db_conn.query(query,[name,age,level,username,password], (err,res) => {
        if(err) throw err
        if(res.insertId){
            callback(res.insertId)
        }
    })

}

module.exports = intern