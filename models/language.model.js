const db_conn = require('../db/db')

const language = {}

language.getLanguageById = (id,callback) => {

}

language.getLanguage = (callback) => {
    const query = 'select * from language'

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

language.addLanguage = (fields, callback) => {
    const {language_name} = fields

    const query = 'insert into languages (language_name) values (?)'

    db_conn.query(query,[language_name], (err,res) => {
        if(err) throw err
        if(res.insertId){
            callback(res.insertId)
        }
    })

}

module.exports = language