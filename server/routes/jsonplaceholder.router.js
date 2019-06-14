const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get ('/', (req,res) =>{
    console.log('in GET request');
    axios(`https://jsonplaceholder.typicode.com/posts`)
    .then ( (result) => {
        res.sendStatus(200);
    })
    .catch( (error) => {
        console.log('ERROR in GET');
        res.sendStatus(500);
    })
})


module.exports = router;