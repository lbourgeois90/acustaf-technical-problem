const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const jsonplaceholder = require('../server/routes/jsonplaceholder.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));
app.use('/api/jsonplaceholder', jsonplaceholder);
/** ---------- ROUTES ---------- **/



/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});

module.exports = app;