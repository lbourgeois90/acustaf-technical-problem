const express = require('express');
const router = express.Router();
const axios = require('axios');


//GET request to api endpoint with specified id determined by user selected number
//parse req.query to get user selected number-- set within api endpoint
//upon successful GET of data, send data back to client side to be stored in reducer-rendered on DOM
router.get ('/posts', (req,res) =>{
    // console.log('in GET request');
    const selected_number = req.query.selected_number;
    // console.log('User selected number is', selected_number);
    axios(`https://jsonplaceholder.typicode.com/posts/${selected_number}`)
    .then ( (result) => {
        // console.log(result.data);
        res.send(result.data);
    })
    .catch( (error) => {
        console.log('ERROR in GET', error);
        res.sendStatus(500);
    })
})

//GET request to api endpoint with specified id determined by user selected number
//parse req.query to get user selected number-- set within api endpoint
//upon successful GET of data, send data back to client side to be stored in reducer-rendered on DOM
router.get ('/photos', (req,res) =>{
    // console.log('in GET request');
    const selected_number = req.query.selected_number;
    axios(`https://jsonplaceholder.typicode.com/photos/${selected_number}`)
    .then ( (result) => {
        console.log(result.data);
        res.send(result.data);
    })
    .catch( (error) => {
        console.log('ERROR in GET', error);
        res.sendStatus(500);
    })
})

//GET request to api endpoint with specified id determined by user selected number
//parse req.query to get user selected number-- set within api endpoint
//upon successful GET of data, send data back to client side to be stored in reducer-rendered on DOM
router.get ('/todos', (req,res) =>{
    // console.log('in GET request');
    const selected_number = req.query.selected_number;
    axios(`https://jsonplaceholder.typicode.com/todos/${selected_number}`)
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