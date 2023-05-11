const express = require('express')
const app = express()
const axios = require('axios')


app.get('/', async(req,res) =>{
    // axios.get('https://projecteuler.net/minimal=problems')
    try {
		const response = await axios({
			url: "https://projecteuler.net/minimal=problems",
			method: "get",
		});

        let data = response.data.split('\n').slice(1);
        const allProblems = []
        for(let i = 0; i < data.length; i++){
            let tempData = data[i].split("##")
            let temp = {}
            temp.id = tempData[0]
            temp.title = tempData[1]
            allProblems.push(temp)
        }

        
		res.status(200).send(allProblems);
	} catch (err) {
		res.status(500).json({ message: err });
	}
})

module.exports = app
