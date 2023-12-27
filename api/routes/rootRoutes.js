const express = require('express');
const router = express.Router()
const moment = require('moment');

module.exports = function() {
    router.get('/', (req, res) => {
        res.send(`REST API - Running - ${moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a') } `)
    }) 
    return router;
}