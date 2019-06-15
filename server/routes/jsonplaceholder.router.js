const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get ('/', (req,res) =>{
    console.log('in GET request');
    const selected_number = req.query.selected_number;
    console.log('User selected number is', selected_number);
    axios(`https://jsonplaceholder.typicode.com/posts/${selected_number}`)
    .then ( (result) => {
        console.log(result.data);
        res.send(result.data);
    })
    .catch( (error) => {
        console.log('ERROR in GET', error);
        res.sendStatus(500);
    })
})


module.exports = router;