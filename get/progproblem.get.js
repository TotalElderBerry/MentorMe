const express = require('express')
const app = express()
const axios = require('axios')


app.get('/:id', async(req,res) =>{
    // axios.get('https://projecteuler.net/minimal=problems')
    try {
		const response = await axios({
			url: `https://projecteuler.net/minimal=${req.params.id}`,
			method: "get",
		});

        
		res.status(200).send(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
})

module.exports = app
