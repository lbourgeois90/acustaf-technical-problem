const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get ('/', (req,res) =>{
    console.log('in GET request');
    console.log('User selected number is', req.query);
    axios(`https://jsonplaceholder.typicode.com/posts`)
    .then ( (result) => {
        res.send(result.data);
    })
    .catch( (error) => {
        console.log('ERROR in GET', error);
        res.sendStatus(500);
    })
})


module.exports = router;