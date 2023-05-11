const db_conn = require('../db/db')

const mentor = {}

mentor.getMentorById = (id,callback) => {

}

mentor.getMentors = (callback) => {
    const query = 'select * from mentor'

    db_conn.query(query,(err,res) => {
        if(err) throw err
        if(res.length == 0){
            callback([])
        }else{
            for(let i = 0; i < res.length;i++){
                res[i].img = 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629673.png';
            }
            callback(res)
        }

        return
    })
}

mentor.addMentor = (fields, callback) => {
    const {username,password,name,experties, age} = fields

    const query = 'insert into mentor (name,age,experties,username,password) values (?,?,?,?,?)'

    db_conn.query(query,[name,age,experties,username,password], (err,res) => {
        if(err) throw err
        if(res.insertId){
            callback(res.insertId)
        }
    })

}

module.exports = mentor